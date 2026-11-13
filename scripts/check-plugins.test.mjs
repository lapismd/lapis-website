import { test } from "node:test";
import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { checkPlugins } from "./check-plugins.mjs";

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
