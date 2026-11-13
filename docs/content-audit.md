# Authored documentation audit

Reviewed all 51 help and 28 developer guides on November 1, 2026. The exact
file hashes, owning source revisions and review dispositions are recorded in
`snapshots/content-audit.json`. Generated API pages have their own source manifest.

On November 13, the download and Desktop guides were reviewed again against the
published `desktop-v2026.31.6-rc.1` release. Public archive URLs, sizes, digests and
the release's platform limitations are recorded in `snapshots/desktop-release.json`.
The original authored-page review date remains November 1.

On November 13, a second review added 18 missing plugin guides/status pages and
updated Bases, Tasks and the overview. All 26 known IDs now map to a dedicated
page, overview link and sidebar entry. `snapshots/plugins.json` pins the 19-entry
public catalog plus metadata from shared, standalone and Notes-owned sources;
raw reviewed metadata is checksummed under `snapshots/plugin-sources/`. Catalog
signatures were not independently verified during this documentation review.
`pnpm plugins:check` rejects missing guides, source/catalog omissions, navigation
gaps and metadata drift without requiring network access or sibling checkouts.
The site now has 97 authored guides. Original review dates and source revisions
remain attached to unchanged pages.

Desktop remains a Tauri preview. Public installers require published assets;
web storage/offline availability is deployment-dependent. Optional plugin
features are not promised in every Desktop build. Notebook documentation now
uses its current runtime ID, input controls, stable generated-state identity,
explicit execution and WASM path. API examples use owned registration and the
current notification payload. Source repositories retain product authority.

The source comments, API exports and website route/anchor/image crawl were
checked together. Representative theme/mobile/search/graph/accessibility browser
checks cover presentation. Accepted source-story accessibility limits remain
listed in the verification receipt. Native signing, distribution and platform
qualification are separate. The live sitemap endpoint returned HTTP 403; the
199-route preservation inventory comes from the actual legacy static build.

| Page                                                             | Source owners           | Review                                                                                               |
| ---------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| `/developers/api/app-model/`                                     | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/commands/`                                      | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/configuration-option-sources/`                  | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/editor/`                                        | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/events/`                                        | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/metadata-cache/`                                | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/notices-and-progress/`                          | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/settings/`                                      | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/vault/`                                         | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/api/workspace-views/`                               | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/getting-started/development-workflow/`              | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/getting-started/first-plugin/`                      | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/getting-started/manifest/`                          | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/getting-started/plugin-lifecycle/`                  | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/`                                                   | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/introduction/runtime-overview/`                     | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/introduction/what-is-a-lapis-plugin/`               | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/codemirror-extensions/`         | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/editor-views-and-associations/` | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/language-services/`             | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/lapis-manifest/`                | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/overview/`                      | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/syntax-and-highlighting/`       | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/language-extensions/vscode-to-lapis/`               | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/publishing/install-community-plugins/`              | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/publishing/release-checklist/`                      | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/publishing/trust-safe-mode/`                        | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/developers/ui-and-css/plugin-css-contract/`                    | notes, plugins          | Check public API/manifest guidance, owned App, runtime admission and registration cleanup.           |
| `/help/desktop-and-web/desktop-app/`                             | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/desktop-and-web/offline-use/`                             | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/desktop-and-web/pwa-install/`                             | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/editing/advanced-formatting/`                             | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/basic-formatting/`                                | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/callouts/`                                        | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/code-blocks/`                                     | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/frontmatter-and-properties/`                      | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/links-embeds-and-tags/`                           | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/markdown-basics/`                                 | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/obsidian-compatibility/`                          | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/editing/tables-and-checklists/`                           | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/getting-started/create-a-vault/`                          | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/getting-started/download-and-install/`                    | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/getting-started/first-note/`                              | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/getting-started/link-notes/`                              | desktop, notes          | Use Tauri preview and local folder workflows; qualify browser storage, platform and download claims. |
| `/help/help-and-support/attributions/`                           | notes, desktop, plugins | Route source/issues to GitHub owners, preserve attribution and qualify compatibility.                |
| `/help/help-and-support/community-links/`                        | notes, desktop, plugins | Route source/issues to GitHub owners, preserve attribution and qualify compatibility.                |
| `/help/help-and-support/faq/`                                    | notes, desktop, plugins | Route source/issues to GitHub owners, preserve attribution and qualify compatibility.                |
| `/help/help-and-support/report-a-bug/`                           | notes, desktop, plugins | Route source/issues to GitHub owners, preserve attribution and qualify compatibility.                |
| `/help/import/import-from-obsidian/`                             | notes, plugins, mira    | Retain portable syntax; distinguish app rendering from static examples and plugin support.           |
| `/help/`                                                         | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/notes-and-files/attachments/`                             | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/notes-and-files/frontmatter-properties/`                  | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/notes-and-files/rename-move/`                             | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/plugins/bases/`                                           | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/canvas/`                                          | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/community-plugins/`                               | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/core-plugins-overview/`                           | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/graph-view/`                                      | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/notebook/cells-and-syntax/`                       | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/execution-and-stale-cells/`              | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/getting-started/`                        | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/inputs-and-outputs/`                     | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/limitations/`                            | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/panels-and-packages/`                    | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/sql-and-duckdb/`                         | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/notebook/`                                        | notebook, notes         | Update runtime ID, controls, explicit execution, persistence, WASM and current themed captures.      |
| `/help/plugins/pdf/`                                             | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/safe-mode/`                                       | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/search/`                                          | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/slides/`                                          | notes, plugins, desktop | Distinguish installed host profile from optional plugins; use source-owned captures.                 |
| `/help/plugins/tasks/`                                           | desktop, tasks          | Replace legacy view promises with current Desktop indexing/query status and owning-source link.      |
| `/help/user-interface/command-palette/`                          | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/editor-associations/`                      | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/keyboard-shortcuts/`                       | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/progress-and-notifications/`               | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/settings/`                                 | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/sidebar/`                                  | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/tabs/`                                     | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |
| `/help/user-interface/workspace-layout/`                         | notes                   | Retain practical guidance; align public names and host/plugin boundaries.                            |

## November 13 plugin follow-up

| Page                                   | Review                                                                                                                            |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `/help/plugins/ai/`                    | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/bases/`                 | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/bookmarks/`             | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/community-status/`      | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/core-plugins-overview/` | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/csv/`                   | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/cv-roles/`              | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/docs/`                  | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/docx/`                  | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/file-explorer/`         | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/history/`               | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/legacy-sync/`           | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/markdown-lint/`         | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/markdown/`              | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/nostr-sync/`            | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/source-editor/`         | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/spell-check/`           | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/tasks/`                 | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/terminal/`              | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/transcripts/`           | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
| `/help/plugins/word-count/`            | Reviewed plugin behavior, host availability, source/catalog distinction and source-owned media against the November 13 inventory. |
