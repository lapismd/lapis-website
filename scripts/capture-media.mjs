import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createServer } from "node:http";
import { stat, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { captureSubjectWithBrowser } from "@lapismd/storybook-addon-visual-delta/node";
import { hash, readArtifactFile } from "./artifacts.mjs";

const values = process.argv.slice(2);
const options = Object.fromEntries(
  values.reduce(
    (pairs, value, index) =>
      index % 2
        ? pairs
        : [...pairs, [value.replace(/^--/, ""), values[index + 1]]],
    [],
  ),
);
for (const key of ["source", "catalog", "storybook", "output"])
  assert.ok(options[key], `Missing --${key}`);
const source = path.resolve(options.source),
  storybook = path.resolve(options.storybook);
const catalog = JSON.parse(await readArtifactFile(source, options.catalog));
const sourcePackage = JSON.parse(
  await readArtifactFile(source, "package.json"),
);
assert.equal(catalog.schemaVersion, 1);
const index = JSON.parse(
  await readFile(path.join(storybook, "index.json"), "utf8"),
);
const revisionResult = spawnSync(
  "jj",
  [
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
assert.equal(revisionResult.status, 0);
const revision = revisionResult.stdout.trim();
assert.match(revision, /^[a-f0-9]{40}$/);
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let file = path.resolve(storybook, `.${pathname}`);
    assert.ok(file.startsWith(`${storybook}/`));
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    const types = {
      ".js": "text/javascript",
      ".css": "text/css",
      ".html": "text/html",
      ".json": "application/json",
      ".woff2": "font/woff2",
      ".svg": "image/svg+xml",
      ".wasm": "application/wasm",
    };
    response.setHeader(
      "Content-Type",
      types[path.extname(file)] ?? "application/octet-stream",
    );
    response.end(await readFile(file));
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const output = path.resolve(options.output);
await mkdir(output, { recursive: true });
const files = [];
try {
  for (const capture of catalog.captures) {
    assert.ok(
      index.entries[capture.storyId],
      `Missing declared story: ${capture.storyId}`,
    );
    assert.match(capture.id, /^[a-z][a-z0-9-]+$/);
    for (const theme of ["light", "dark"]) {
      const result = await captureSubjectWithBrowser({
        origin: `http://127.0.0.1:${server.address().port}`,
        storyId: capture.storyId,
        viewport: { width: 1200, height: 800 },
        deviceScaleFactor: 2,
        cropToViewport: true,
        globals: `colorMode:${theme};theme:lapis`,
        browser: "chromium",
      });
      assert.ok(result.ok, `${capture.storyId} ${theme}: ${result.error}`);
      assert.equal(result.width, 2400);
      assert.equal(result.height, 1600);
      const bytes = await sharp(Buffer.from(result.pngBase64, "base64"))
        .webp({ lossless: true })
        .toBuffer();
      const filename = `${capture.id}.${theme}.webp`;
      await writeFile(path.join(output, filename), bytes);
      files.push({
        path: filename,
        sha256: hash(bytes),
        storyId: capture.storyId,
        alt: capture.alt,
        theme,
        viewport: { width: 1200, height: 800 },
        deviceScaleFactor: 2,
      });
      console.log(`Captured ${capture.storyId} (${theme}).`);
    }
    const pair = files.slice(-2);
    assert.notEqual(
      pair[0].sha256,
      pair[1].sha256,
      "Light and dark captures must differ",
    );
  }
  await writeFile(
    path.join(output, "manifest.json"),
    `${JSON.stringify({ schemaVersion: 1, kind: "lapis-website-media", repository: catalog.repository, packageName: sourcePackage.name, version: sourcePackage.version, revision, files }, null, 2)}\n`,
  );
} finally {
  await new Promise((resolve) => {
    server.close(resolve);
    server.closeAllConnections();
  });
}
