# Complete plugin guides and current Bases media

The November 13 source/catalog review found 26 known plugin IDs: 19 in the
published catalog, File Explorer in the Notes-owned shared default profile,
two additional public-source plugins, two source previews and two private parked
packages. Eighteen lacked dedicated guides or explanatory status pages.

## Documentation coverage

`snapshots/plugins.json` pins the catalog and owning source revisions. Raw
metadata under `snapshots/plugin-sources/` has reviewed checksums. The website
now has 97 authored pages, including dedicated guides/status pages and overview
and navigation links for all 26 IDs. Catalog versions remain separate from source
versions. CV Roles/Nostr Sync have no unverified public installation links;
Community and legacy Sync are explicitly parked. The default profile names only
Source Editor, Markdown, File Explorer and Search.

Tasks now documents the current standalone planner and Open tasks command while
retaining host-version boundaries. Bases documents Table/Cards/List/Kanban and
Activity, explicit unavailable map behavior and read-only embeds. CSV describes
actual editable CSV/TSV behavior rather than calling it a read-only preview.

`pnpm plugins:check` initially reported 18 missing guides and related link gaps;
after the additions it verifies all 26 guides and 19 catalog entries offline.
Four regression cases cover complete coverage, source/catalog omissions, missing
guides and changed raw metadata. The ordinary website build requires no sibling
repository or registry request. Catalog signatures were not independently checked
as part of this documentation review.

## Bases capture provenance

Owning source commit `a6a73edfa747980cba7395121e6b380a434986dc` is publicly
available on `lapismd/lapis-plugins`, bookmark `website/bases-media`.
Package `@lapis-notes/bases@0.3.1` supplied all seven declared media items,
28 regenerated assets. Its six cold capture stories passed interaction/axe;
277 package tests, package checks/build/publint/pack, App-ownership audit,
specification checks and deterministic media reproduction passed. Audit found
zero unignored findings (two unchanged low exceptions). The owner receipt records
all commands and the initially repaired spec-first evidence requirement.

The website imports only the four plain banner/overview captures. Cover cards
and the separate Grouped List retain the existing frames in both themes at
1200x800 CSS pixels and 2x density. Captions now describe cards accurately.
No plugin runtime, visual baseline, registry release or npm publication changed.

## Browser test development

The first expanded browser lane had 21 passes and one new mobile-test failure:
the test selected the hidden desktop theme picker at 375px. The repaired test
opens the mobile menu and selects its visible combobox. Screenshot attachment
setup briefly exposed one test-local ReferenceError, which was corrected. One
accidentally overlapping local run failed at the occupied preview port and
interfered with trace output; subsequent runs are serial with fresh servers.
The exact final 375px test passed in a cold run (1 passed, 0 failed, 9.7s).
No product assertion, timeout or accessibility check was weakened.

Earlier accepted Notebook accessibility, Desktop qualification and old Markdown
workspace Hono audit limitations remain in the initial migration/source receipts.
This focused follow-up does not claim those unrelated issues are fixed. QMD is
absent; spec search used the documented rg fallback, with doctor reporting nine
passes and two QMD warnings. Spec-validator 0.2.0 remained the latest release.

## Final local qualification

A frozen registry install passed with the existing pnpm policy (the optional
workerd install script remains unapproved). Format, raw snapshots, all 97 authored
hashes, all 26 plugin guides and Astro checks passed: zero errors, warnings or
hints. All ten unit/generator/coverage tests passed. All three specification lanes
passed. The static build produced 234 pages; the crawl preserved all 199 legacy
routes with zero route, anchor, asset or stale-forge-link failures. All 25 browser
checks passed serially against a fresh static preview (43.5s), including axe for
the inventory, Bases and Docs, both themed Bases images at their exact dimensions,
mobile menu/theme interaction, graph controls and generated-API exclusion.
Desktop and mobile inventory/Bases screenshots were visually reviewed separately
from baseline approval. No visual baseline changed.

The first noninteractive install attempt requested a TTY before refreshing the
local modules directory; rerunning the same frozen install with `CI=true` passed.
No dependency versions or lockfile changed in this follow-up.
