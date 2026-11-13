# @lapismd/lapis-website

Static Astro/Starlight marketing, help and developer documentation for
[Lapis Notes](https://lapis.md). The primary application is the Tauri Desktop
preview. This private workspace package is not published to npm.

## Development

Use the Node version in `.node-version` and pnpm 10.34.5.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm test
pnpm spec:check
pnpm build
pnpm site:check
pnpm exec playwright install chromium
pnpm test:browser
```

Ordinary builds use committed content and require no sibling checkouts, app
runtime, Storybook or source services. The requested graph repair is tracked in
`patches/` and applied by pnpm to exactly starlight-site-graph 0.5.0.
A separately authorized Starlight 0.39.3 patch preserves mobile expanded-state
and search-label accessibility. Both patches remain local; no upstream work is
required.

## Reviewed source updates

In a clean Notes checkout, export the curated source-owned API:

```sh
pnpm --filter @lapis-notes/api docs:export --output /tmp/lapis-api-artifact
```

Then in this website:

```sh
pnpm api-docs:import /tmp/lapis-api-artifact
pnpm media:import --registry /absolute/path/to/lapis-plugins
pnpm snapshots:check
```

Use `--plugin markdown` or `--plugin bases` on a registry media import to refresh only that plugin's
reviewed banner and overview, preserving other reviewed snapshot revisions.

API exports contain raw Markdown and a versioned checksum manifest; this website
owns frontmatter and `class-docs` routing. Raw API snapshots, imported assets and
provenance remain committed. Do not manually edit generated reference pages.

Before importing a different API revision, verify an immutable commit is public
on GitHub and retrieve its source tree. Run
`pnpm api-docs:review-source <snapshot repository> <verified public source tree> <public commit SHA>`
after staging the new raw artifact at `snapshots/api`, review
`snapshots/api-source-links.json`, then run the import. The review records both
source hashes and maps only unique unchanged line contexts. Changed or ambiguous
locations link to the public file without a line anchor. Raw snapshot provenance
remains intact; ordinary builds use the committed review without network access.

For Desktop or Notebook, build a fresh source-owned Storybook, then capture its
explicit media inventory through the public Visual Delta API:

```sh
pnpm media:capture --source /absolute/path/to/source --catalog catalog/website-media.json --storybook /absolute/path/to/storybook-static --output /tmp/lapis-media-artifact
pnpm media:import --artifact /tmp/lapis-media-artifact
```

Notebook's inventory is `stories/catalog/website-media.json`. Both themes use a
1200x800 CSS viewport and 2x density. These captures are product illustrations,
not native qualification or visual-baseline approval. Review the source story,
source revision, checksums and site presentation with each import.

## Plugin inventory review

`snapshots/plugins.json` records all 26 reviewed plugin IDs, catalog versions,
source versions/revisions, availability and guide routes. Raw reviewed catalog
and package metadata live under `snapshots/plugin-sources/` with checksums.
`pnpm plugins:check` runs offline and requires every source/catalog entry to
have a dedicated guide or status page, an overview link and sidebar navigation.

When reviewing newer source or catalog metadata, update the snapshot, add any
missing guide/navigation entries, and update the authored audit hashes and
follow-up evidence. Keep previews and parked packages distinct from installable
catalog entries. Catalog and source versions can differ. Do not add installation
links for packages whose public availability has not been confirmed.

## Delivery

See [the cutover runbook](docs/deployment.md). GitHub Actions checks are separate
from the manually dispatched deployment workflow. Neither commits nor pushes
publish the website automatically. The source is [lapismd/lapis-website](https://github.com/lapismd/lapis-website).
Production uses the existing Cloudflare Pages project and domain; the cutover
receipt records the retained rollback deployment.

## Licensing and provenance

Website content retains CC BY 4.0 from the legacy site. Adapted documentation
keeps its public attribution page. Source-owned screenshots retain their source
package license; copied logos and third-party material retain applicable notices.
See `NOTICE.md`, the public license page, and snapshot manifests.
