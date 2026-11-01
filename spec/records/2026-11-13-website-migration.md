# Standalone website migration verification

The standalone private package `@lapismd/lapis-website` preserves the legacy
Astro/Starlight site, public routes, violet presentation, theme preference and
interactive docs graph. Reviewed content and media are committed snapshots;
normal installs and builds do not need siblings, Storybook or source services.

## Reviewed content and source checkpoints

All 51 help and 28 developer guides were reviewed on November 1. Their exact
hashes and owning source references are in `snapshots/content-audit.json`.
The November 13 follow-up updates download guidance against the newly public
`desktop-v2026.31.6-rc.1` release, with archive URLs, sizes, GitHub digests and
platform limits in `snapshots/desktop-release.json`. macOS remains a build-only,
ad-hoc signed, unnotarized preview; Linux's limited acceptance is stated
explicitly. Release evidence does not turn the website captures into native
qualification.

| Source owner               | Reviewed revision                          | Delivery branch          |
| -------------------------- | ------------------------------------------ | ------------------------ |
| Notes API exporter         | `60c709ad0425aa5dcd5920436ed65f1504247ee3` | `website/api-export`     |
| First-party Markdown media | `003d7d27cab3316297d95e8088cffc7e9742f5f4` | `website/markdown-media` |
| Notebook media             | `907a20c6983a385f7be5a1f647f01900f5296b70` | `website/notebook-media` |
| Desktop media              | `6b8479ce947fc0eb12fc62edac68ad662fbdd8ad` | `website/desktop-media`  |

API export has 132 raw Markdown pages, package version 0.2.4 and SHA-256
inventory. Presentation retains `class-docs` routes, rendered generic titles,
member anchors and public source links. The reviewed public link mapping targets
`e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7`, checked against all 30 source
files. Of 1,478 unique declaration locations, 1,475 retain verified unchanged
line context; three open the verified public file without a misleading line
anchor. Raw snapshot provenance remains intact. GitHub resolves the original
Notes, Notebook and Desktop snapshot commits after their feature-branch pushes.

The media manifest records 42 themed images: 32 first-party plugin, four Desktop
and six Notebook captures. Plain captures use 1200x800 CSS pixels at 2x density.
Only Markdown's four website images were refreshed in the November 13 registry
import, retaining the other plugin snapshot revisions. Both Reading captures
now show the embedded map. Source-owned readiness and deterministic media checks
remain separate from visual-baseline approval.

## Executed website validation

- Frozen registry install from an isolated tracked-file export passed with
  pnpm 10.34.5 and Node 24, applying both declared dependency patches.
- `pnpm check`: formatter and snapshot inventory passed; Astro checked 26 files
  with zero errors, warnings or hints.
- `pnpm test`: six generator/import/graph/source-link tests passed, zero failed.
- `pnpm spec:check`: validation, mdBook and spec-first passed.
- `pnpm build`: 216 static pages and the Pagefind search index built.
- `pnpm site:check`: 216 pages crawled, all 199 legacy routes preserved, no
  route, anchor, asset or graph-inventory failures. Generated API pages remain
  excluded from graph data and presentation.
- `pnpm test:browser`: all 20 tests passed. The isolated standalone export also
  passed all 20 tests with a fresh preview process, in addition to its own
  formatter, snapshot, Astro, unit, spec, build and crawl checks.
- Doctor passed nine checks with two QMD availability warnings. The installed
  registry spec-validator 0.2.0 is still latest; `spec:search` used the documented
  rg fallback because QMD is absent from PATH. No gate was disabled.

Browser coverage includes selected sidebar contrast, generic API titles, inline
code, header borders, desktop/mobile navigation, search, keyboard controls,
fullscreen graph and Escape, theme persistence, resolved images, all three legal
pages and the download guide. Tablet contents labels pass at 375, 768 and 975px;
link underlines appear on hover. Navigation runs at 375, 768 and 1440px. Eight
representative routes pass axe. Light/dark landing and developer screenshots were
reviewed without recording or updating visual baselines. The earlier unchanged
graph-node navigation review reached the linked Bases guide.

## Source qualification and accepted limits

Notes' exporter receipt records its three focused tests, zero-warning TypeDoc
export, API build/prepack/publint/packed types, Docker check/test/spec lanes and
1,745 API unit tests. Website imports remain independent of source qualification.

Markdown's source receipt records five affected story interaction/axe passes,
154 unit tests, package checks/build/publint, App ownership, specifications,
fresh static capture and six deterministic media items. Its unchanged parent
reproduces seven unignored Hono audit advisories (six moderate, one low). On
November 13 the user accepted recording that inherited limitation and keeping
the migration focused. The audit and all existing assertions remain enabled.

The user previously accepted Notebook's three new media-story axe failures:
Mira code color contrast and nested focusable cell controls. All 67 existing
stories passed, as did 514 units, package/build/pack/consumer/spec lanes and
static Storybook. Those three failures remain failures and are not exempted.

The user also accepted Desktop's inherited file-icon failure, seven stale
evidence paths, shared launcher contrast and dependency/Docker prerequisites.
The new source scenes, renderer checks/build and cold static capture passed.
Complete Launcher/WebsiteMedia results were 15/0 desktop light, 15/0 narrow light,
14/1 desktop dark and 1/14 narrow dark. The broad sharded command stopped after
127 passes and the existing icon failure in its first shard; it is not a full
catalog pass. Other canceled broad runs have no complete result. Source receipts
E-SITE-001 and E-SITE-002 retain the limits.

## Retained failed attempts and scope

November 1 overlapping heavy runs caused memory pressure and a website preview
startup timeout before tests. They were canceled and do not qualify the site.
Final November 13 website lanes ran serially and passed. Earlier importer,
malformed API-fence, escaped-title, stylesheet selector, image-readiness and
temporary theme-annotation diagnoses informed the final regressions; the final
checks retain their assertions.

The requested graph 0.5.0 patch and explicitly authorized Starlight 0.39.3
accessibility patch remain local through pnpm patchedDependencies and the frozen
lock. No upstream graph contribution, package publication or baseline approval
is included. Unrelated work and the existing Plugins main-bookmark conflict were
preserved. Owning changes are committed separately with Jujutsu.

The legacy live sitemap returned HTTP 403 during initial inventory. The
199-route preservation baseline comes from its actual static build. Live
Cloudflare cutover identities and smoke results belong in a separate deployment
receipt; they do not replace this source/build qualification.
