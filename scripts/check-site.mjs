import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
import { filesUnder } from "./artifacts.mjs";

const root = path.resolve(process.argv[2] ?? "dist");
const pages = (await filesUnder(root)).filter((file) => file.endsWith(".html"));
const cache = new Map();
const failures = [];
for (const page of pages)
  cache.set(page, load(await readFile(path.join(root, page), "utf8")));
for (const page of pages) {
  const $ = cache.get(page);
  const base = new URL(page.replace(/index\.html$/, ""), "https://lapis.md/");
  if (
    /code\.ju\.ma|github\.com\/lapis-notes\/(?:lapis|lapis-notes)(?:["/#]|$)/.test(
      $.html(),
    )
  )
    failures.push(`${page}: stale forge link`);
  for (const element of $(
    "a[href],link[href],img[src],script[src],source[src]",
  ).toArray()) {
    if (page === "404.html" && $(element).attr("rel") === "canonical") continue;
    const value = $(element).attr("href") ?? $(element).attr("src");
    if (!value || /^(?:data:|mailto:|tel:|javascript:)/.test(value)) continue;
    const url = new URL(value, base);
    if (url.origin !== base.origin) continue;
    const pathname = decodeURIComponent(url.pathname);
    let target = pathname.replace(/^\//, "");
    if (!path.extname(target) || target.endsWith("/"))
      target = `${target.replace(/\/$/, "")}/index.html`.replace(/^\//, "");
    try {
      await access(path.join(root, target));
    } catch {
      failures.push(`${page}: missing ${value}`);
      continue;
    }
    if (url.hash && cache.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      const destination = cache.get(target);
      if (
        !destination("[id]")
          .toArray()
          .some((item) => destination(item).attr("id") === id)
      )
        failures.push(`${page}: missing anchor ${value}`);
    }
  }
}
const legacy = JSON.parse(
  await readFile("snapshots/legacy-routes.json", "utf8"),
);
const graph = JSON.parse(
  await readFile(path.join(root, "sitegraph/sitemap.json"), "utf8"),
);
assert.ok(Object.keys(graph).length > 0, "Docs graph has no nodes");
assert.ok(
  !JSON.stringify(graph).includes("developers/api-reference"),
  "Generated API pages entered the docs graph",
);
for (const route of legacy.routes) {
  const target = route === "/" ? "index.html" : `${route.slice(1)}index.html`;
  if (!cache.has(target)) failures.push(`Lost public route: ${route}`);
}
if (failures.length) console.error(failures.join("\n"));
assert.equal(
  failures.length,
  0,
  `Static crawl found ${failures.length} route, anchor, asset or stale-link failures`,
);
console.log(
  `Crawled ${pages.length} pages; preserved ${legacy.routes.length} legacy routes.`,
);
