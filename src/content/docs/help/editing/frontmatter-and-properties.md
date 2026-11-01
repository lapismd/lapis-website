---
title: Frontmatter and properties
description: Store structured note metadata without leaving Markdown files.
---

Lapis treats YAML frontmatter as the durable source for note properties and also
provides property editors for the active file and the wider vault.

```yaml
---
status: active
tags:
  - writing
  - roadmap
aliases:
  - Markdown Demo
  - Feature Tour
due: 2026-06-12
related:
  - "[[Project Notes]]"
published: true
priority: 2
---
```

## Supported value types

Frontmatter values map to JSON-compatible YAML types:

- **Text**: strings and string lists
- **Boolean**: `true` / `false`
- **Number**: integers and decimals
- **Date**: ISO-style date strings such as `2026-06-12`
- **Lists**: arrays of strings or mixed JSON-compatible values

Wiki links and other strings can appear in list values. Keep property names
consistent across similar notes so Bases and search filters stay predictable.

## Aliases

The `aliases` property lists alternate titles for a note. Aliases help link
autocomplete and search surface the note when you type a different name than the
file title.

## What properties are for

Use properties for data you want to sort, filter, or reuse across views.

- Status, stage, or owner fields
- Dates and deadlines
- Tags and related-note references
- Checkbox, number, and text values
- Inputs for Bases and task-oriented views

## Editing properties in Lapis

Lapis can edit properties in two ways:

- Directly in YAML frontmatter inside the note
- Through the file-properties editor for the active note

Property edits stay tied to the note file. Adding the first property creates a
YAML block, and removing the last property removes the block cleanly.

## Tips for stable metadata

- Keep property names consistent across similar notes.
- Prefer a small shared vocabulary over near-duplicate fields.
- Use dates and booleans when you expect filtering or grouping later.
- Store long prose in the body of the note, not in frontmatter.

## Where properties show up

Properties feed multiple Lapis surfaces:

- [Bases](/help/plugins/bases/) views
- Search filters and snippets
- Graph relationships through tags and links
- Task and workflow pages that rely on note metadata

## Related pages

- [Markdown basics](/help/editing/markdown-basics/)
- [Tables and checklists](/help/editing/tables-and-checklists/)
- [Notes and files: frontmatter properties](/help/notes-and-files/frontmatter-properties/)
- [Bases](/help/plugins/bases/)
