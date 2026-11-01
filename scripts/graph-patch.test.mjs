import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";
import micromatch from "micromatch";

const { firstMatchingPattern } = await import(
  pathToFileURL(
    path.resolve(
      "node_modules/starlight-site-graph/components/graph/path-patterns.js",
    ),
  )
);
test("patched graph preserves first-match glob and exclusion semantics in the browser", () => {
  const rules = [
    "!developers/api-reference/**",
    "help{,/**}",
    "developers/**",
    "**/*.md",
  ];
  const compiled = rules.map((rule) => {
    const include = !rule.startsWith("!");
    const pattern = micromatch.makeRe(include ? rule : rule.slice(1));
    return { source: pattern.source, flags: pattern.flags, include };
  });
  for (const value of [
    "help",
    "help/",
    "help/plugins/notebook",
    "developers/index",
    "developers/api-reference/class-docs/app",
    "notes/first.md",
    "unmatched",
  ]) {
    const matching = rules.find((rule) =>
      micromatch.isMatch(value, rule.replace(/^!/, "")),
    );
    assert.equal(
      firstMatchingPattern(value, compiled, undefined),
      matching === undefined ? undefined : !matching.startsWith("!"),
      value,
    );
  }
});
