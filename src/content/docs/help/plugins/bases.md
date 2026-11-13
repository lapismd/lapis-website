---
title: Bases
description: Build structured views over Markdown files.
---

Bases turns notes and frontmatter into structured views without moving data out
of the vault.

This is an optional plugin surface. Confirm it is installed and compatible with your host; see the [owning source](https://github.com/lapismd/lapis-plugins/tree/main/packages/bases).

<figure class="product-media"><img src="/media/bases-banner.light.webp" data-product-theme="light" alt="Bases cover cards with project artwork and note properties in Lapis Notes." loading="lazy" width="2400" height="1600" /><img src="/media/bases-banner.dark.webp" data-product-theme="dark" alt="Bases cover cards with project artwork and note properties in Lapis Notes." loading="lazy" width="2400" height="1600" /></figure>

## What Bases does

Bases reads file fields, frontmatter properties, and formulas from a base
document, then renders those records as tables, cards, grouped lists, Kanban
boards or Activity views. Map configuration remains inspectable with an explicit
unavailable state; a working map layout is not provided by this reviewed version.

## Create a base

Create a `.base` or `.bases` file, then configure filters, properties, formulas, and views. Choose a view from the toolbar and use Search, Filter, Sort and Properties to refine the matching notes. Table, Cards and List suit inventories; Kanban groups records into columns, while Activity groups them by a date property.

## Group and review records

Kanban uses a grouping property to organize cards. Activity uses a configured date property, or the first typed date field in the result properties, with newest days first and missing or invalid dates under Undated. Available controls depend on your installed version; these captures come from source version 0.3.1.

<figure class="product-media"><img src="/media/bases-overview.light.webp" data-product-theme="light" alt="A Bases grouped list of projects with grouping and sorting controls open." loading="lazy" width="2400" height="1600" /><img src="/media/bases-overview.dark.webp" data-product-theme="dark" alt="A Bases grouped list of projects with grouping and sorting controls open." loading="lazy" width="2400" height="1600" /></figure>

Editable note properties write back to frontmatter. File-derived fields and formulas remain read-only. Embedded Bases surfaces in Markdown are read-only even when the standalone file view supports editing.

## Use bases for

- Project lists
- Reading queues
- Content inventories
- Task dashboards
- Notes grouped by status, owner, folder, tag, or property

## Data sources

Bases reads file fields such as names and paths, explicit frontmatter
properties such as `note.status`, and formulas declared in the base document.
Keep property names consistent across notes to make bases reliable.

## What runs in the database

Bases now asks the app database to narrow candidate rows before the full Bases
query runs. Today that database pushdown is limited to a small operator subset:

| Bases operator or behavior                                                            | Pushed into the app database | Notes                                                                         |
| ------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| `file.inFolder(...)`                                                                  | Yes                          | Folder-style path prefix filtering.                                           |
| `file.hasTag(...)`                                                                    | Yes                          | Uses indexed tag records.                                                     |
| `file.hasProperty(...)` and `!hasProperty(...)`                                       | Yes                          | Uses indexed frontmatter-property presence.                                   |
| `file.ext = ...`                                                                      | Yes                          | Only direct extension equality is pushed down.                                |
| Property comparisons like `note.status = "draft"` or `priority >= 2`                  | Yes                          | Limited to scalar `=`, `!=`, `>`, `>=`, `<`, and `<=`.                        |
| Sort by `file.path`, `file.ext`, `file.mtime`, `file.size`, or a direct property      | Yes                          | `limit` is only pushed down when every active sort fits the supported subset. |
| `OR` groups, custom filter strings, formulas, group-by, and view search               | No                           | These still run in Bases after rows load.                                     |
| File predicates outside the subset above, or link filters such as `file.hasLink(...)` | No                           | These still work, but they are not database-pushed today.                     |

Unsupported operators do not break Bases. They simply stay in the normal Bases
query engine after the candidate rows come back from the app database.

## Related pages

- [Frontmatter and properties](/help/editing/frontmatter-and-properties/)
- [Tasks](/help/plugins/tasks/)
