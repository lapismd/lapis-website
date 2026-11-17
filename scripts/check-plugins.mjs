import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { hash, readArtifactFile, filesUnder } from "./artifacts.mjs";
import { isRetiredSharedAi } from "./retired-shared-ai.mjs";

export async function checkPlugins(root = ".") {
  const read = (name) => readArtifactFile(root, name);
  const inventory = JSON.parse(await read("snapshots/plugins.json"));
  assert.equal(inventory.schemaVersion, 1);
  const declared = new Set([inventory.catalog.snapshotPath]);
  const rawCatalog = await read(inventory.catalog.snapshotPath);
  assert.equal(hash(rawCatalog), inventory.catalog.sha256);
  const catalog = JSON.parse(rawCatalog);
  const sources = new Map();
  for (const [key, source] of Object.entries(inventory.sources)) {
    assert.match(source.revision, /^[a-f0-9]{40}$/);
    const files = new Map();
    for (const file of source.files) {
      assert.ok(!declared.has(file.snapshotPath), "Duplicate source snapshot");
      declared.add(file.snapshotPath);
      const raw = await read(file.snapshotPath);
      assert.equal(hash(raw), file.sha256, `Plugin source drift: ${file.path}`);
      files.set(file.path, raw.toString());
    }
    sources.set(key, files);
  }
  assert.deepEqual(
    await filesUnder(`${root}/snapshots/plugin-sources`),
    [...declared].map((p) => p.replace("snapshots/plugin-sources/", "")).sort(),
    "Undeclared plugin source snapshot",
  );
  const ids = new Set();
  const packages = new Set();
  const guides = new Set();
  const failures = [];
  const overview = (
    await read("src/content/docs/help/plugins/core-plugins-overview.md")
  ).toString();
  const navigation = (await read("astro.config.mjs")).toString();
  for (const plugin of inventory.plugins) {
    assert.ok(!ids.has(plugin.id), `Duplicate plugin ID: ${plugin.id}`);
    assert.ok(
      !packages.has(plugin.package),
      `Duplicate package: ${plugin.package}`,
    );
    assert.ok(!guides.has(plugin.guide), `Duplicate guide: ${plugin.guide}`);
    ids.add(plugin.id);
    packages.add(plugin.package);
    guides.add(plugin.guide);
    assert.match(plugin.guide, /^\/help\/plugins\/[a-z0-9/-]+\/$/);
    assert.ok(
      [
        "catalog",
        "retired",
        "shared-profile",
        "public-source",
        "source-preview",
        "parked",
      ].includes(plugin.status),
    );
    const source = sources.get(plugin.source);
    assert.ok(source, `Unknown source: ${plugin.source}`);
    const pkg = JSON.parse(source.get(plugin.packagePath));
    assert.equal(plugin.package, pkg.name);
    assert.equal(plugin.version, pkg.version);
    if (plugin.manifestPath.endsWith(".json")) {
      const manifest = JSON.parse(source.get(plugin.manifestPath));
      assert.equal(manifest.id, plugin.id);
    } else {
      assert.ok(source.get(plugin.manifestPath).includes(`"${plugin.id}"`));
    }
    const published = catalog.plugins.find((item) => item.id === plugin.id);
    assert.equal(plugin.catalogVersion, published?.latestVersion);
    const retired = isRetiredSharedAi(plugin.package);
    if (retired)
      assert.equal(
        plugin.status,
        "retired",
        "Retired shared-AI must not be promoted as an active install",
      );
    if (plugin.status === "retired")
      assert.ok(
        retired,
        "Unknown retired package requires an explicit owner decision",
      );
    assert.equal(plugin.status === "catalog", Boolean(published) && !retired);
    if (plugin.source === "shared")
      assert.equal(plugin.status === "parked", Boolean(pkg.private));
    const filename = `src/content/docs${plugin.guide.slice(0, -1)}.md`;
    try {
      await read(filename);
    } catch {
      failures.push(`Missing guide: ${plugin.guide}`);
    }
    if (!overview.includes(`](${plugin.guide})`))
      failures.push(`Missing overview link: ${plugin.id}`);
    if (!navigation.includes(`"${plugin.guide}"`))
      failures.push(`Missing navigation: ${plugin.id}`);
  }
  for (const item of catalog.plugins)
    assert.ok(ids.has(item.id), `Undocumented catalog plugin: ${item.id}`);
  for (const [key, source] of sources) {
    for (const filename of source.keys()) {
      if (filename.endsWith("/manifest.json") || filename === "manifest.json") {
        const manifest = JSON.parse(source.get(filename));
        assert.ok(
          inventory.plugins.some(
            (item) => item.id === manifest.id && item.source === key,
          ),
          `Undocumented source plugin: ${manifest.id}`,
        );
      }
    }
  }
  assert.equal(failures.length, 0, failures.join("\n"));
  return { plugins: ids.size, catalog: catalog.plugins.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const counts = await checkPlugins();
  console.log(
    `Verified ${counts.plugins} plugin guides and ${counts.catalog} catalog entries against reviewed source snapshots.`,
  );
}
