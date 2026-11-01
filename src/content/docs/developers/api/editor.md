---
title: Editor
description: Read and modify the active Markdown editor safely.
---

Editor APIs let plugins work with the active Markdown document while keeping the editor implementation abstract.

## Editor commands

Use an editor-specific command when the action needs the active editor. The command should no-op or explain the problem when the active view is not an editable Markdown note.

```js
this.addCommand({
  id: "insert-today",
  name: "Insert today's date",
  editorCallback: (editor) => {
    editor.replaceRange(
      new Date().toISOString().slice(0, 10),
      editor.getCursor(),
    );
  },
});
```

## Common operations

- Read the current cursor.
- Replace the selected text.
- Insert generated Markdown.
- Inspect the current line before transforming it.
- Convert supported Markdown task lines into plugin-owned task notes.

Prefer the editor abstraction over direct CodeMirror access. Direct CodeMirror extensions are powerful but should be isolated behind editor-extension APIs so they unload cleanly and do not break reading mode.

## Three layers of editor extension

| Layer                     | Use when                                                                       |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Editor abstraction**    | Commands that insert, replace, or read text (`editorCallback`, cursor helpers) |
| **CodeMirror extensions** | Syntax, widgets, autocomplete, and view-specific editing behavior              |
| **Language services**     | Diagnostics, typed completions, hover, and code actions backed by analysis     |

Register CodeMirror extensions with `registerEditorExtension()`. Attach language-service UI with `languageServiceExtensions()`. See the [language & editor extensions](/developers/language-extensions/overview/) guide for details.
