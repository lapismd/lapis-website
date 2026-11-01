import assert from "node:assert/strict";
import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verifyArtifact } from "./artifacts.mjs";
import { formatApiMarkdown, referencePath } from "./api-markdown.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = process.argv[2];
assert.ok(
  source,
  "Usage: pnpm api-docs:import <exported API artifact directory>",
);
const manifest = await verifyArtifact(source, "lapis-api-docs");
const sourceReview = JSON.parse(
  await readFile(path.join(root, "snapshots/api-source-links.json"), "utf8"),
);
assert.equal(sourceReview.snapshotRevision, manifest.revision);
assert.equal(manifest.packageName, "@lapis-notes/api");
assert.equal(manifest.repository, "https://github.com/lapismd/lapis-notes");
assert.match(manifest.version, /^\d+\.\d+\.\d+/);
assert.ok(manifest.files.some((file) => file.path === "index.md"));
const staging = path.join(root, ".local/api-import");
await rm(staging, { recursive: true, force: true });
await mkdir(staging, { recursive: true });
for (const file of manifest.files) {
  assert.ok(
    file.path.endsWith(".md"),
    "Only Markdown may enter the API reference",
  );
  const destination = path.join(staging, referencePath(file.path));
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(
    destination,
    formatApiMarkdown(
      await readFile(path.join(source, file.path), "utf8"),
      file.path,
      sourceReview,
    ),
  );
}
const snapshot = path.join(root, "snapshots/api");
await rm(snapshot, { recursive: true, force: true });
await cp(source, snapshot, { recursive: true });
const destination = path.join(
  root,
  "src/content/docs/developers/api-reference",
);
// Validation and rendering finish before the reviewed reference is replaced.
await rm(destination, { recursive: true, force: true });
await rename(staging, destination);
console.log(
  `Imported ${manifest.files.length} API pages from ${manifest.packageName}@${manifest.version}.`,
);
