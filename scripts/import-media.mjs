import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { hash, readArtifactFile, verifyArtifact } from "./artifacts.mjs";

const args = process.argv.slice(2);
assert.ok(
  (args.length === 2 ||
    (args.length === 4 &&
      args[0] === "--registry" &&
      args[2] === "--plugin")) &&
    ["--registry", "--artifact"].includes(args[0]),
  "Usage: pnpm media:import --registry <lapis-plugins checkout> [--plugin <id>] | --artifact <source media artifact>",
);
const source = path.resolve(args[1]);
const ledgerPath = "snapshots/media.json";
const ledger = await readFile(ledgerPath, "utf8")
  .then(JSON.parse)
  .catch((error) => {
    if (error.code === "ENOENT") return { schemaVersion: 1, files: [] };
    throw error;
  });
let captures;
if (args[0] === "--registry") {
  const result = spawnSync(
    "jj",
    [
      "--ignore-working-copy",
      "--no-pager",
      "log",
      "-r",
      "heads(::@ & ~empty())",
      "--no-graph",
      "-T",
      "commit_id",
    ],
    { cwd: source, encoding: "utf8" },
  );
  assert.equal(result.status, 0);
  const revision = result.stdout.trim();
  assert.match(revision, /^[a-f0-9]{40}$/);
  captures = [];
  const plugins = [
    "markdown",
    "graph",
    "canvas",
    "bases",
    "search",
    "pdf",
    "slides",
    "community",
    "history",
    "ai",
  ];
  if (args[3]) assert.ok(plugins.includes(args[3]), "Unknown plugin selection");
  for (const plugin of args[3] ? [args[3]] : plugins) {
    const prefix = `packages/${plugin}/`;
    const registry = JSON.parse(
      await readArtifactFile(source, `${prefix}registry.json`),
    );
    const pkg = JSON.parse(
      await readArtifactFile(source, `${prefix}package.json`),
    );
    for (const role of ["banner", "overview"]) {
      const item = registry.media[role];
      if (!item) continue;
      for (const theme of ["light", "dark"])
        captures.push({
          path: `media/${plugin}-${role}.${theme}.webp`,
          sourcePath: `${prefix}${item.images[theme].path}`,
          storyId: item.capture.storyId,
          alt: item.alt,
          theme,
          revision,
          packageName: pkg.name,
          version: pkg.version,
          repository: "https://github.com/lapismd/lapis-plugins",
          viewport: { width: 1200, height: 800 },
          deviceScaleFactor: 2,
        });
    }
  }
} else {
  const artifact = await verifyArtifact(source, "lapis-website-media");
  assert.match(artifact.version, /^\d+\.\d+\.\d+/);
  assert.ok(artifact.packageName);
  captures = artifact.files.map((file) => ({
    ...file,
    revision: artifact.revision,
    repository: artifact.repository,
    packageName: artifact.packageName,
    version: artifact.version,
    sourcePath: file.path,
    path: `media/${path.basename(file.path)}`,
  }));
}
const validated = [];
const destinations = new Set();
for (const capture of captures) {
  assert.ok(
    !destinations.has(capture.path),
    `Duplicate media path: ${capture.path}`,
  );
  destinations.add(capture.path);
  assert.deepEqual(capture.viewport, { width: 1200, height: 800 });
  assert.equal(capture.deviceScaleFactor, 2);
  assert.match(capture.revision, /^[a-f0-9]{40}$/);
  assert.ok(["light", "dark"].includes(capture.theme));
  assert.ok(
    capture.storyId && capture.alt,
    "Media must have a fixed story and alt text",
  );
  const bytes = await readArtifactFile(source, capture.sourcePath);
  if (capture.sha256) assert.equal(hash(bytes), capture.sha256);
  const metadata = await sharp(bytes).metadata();
  assert.equal(metadata.width, 2400);
  assert.equal(metadata.height, 1600);
  validated.push({ capture, bytes });
}
for (const { capture, bytes } of validated) {
  await mkdir(path.dirname(path.join("public", capture.path)), {
    recursive: true,
  });
  await writeFile(path.join("public", capture.path), bytes);
  ledger.files = ledger.files.filter((file) => file.path !== capture.path);
  ledger.files.push({ ...capture, sha256: hash(bytes) });
}
ledger.files.sort((a, b) => a.path.localeCompare(b.path));
await writeFile(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`);
console.log(`Imported ${validated.length} themed product captures.`);
