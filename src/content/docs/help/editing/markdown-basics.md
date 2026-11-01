---
title: Markdown basics
description: The core formatting features supported by notes in Lapis.
---

Lapis keeps notes in ordinary Markdown files, then adds vault-aware editing and
rendering on top.

<figure class="product-media"><img src="/media/markdown-overview.light.webp" data-product-theme="light" alt="The Markdown Feature Tour note open in the Lapis workspace." loading="lazy" width="2400" height="1600" /><img src="/media/markdown-overview.dark.webp" data-product-theme="dark" alt="The Markdown Feature Tour note open in the Lapis workspace." loading="lazy" width="2400" height="1600" /></figure>

Use this page as the hub for the Editing reference. The pages below describe
what Lapis supports today.

The public docs site does not run the in-app vault renderer, so examples like
`[[wikilinks]]` and callouts are shown as syntax here and as screenshots where
the rendered result matters.

## Editor modes

Markdown notes open in three modes:

- **Source**: edit raw Markdown with syntax highlighting and editor extensions.
- **Live preview**: edit with formatting hidden and inline widgets for links,
  embeds, and tables.
- **Reading**: read-only rendered view with interactive checkboxes and links.

Switch modes from the note toolbar or command palette.

## Feature overview

| Category            | Examples                                         | Reference                                                               |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| Standard formatting | Headings, bold, lists, quotes, footnotes         | [Basic formatting](/help/editing/basic-formatting/)                     |
| Lapis extensions    | Grid tables, directives, extended tasks, folding | [Advanced formatting](/help/editing/advanced-formatting/)               |
| Vault linking       | Wiki links, embeds, tags, path links             | [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)         |
| Metadata            | YAML properties, aliases, typed fields           | [Frontmatter and properties](/help/editing/frontmatter-and-properties/) |
| Structured content  | Pipe/grid tables, checklists                     | [Tables and checklists](/help/editing/tables-and-checklists/)           |
| Emphasis blocks     | Block and list callouts                          | [Callouts](/help/editing/callouts/)                                     |
| Code and diagrams   | Fences, LaTeX, Mermaid                           | [Code, math, and diagrams](/help/editing/code-blocks/)                  |
| Obsidian vaults     | Import compatibility                             | [Obsidian compatibility](/help/editing/obsidian-compatibility/)         |

## Quick example

```markdown
---
status: active
tags:
  - writing
---

# Heading

**Bold** and _italic_ text

- Bullet item
- Another item

1. Ordered item
2. Another item

[[Internal link]]
[External link](https://example.com)

- [ ] Open task
- [x] Completed task

> [!tip] Keep links stable
> Prefer wiki links for vault notes.
```

## Conventions

Use Markdown for the note body and frontmatter for structured metadata. Prefer
links and embeds over copying the same context across many files. Use code
blocks when exact whitespace or syntax matters.

## Next steps

- [Basic formatting](/help/editing/basic-formatting/)
- [Advanced formatting](/help/editing/advanced-formatting/)
- [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)
- [Frontmatter and properties](/help/editing/frontmatter-and-properties/)
- [Tables and checklists](/help/editing/tables-and-checklists/)
- [Callouts](/help/editing/callouts/)
- [Code, math, and diagrams](/help/editing/code-blocks/)
- [Obsidian compatibility](/help/editing/obsidian-compatibility/)
