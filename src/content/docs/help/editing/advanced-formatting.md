---
title: Advanced formatting
description: Grid tables, extended task markers, directives, raw HTML, folding, and other Lapis-specific Markdown extensions.
---

This page covers formatting beyond standard GFM that Lapis adds for richer
notes. For headings, lists, emphasis, and other basics, start with
[Basic formatting](/help/editing/basic-formatting/).

## Grid tables

When pipe tables are too limiting, use grid-table syntax with `+` border lines:

```markdown
+-------------------+-----------+
| Table Headings | Here |
+--------+----------+-----------+
| Sub | Headings | Too |
+========+==========+===========+
| cell | column spanning |
| spans +----------+-----------+
| rows | normal | cell |
+--------+----------+-----------+
```

Grid tables support multi-line cells, nested formatting, and code blocks inside
cells. The markdown editor provides the same row and column editing tools as
pipe tables.

See [Tables and checklists](/help/editing/tables-and-checklists/) for pipe-table
syntax and MultiMarkdown colspan/rowspan options.

## Extended task markers

Beyond `- [ ]` and `- [x]`, Lapis accepts any single character inside task
brackets:

```markdown
- [x] Completed
- [ ] Open
- [?] Needs clarification
- [-] Cancelled
```

These render as interactive checkboxes in reading mode with the character shown
inside the box.

## Directive callouts

In addition to blockquote callouts (`> [!note]`), Lapis supports
[remark-directive](https://github.com/remarkjs/remark-directive) syntax for
inline and container alerts:

```markdown
:note[Short inline callout text]

:::tip
Container callout with multiple paragraphs.
:::
```

Common directive names match block callout types: `note`, `tip`, `warning`,
`info`, `question`, `success`, `danger`, and others. See
[Callouts](/help/editing/callouts/) for the full type list.

## Raw HTML

Lapis passes raw HTML through the preview pipeline when notes contain inline or
block HTML tags. This is useful for `<br>` line breaks, `<kbd>` keyboard hints,
or `<span>` styling.

Keep HTML minimal. Complex layouts may not match editor styling, and HTML will
not port cleanly to tools that strip tags.

## Section folding

The markdown editor supports folding headings, list sections, and code blocks in
source and live preview. Click the fold gutter indicator next to a foldable
region to collapse it while editing.

Folding is an editor convenience. It does not change the saved file content.

## Image sizing in embeds

When embedding a vault image, add width or width-by-height after the pipe:

```markdown
![[assets/diagram.png|400]]
![[assets/diagram.png|400x300]]
```

If only width is given, height scales to preserve aspect ratio.

## Related pages

- [Basic formatting](/help/editing/basic-formatting/)
- [Tables and checklists](/help/editing/tables-and-checklists/)
- [Callouts](/help/editing/callouts/)
- [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)
- [Obsidian compatibility](/help/editing/obsidian-compatibility/)
