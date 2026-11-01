import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import {
  hash,
  safePath,
  verifyArtifact,
  readArtifactFile,
} from "./artifacts.mjs";
import { publicLine, sourcePattern } from "./api-source-links.mjs";

const [snapshotRepository, publicSource, publicRevision] =
  process.argv.slice(2);
assert.ok(
  snapshotRepository && publicSource,
  "Usage: pnpm api-docs:review-source <snapshot repository> <verified public source tree> <public commit SHA>",
);
assert.match(publicRevision, /^[a-f0-9]{40}$/);
const manifest = await verifyArtifact("snapshots/api", "lapis-api-docs");
const links = new Map();
for (const file of manifest.files) {
  const raw = await readArtifactFile("snapshots/api", file.path);
  for (const match of raw.toString().matchAll(sourcePattern)) {
    assert.equal(match[2], manifest.revision);
    const sourcePath = safePath(match[3]);
    if (!links.has(sourcePath)) links.set(sourcePath, new Set());
    links.get(sourcePath).add(Number(match[4]));
  }
}
const files = [];
for (const [sourcePath, lines] of [...links].sort(([a], [b]) =>
  a.localeCompare(b),
)) {
  const result = spawnSync(
    "jj",
    ["--no-pager", "file", "show", "-r", manifest.revision, sourcePath],
    { cwd: path.resolve(snapshotRepository), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const published = await readArtifactFile(publicSource, sourcePath);
  files.push({
    path: sourcePath,
    snapshotSha256: hash(result.stdout),
    publicSha256: hash(published),
    lines: Object.fromEntries(
      [...lines]
        .sort((a, b) => a - b)
        .map((line) => [
          line,
          publicLine(result.stdout, published.toString(), line),
        ]),
    ),
  });
}
await writeFile(
  "snapshots/api-source-links.json",
  `${JSON.stringify({ schemaVersion: 1, repository: manifest.repository, snapshotRevision: manifest.revision, publicRevision, files }, null, 2)}\n`,
);
console.log(
  `Reviewed ${files.length} public source files. Review the public commit and file hashes before importing.`,
);
