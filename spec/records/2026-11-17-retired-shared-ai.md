# Retired shared AI installation guidance

The shared `@lapis-notes/ai` implementation was removed in Plugins PR #155,
merge `e8f8eb1b73ffe4bc2b96974c7388e2efbe4b911f`. The website now marks that
exact package as retired, removes it from active installation guidance and
links the current Desktop/native owners. All 26 known plugin guides and public
routes remain. The active table has 18 entries; the reviewed historical catalog
still contains 19 entries and is retained unchanged with its source checksums.

Raw plugin source and media snapshots remain historical provenance. The AI
guide does not display the old shared implementation's captures. Registry media
selection excludes it, and artifact imports reject its exact package coordinate
before any asset or ledger write. Native `@lapismd/ai`, independent Mira AI and
unrelated plugin identities remain allowed. Existing settings, conversations and
memory must remain in place; this website change performs no data migration.

## Source qualification

- Original offline plugin coverage baseline: 4 passed. The new promotion
  regression initially failed once with the 4 existing tests still passing.
  Final focused coverage/importer target: 7 passed, 0 failed. The actual importer
  subprocess is checked for failure before asset creation or ledger modification.
- Frozen registry install passed. Only spec-validator changes in the lockfile,
  from 0.2.0 to the Deno-free 0.2.1; existing site patches remain unchanged.
- `pnpm check` passed formatting, reviewed hashes, offline plugin coverage and
  Astro with 0 errors, warnings or hints. `pnpm test`: 13 passed, 0 failed.
- `pnpm spec:check`: all 3 lanes passed. `pnpm build`: 234 pages.
  `pnpm site:check`: preserved-route, link and asset checks passed.
- The initial browser run had 23 passes and 2 failures from the obsolete
  19-active-row expectation. The corrected test asserts 18 active rows, absence
  of shared AI in that table, the retained AI status route, current source
  ownership and data-preservation guidance. Complete cold browser reruns passed
  all 25 cases. The exact `pnpm exec playwright test --grep 'complete plugin
inventory and new guides'` target passed both 375px and 1440px cases.
  `pnpm test:browser -- --grep ...` did not select tests and instead ran all 25;
  that run is recorded as full-suite evidence, not focused evidence.
- No visual baseline changed. Browser screenshots are review artifacts only.

Local qualification used Node 26.9.0, within the declared engine range. Hosted
CI must separately qualify the repository-pinned Node 24.15.0 before landing.
Spec-validator doctor found a host QMD native-module ABI mismatch; semantic
search explicitly degraded to its text fallback, and the canonical website
chapter was read directly. No global tool repair or diagnostic suppression was
performed. This receipt does not claim native AI lifecycle/data qualification.

## Remaining release gates

Merge does not deploy this website: publication uses its manually dispatched
deployment workflow and retains its explicit authorization gate. The live signed
registry may still contain the retired package until its separately reviewed,
approved signing and deployment changes land. No npm deprecation, unpublish,
registry signing or deployment is included in this source change.
