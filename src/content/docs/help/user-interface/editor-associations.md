---
title: Editor associations
description: Choose which view opens files by pattern or extension.
---

Lapis resolves file views with a VS Code-inspired association model.

## Resolution order

When a file opens, Lapis checks:

1. User or workspace editor associations.
2. Registered editor-view filename patterns.
3. Registered extension fallbacks.

The longest matching suffix wins when no explicit association applies.

## Examples

- `.md` opens in the Markdown view.
- `.notebook.md` opens in the Notebook view.
- `.canvas` opens in Canvas.
- `.base` and `.bases` open in Bases.
- `.pdf` opens in the PDF view when the PDF plugin is enabled.

Use editor associations when a plugin contributes a new file flavor or when you want a custom view to own a subset of files.

## For plugin authors

To register a custom editor and filename patterns from a plugin, see [Editor views and associations](/developers/language-extensions/editor-views-and-associations/) in the developer docs.
