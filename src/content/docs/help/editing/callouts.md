---
title: Callouts
description: Emphasize information with block callouts and list callouts.
---

Lapis supports both block callouts and inline list callouts so important items
stand out without leaving Markdown.

The public docs site does not run the app renderer for these custom surfaces,
so this page shows the syntax and explains how they appear in notes.

## Block callouts

Callouts are blockquotes with a type marker:

```markdown
> [!note]
> This is a note callout.

> [!warning] Review before publishing
> This callout title appears on the same line as the type.

> [!tip]+ Expanded by default
> Append `+` to start expanded, or `-` to start collapsed.

> [!info]- Collapsed by default
> Readers can toggle the body open or closed.
```

Use callouts for content that should break the reading rhythm on purpose:

- Warnings and irreversible actions
- Tips and reminders
- Important context inside long reference notes

Callouts can contain nested lists, code blocks, and other block content.

### Supported callout types

Lapis recognizes these block callout types. Aliases share icons.

| Type                              | Also known as |
| --------------------------------- | ------------- |
| `note`                            |               |
| `abstract`, `summary`, `tldr`     |               |
| `info`                            |               |
| `todo`                            |               |
| `tip`, `hint`, `important`        |               |
| `success`, `check`, `done`        |               |
| `question`, `help`, `faq`         |               |
| `warning`, `attention`, `caution` |               |
| `failure`, `missing`, `fail`      |               |
| `danger`, `error`, `bug`          |               |
| `example`                         |               |
| `quote`, `cite`                   |               |

Unknown type names still render with a default icon.

### Directive callouts

You can also write callouts with directive syntax:

```markdown
:note[Short inline callout]

:::warning
Multi-line container callout.
:::
```

See [Advanced formatting](/help/editing/advanced-formatting/) for directive
details.

## List callouts

List callouts are inline markers inside list items:

```markdown
- & Highlighted follow-up item
- ? Open question to revisit later
- ! High-risk issue
- @ Reading note or reference item
- $ Success or win
- % Muted or low-priority item
- ~ Alternate emphasis
```

Default list-callout markers cover highlighted, warning, question, reference,
success, muted, and other emphasis states. They render in source, live preview,
and reading mode.

## When to use them

- Use block callouts for a full paragraph or multi-line note.
- Use list callouts when the emphasis belongs to one bullet in a larger list.
- Keep them selective so the page still has a clear visual hierarchy.

## Related pages

- [Basic formatting](/help/editing/basic-formatting/)
- [Advanced formatting](/help/editing/advanced-formatting/)
- [Tables and checklists](/help/editing/tables-and-checklists/)
- [Markdown basics](/help/editing/markdown-basics/)
- [Obsidian compatibility](/help/editing/obsidian-compatibility/)
