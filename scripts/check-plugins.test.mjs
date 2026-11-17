import { test } from "node:test";
import assert from "node:assert/strict";
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { hash } from "./artifacts.mjs";
import os from "node:os";
import path from "node:path";
import { checkPlugins } from "./check-plugins.mjs";
import { assertActiveMediaPackage } from "./retired-shared-ai.mjs";

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "lapis-plugin-docs-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const file of [
    "snapshots",
    "src/content/docs/help/plugins",
    "astro.config.mjs",
  ])
    await cp(file, path.join(root, file), { recursive: true });
  return root;
}

test("every reviewed plugin has a guide, overview link and navigation", async () => {
  assert.deepEqual(await checkPlugins(), { plugins: 26, catalog: 19 });
});

test("new source inventory cannot silently lose a plugin", async (t) => {
  const root = await fixture(t);
  const filename = path.join(root, "snapshots/plugins.json");
  const data = JSON.parse(await readFile(filename));
  data.plugins = data.plugins.filter((plugin) => plugin.id !== "bookmarks");
  await writeFile(filename, JSON.stringify(data));
  await assert.rejects(
    checkPlugins(root),
    /Undocumented catalog plugin: bookmarks/,
  );
});

test("a missing practical guide fails coverage", async (t) => {
  const root = await fixture(t);
  await rm(path.join(root, "src/content/docs/help/plugins/docs.md"));
  await assert.rejects(
    checkPlugins(root),
    /Missing guide: \/help\/plugins\/docs\//,
  );
});

test("changed source metadata requires a reviewed checksum update", async (t) => {
  const root = await fixture(t);
  await writeFile(
    path.join(
      root,
      "snapshots/plugin-sources/shared/packages/bases/manifest.json",
    ),
    "{}",
  );
  await assert.rejects(checkPlugins(root), /Plugin source drift/);
});

test("retired shared AI cannot be promoted as an active catalog install", async (t) => {
  const root = await fixture(t);
  const filename = path.join(root, "snapshots/plugins.json");
  const data = JSON.parse(await readFile(filename));
  data.plugins.find((plugin) => plugin.package === "@lapis-notes/ai").status =
    "catalog";
  await writeFile(filename, JSON.stringify(data));
  await assert.rejects(checkPlugins(root), /retired shared.AI/i);
});

test("retired shared media is refused while native and independent AI stay allowed", () => {
  assert.throws(
    () => assertActiveMediaPackage("@lapis-notes/ai"),
    /Retired shared-AI media/,
  );
  assert.doesNotThrow(() => assertActiveMediaPackage("@lapismd/ai"));
  assert.doesNotThrow(() =>
    assertActiveMediaPackage("@lapismd/mira-plugin-ai"),
  );
});

test("the actual artifact importer rejects retired shared-AI media before writes", async (t) => {
  const root = await fixture(t);
  const source = path.join(root, "retired-artifact");
  await mkdir(source);
  const bytes = Buffer.from("retired media fixture");
  await writeFile(path.join(source, "old.png"), bytes);
  await writeFile(
    path.join(source, "manifest.json"),
    JSON.stringify({
      schemaVersion: 1,
      kind: "lapis-website-media",
      revision: "a".repeat(40),
      packageName: "@lapis-notes/ai",
      version: "0.1.15",
      files: [{ path: "old.png", sha256: hash(bytes) }],
    }),
  );
  const ledger = path.join(root, "snapshots/media.json");
  const before = await readFile(ledger, "utf8");
  const result = spawnSync(
    process.execPath,
    [
      fileURLToPath(new URL("./import-media.mjs", import.meta.url)),
      "--artifact",
      source,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Retired shared-AI media/);
  assert.equal(await readFile(ledger, "utf8"), before);
  await assert.rejects(stat(path.join(root, "public")), { code: "ENOENT" });
});
