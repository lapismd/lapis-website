import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { lstat, readFile, realpath, readdir } from "node:fs/promises";
import path from "node:path";

export const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
export function safePath(value) {
  assert.equal(typeof value, "string", "Artifact paths must be strings");
  assert.ok(
    value &&
      !value.includes("\\") &&
      !value.includes("\0") &&
      !value.startsWith("/") &&
      value.split("/").every((part) => part && part !== "." && part !== ".."),
    `Unsafe artifact path: ${value}`,
  );
  return value;
}
export async function readArtifactFile(root, filename) {
  safePath(filename);
  const canonicalRoot = await realpath(root);
  const target = path.join(canonicalRoot, filename);
  const canonicalTarget = await realpath(target);
  assert.ok(
    canonicalTarget.startsWith(`${canonicalRoot}${path.sep}`),
    "Artifact escapes its root",
  );
  assert.ok(
    !(await lstat(target)).isSymbolicLink(),
    "Artifact symlinks are forbidden",
  );
  return readFile(target);
}
export async function verifyArtifact(root, kind) {
  const manifest = JSON.parse(
    await readFile(path.join(root, "manifest.json"), "utf8"),
  );
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.kind, kind);
  assert.match(manifest.revision, /^[a-f0-9]{40}$/);
  assert.ok(manifest.files.length > 0, "Empty artifact");
  const seen = new Set();
  for (const file of manifest.files) {
    safePath(file.path);
    assert.ok(!seen.has(file.path), `Duplicate artifact path: ${file.path}`);
    seen.add(file.path);
    assert.equal(
      hash(await readArtifactFile(root, file.path)),
      file.sha256,
      `Checksum mismatch: ${file.path}`,
    );
  }
  assert.deepEqual(
    await filesUnder(root),
    ["manifest.json", ...seen].sort(),
    "Artifact contains undeclared files",
  );
  return manifest;
}
export async function filesUnder(root, base = root) {
  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    assert.ok(!entry.isSymbolicLink(), "Snapshot symlinks are forbidden");
    const filename = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(filename, base)));
    else files.push(path.relative(base, filename).split(path.sep).join("/"));
  }
  return files.sort();
}
