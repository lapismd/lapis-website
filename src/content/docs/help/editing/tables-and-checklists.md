---
title: Tables and checklists
description: Use tables, task lists, and structured list items inside notes.
---

Lapis supports everyday Markdown tables and checklist syntax, and the markdown
editor also understands grid-table layouts when a note needs more structure.

## Pipe tables

Standard GFM pipe tables render directly in notes:

```markdown
| Feature     | Status    |
| ----------- | --------- |
| Wiki links  | Supported |
| Task lists  | Supported |
| Grid tables | Supported |
```

Column alignment uses colons in the separator row:

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |
```

The editor supports adding, deleting, and reordering rows and columns, including
drag-and-drop reorder handles.

## MultiMarkdown colspan and rowspan

Pipe tables also accept MultiMarkdown spanning syntax:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   |          |
| ^        | Cell 3   | Cell 4   |
```

- An **empty cell** continues a colspan from the cell to its left.
- A **`^`** in a cell below continues a rowspan from the cell above.

## Grid tables

For multi-line cells and richer layouts, use grid-table syntax with `+` borders.
See [Advanced formatting](/help/editing/advanced-formatting/) for a full
example.

Use a regular table first. Reach for grid tables when the note needs more
layout control or cells that span multiple lines.

## Checklists

Task list syntax stays close to standard Markdown:

```markdown
- [ ] Draft project brief
- [x] Review meeting notes
- [ ] Archive old drafts
```

Lapis renders checklist items in notes and can also promote task-oriented data
into dedicated task workflows and structured views.

### Extended task markers

Any single character can appear inside the brackets:

```markdown
- [x] Done
- [?] Needs review
- [-] Won't do
- [!] Blocked
```

These show the character inside the checkbox in reading mode.

## When notes grow beyond one list

Use checklists for lightweight work tracking inside a note. When the work needs
sorting, grouping, or dates across many notes, move up to:

- [Tasks](/help/plugins/tasks/) for task-focused workflows
- [Bases](/help/plugins/bases/) for table and card views over metadata

## Related pages

- [Basic formatting](/help/editing/basic-formatting/)
- [Advanced formatting](/help/editing/advanced-formatting/)
- [Callouts](/help/editing/callouts/)
- [Frontmatter and properties](/help/editing/frontmatter-and-properties/)
- [Tasks](/help/plugins/tasks/)
