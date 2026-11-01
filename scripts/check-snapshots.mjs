import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { hash, filesUnder, verifyArtifact } from "./artifacts.mjs";
import { formatApiMarkdown, referencePath } from "./api-markdown.mjs";

const manifest = await verifyArtifact("snapshots/api", "lapis-api-docs");
const sourceReview = JSON.parse(
  await readFile("snapshots/api-source-links.json", "utf8"),
);
assert.equal(sourceReview.schemaVersion, 1);
assert.equal(sourceReview.snapshotRevision, manifest.revision);
assert.equal(sourceReview.repository, manifest.repository);
assert.match(sourceReview.publicRevision, /^[a-f0-9]{40}$/);
assert.equal(
  new Set(sourceReview.files.map((file) => file.path)).size,
  sourceReview.files.length,
);
for (const file of sourceReview.files) {
  assert.match(file.snapshotSha256, /^[a-f0-9]{64}$/);
  assert.match(file.publicSha256, /^[a-f0-9]{64}$/);
}
const referenceRoot = "src/content/docs/developers/api-reference";
assert.deepEqual(
  await filesUnder(referenceRoot),
  manifest.files.map((file) => referencePath(file.path)).sort(),
  "Generated API inventory drifted",
);
for (const file of manifest.files) {
  const raw = await readFile(path.join("snapshots/api", file.path), "utf8");
  for (const source of raw.matchAll(
    /https:\/\/github\.com\/lapismd\/lapis-notes\/blob\/([a-f0-9]{40})\//g,
  ))
    assert.equal(
      source[1],
      manifest.revision,
      `API source revision drift: ${file.path}`,
    );
  assert.equal(
    await readFile(path.join(referenceRoot, referencePath(file.path)), "utf8"),
    formatApiMarkdown(raw, file.path, sourceReview),
    `API drift: ${file.path}`,
  );
}
const media = JSON.parse(await readFile("snapshots/media.json", "utf8"));
const release = JSON.parse(
  await readFile("snapshots/desktop-release.json", "utf8"),
);
assert.equal(release.schemaVersion, 1);
assert.equal(release.prerelease, true);
assert.match(release.sourceRevision, /^[a-f0-9]{40}$/);
assert.equal(
  release.releaseUrl,
  `${release.repository}/releases/tag/${release.tagName}`,
);
const installation = await readFile(
  "src/content/docs/help/getting-started/download-and-install.md",
  "utf8",
);
for (const asset of release.assets) {
  assert.equal(
    asset.url,
    `${release.repository}/releases/download/${release.tagName}/${asset.name}`,
  );
  assert.match(asset.sha256, /^[a-f0-9]{64}$/);
  assert.ok(asset.bytes > 0);
  assert.ok(
    installation.includes(asset.url),
    `Reviewed download missing from guide: ${asset.name}`,
  );
}
for (const file of media.files) {
  assert.match(file.version, /^\d+\.\d+\.\d+/);
  assert.equal(
    hash(await readFile(path.join("public", file.path))),
    file.sha256,
    `Media drift: ${file.path}`,
  );
  assert.match(file.revision, /^[a-f0-9]{40}$/);
}
const audit = JSON.parse(
  await readFile("snapshots/content-audit.json", "utf8"),
);
const authored = (await filesUnder("src/content/docs"))
  .filter(
    (file) =>
      file.endsWith(".md") && !file.startsWith("developers/api-reference/"),
  )
  .map((file) => `src/content/docs/${file}`);
assert.deepEqual(
  authored,
  audit.files.map((file) => file.path).sort(),
  "Authored-page audit inventory drifted",
);
for (const file of audit.files)
  assert.equal(
    hash(await readFile(file.path)),
    file.sha256,
    `Review content audit: ${file.path}`,
  );
console.log(
  `Verified ${manifest.files.length} API pages, ${media.files.length} source-owned media files and ${audit.files.length} authored-page reviews.`,
);
