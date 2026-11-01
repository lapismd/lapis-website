import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile, symlink } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { safePath, hash, verifyArtifact } from "./artifacts.mjs";
import { formatApiMarkdown, referencePath } from "./api-markdown.mjs";
import { publicLine, formatSourceLinks } from "./api-source-links.mjs";

test("public source links keep only verified line locations and reject unreviewed links", () => {
  assert.equal(
    publicLine("before\nmethod()\nafter", "new\nbefore\nmethod()\nafter", 2),
    3,
  );
  assert.equal(
    publicLine("before\nmethod()\nafter", "before\nchanged()\nafter", 2),
    null,
  );
  assert.equal(publicLine("a\nb\nc", "a\nb\nc\na\nb\nc", 2), null);
  const review = {
    snapshotRevision: "a".repeat(40),
    publicRevision: "b".repeat(40),
    files: [{ path: "src/api.ts", lines: { 10: 12, 20: null } }],
  };
  const markdown = `[api.ts:10](https://github.com/lapismd/lapis-notes/blob/${review.snapshotRevision}/src/api.ts#L10)\n[api.ts:20](https://github.com/lapismd/lapis-notes/blob/${review.snapshotRevision}/src/api.ts#L20)`;
  const result = formatSourceLinks(markdown, review);
  assert.ok(
    result.includes(
      `[api.ts:12](https://github.com/lapismd/lapis-notes/blob/${review.publicRevision}/src/api.ts#L12)`,
    ),
  );
  assert.ok(
    result.includes(
      `[api.ts](https://github.com/lapismd/lapis-notes/blob/${review.publicRevision}/src/api.ts)`,
    ),
  );
  assert.throws(
    () => formatSourceLinks(markdown, { ...review, files: [] }),
    /Unreviewed/,
  );
});

test("snapshot paths reject traversal, absolute paths and alternative separators", () => {
  for (const filename of [
    "../secret",
    "/secret",
    "a/../secret",
    "a\\secret",
    "a//b",
    "a/./b",
  ])
    assert.throws(() => safePath(filename));
  assert.equal(safePath("classes/App.md"), "classes/App.md");
});
test("API rendering preserves anchors and maps the historical class-docs route", () => {
  assert.equal(referencePath("classes/App.md"), "class-docs/App.md");
  const result = formatApiMarkdown(
    "# Class: App\n\nSee [Vault](../classes/Vault.md#read).\n",
    "classes/App.md",
  );
  assert.match(result, /title: "App"/);
  assert.match(result, /\/developers\/api-reference\/class-docs\/vault\/#read/);
  assert.throws(() => formatApiMarkdown("Missing heading"), /title/);
});

test("API page titles unescape Markdown generics without a duplicate H1", () => {
  const markdown = formatApiMarkdown(
    "# Class: EditorSuggest\\<T\\>\n\nSuggestions.\n",
    "classes/EditorSuggest.md",
  );
  assert.match(markdown, /title: "EditorSuggest<T>"/);
  assert.doesNotMatch(markdown, /# Class:/);
  assert.match(markdown, /Suggestions\./);
});
test("artifact verification rejects changed bytes, duplicate files and symlinks", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "website-artifact-test-"));
  try {
    const file = { path: "index.md", sha256: hash("# API\n") };
    const manifest = {
      schemaVersion: 1,
      kind: "lapis-api-docs",
      revision: "a".repeat(40),
      files: [file],
    };
    const save = () =>
      writeFile(path.join(root, "manifest.json"), JSON.stringify(manifest));
    await writeFile(path.join(root, "index.md"), "# API\n");
    await save();
    await verifyArtifact(root, "lapis-api-docs");
    await writeFile(path.join(root, "undeclared.md"), "Extra");
    await assert.rejects(verifyArtifact(root, "lapis-api-docs"), /undeclared/);
    await rm(path.join(root, "undeclared.md"));
    await writeFile(path.join(root, "index.md"), "Changed");
    await assert.rejects(verifyArtifact(root, "lapis-api-docs"), /Checksum/);
    await writeFile(path.join(root, "index.md"), "# API\n");
    manifest.files.push(file);
    await save();
    await assert.rejects(verifyArtifact(root, "lapis-api-docs"), /Duplicate/);
    manifest.files = [{ ...file, path: "link.md" }];
    await save();
    await symlink(path.join(root, "index.md"), path.join(root, "link.md"));
    await assert.rejects(verifyArtifact(root, "lapis-api-docs"), /symlinks/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
