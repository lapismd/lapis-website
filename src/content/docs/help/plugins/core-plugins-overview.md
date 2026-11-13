---
title: First-party plugins
description: Find every reviewed first-party plugin and understand its availability.
---

First-party plugins are independently versioned. Your Desktop or web build determines which are bundled, installed and enabled. Review the installed plugin list in Settings before following a guide.

This inventory was reviewed on November 13, 2026: **26 known plugins**, including public catalog entries, host-dependent packages, source previews and parked packages. The website keeps a checked source snapshot for each entry; a source version can be newer than the published catalog version below.

## Shared default profile

The reviewed Notes profile enables [Source Editor](/help/plugins/source-editor/), [Markdown](/help/plugins/markdown/), [File Explorer](/help/plugins/file-explorer/) and [Search](/help/plugins/search/) by default. All four remain user-disableable. Host builds may add other plugins. File Explorer comes from Notes and is not a separate entry in the reviewed public catalog.

## Published catalog

These 19 plugins appeared in the [public catalog](https://registry.lapis.md/v2/index.json). A catalog entry does not prove that your host bundles it or meets its runtime requirements. Follow the host's [plugin installation workflow](/help/plugins/community-plugins/).

| Plugin                                        | Use                                    | Catalog version |
| --------------------------------------------- | -------------------------------------- | --------------- |
| [AI](/help/plugins/ai/)                       | Agent chat and tool approvals          | 0.1.8           |
| [Bases](/help/plugins/bases/)                 | Structured note-property views         | 0.3.0           |
| [Bookmarks](/help/plugins/bookmarks/)         | File, folder and search shortcuts      | 0.1.6           |
| [Canvas](/help/plugins/canvas/)               | Spatial note canvases                  | 0.2.2           |
| [CSV](/help/plugins/csv/)                     | Editable CSV and TSV views             | 0.2.2           |
| [DOCX](/help/plugins/docx/)                   | Word document viewing and embeds       | 0.2.1           |
| [Graph](/help/plugins/graph-view/)            | Note-link graph                        | 0.1.6           |
| [History](/help/plugins/history/)             | Bounded local revisions and restore    | 0.2.4           |
| [Markdown](/help/plugins/markdown/)           | Markdown editing and reading           | 0.2.3           |
| [Markdown Lint](/help/plugins/markdown-lint/) | Open-note Markdown diagnostics         | 0.1.3           |
| [Notebook](/help/plugins/notebook/)           | Executable notebooks                   | 0.2.2           |
| [PDF](/help/plugins/pdf/)                     | PDF reading and embeds                 | 0.2.1           |
| [Search](/help/plugins/search/)               | Vault search                           | 0.1.6           |
| [Slides](/help/plugins/slides/)               | Markdown presentations                 | 0.1.2           |
| [Source Editor](/help/plugins/source-editor/) | Text, JSON and YAML views              | 0.1.5           |
| [Spell Check](/help/plugins/spell-check/)     | Open-document spelling diagnostics     | 0.1.4           |
| [Tasks](/help/plugins/tasks/)                 | Vault-backed task planner and indexing | 0.1.2           |
| [Transcripts](/help/plugins/transcripts/)     | Speaker-separated transcript reader    | 0.2.2           |
| [Word Count](/help/plugins/word-count/)       | Document counts in the status bar      | 0.1.3           |

## Additional public source packages

These separately versioned plugins have public source but were absent from the reviewed catalog. Availability depends on a compatible host installation.

- [Docs](/help/plugins/docs/): vault-native documents, books, cards and spaced review.
- [Terminal](/help/plugins/terminal/): interactive shell sessions through an admitted host service. A browser cannot supply native process access on its own.

## Source previews

Public package or catalog installation was not confirmed for these previews. Use them only in a host that explicitly provides them.

- [CV Roles](/help/plugins/cv-roles/): role records, CVs and applications.
- [Nostr Sync](/help/plugins/nostr-sync/): experimental encrypted vault synchronization and its own history, disabled by default in the reviewed source.

## Parked packages

- [Community package status](/help/plugins/community-status/): private parked source, separate from the host's community-plugin browser.
- [Legacy Sync status](/help/plugins/legacy-sync/): private parked source with runtime ID `sync`, separate from Nostr Sync.

## Screenshots and support

Screenshots demonstrate their named plugin or Desktop scene. They do not imply that every preview includes those plugins. Report application integration issues to [Desktop](https://github.com/lapismd/lapis-desktop/issues), plugin behavior to the owner linked from its guide, and website errors to [this website](https://github.com/lapismd/lapis-website/issues).

Use [Safe Mode](/help/plugins/safe-mode/) when diagnosing plugin-related startup problems.
