---
title: CodeMirror extensions
description: Register editor extensions, suggests, and scoped editing behavior.
---

The [Editor API](/developers/api/editor/) exposes a document abstraction for commands and transforms. When you need syntax-aware editing, live decorations, or custom autocomplete, register **CodeMirror 6 extensions** through the plugin API.

Prefer these registration helpers over reaching into `EditorView` instances directly. They keep extensions scoped, reload-safe, and compatible with reading mode transitions.

## Register editor extensions

### Scoped to a view type

Most language and markdown extensions register against a specific view type:

```js
this.registerEditorExtension(markupEditor(javascript()), "javascript");
this.registerEditorExtension(myTableExtension, "markdown");
```

`registerEditorExtension()` on `Plugin` forwards to the app registry and **automatically unregisters on plugin unload**.

### Global extensions

Register against all editors when the behavior is view-agnostic:

```js
this.app.registerEditorExtension(myExtension);
```

Use global registration sparingly. Scoped registration avoids affecting canvas, search, or other specialized editors unintentionally.

When registrations change, the workspace re-applies extensions to open editors through `workspace.updateOptions()`.

## `markupEditor()` helper

The API provides `markupEditor()` to bundle common editor extension groups—language parser, highlighting, and optional language-service adapters:

```js
import { markupEditor } from "@lapis-notes/api/editor";
import { javascript } from "@codemirror/lang-javascript";
import { languageServiceExtensions } from "@lapis-notes/api/editor/language-service";

this.registerEditorExtension(
  markupEditor(
    javascript({ typescript: true }),
    languageServiceExtensions({ languageId: "typescript" }),
  ),
  "typescript",
);
```

Compose additional CodeMirror extensions as arguments when you need plugin-specific behavior on top of the base language stack.

## EditorSuggest

For Obsidian-style popover suggestions, subclass `EditorSuggest` and register it against a view type:

```js
import { EditorSuggest } from "@lapis-notes/api";

class MySuggest extends EditorSuggest {
  onTrigger(cursor, editor) {
    // Return trigger info or null when inactive.
  }

  getSuggestions(context) {
    // Return suggestion items.
  }
}

this.registerEditorSuggest(new MySuggest(this.app), "markdown");
```

`EditorSuggest` integrates with the shared popover suggest UI. Use it when suggestions are contextual to cursor position and should appear in a floating menu rather than inline autocomplete.

The notebook plugin registers `NotebookCellSuggest` for markdown cells this way.

## Cleanup requirements

Every imperative registration must unwind on unload:

| API                             | Cleanup                               |
| ------------------------------- | ------------------------------------- |
| `registerEditorExtension()`     | Automatic through `Plugin.register()` |
| `registerEditorSuggest()`       | Automatic through `Plugin.register()` |
| `app.registerEditorExtension()` | Manual — prefer `Plugin` helpers      |
| Event listeners and intervals   | Use `this.register(() => ...)`        |

Failing to unregister extensions causes duplicate widgets, stale diagnostics, or memory leaks after disabling a plugin.

## What belongs in a CodeMirror extension

Good fits:

- Syntax decorations and widgets (headings, task checkboxes, live-preview blocks)
- Input handlers and keymaps for structured editing (tables, lists)
- Vault-aware autocomplete that does not need a project-wide analyzer
- View-specific formatting or fold behavior

Poor fits:

- Cross-file type checking — use a [language service](/developers/language-extensions/language-services/) instead
- Long-running analysis on every keystroke — move work to a worker provider
- Direct DOM mutation outside CodeMirror's update cycle

## Reference implementations

Study these first-party plugins:

| Plugin       | What to learn                                                                            |
| ------------ | ---------------------------------------------------------------------------------------- |
| **Markdown** | Live preview decorations, wiki links, tables, completion, nested code-block highlighting |
| **LangCode** | Language packages, `markupEditor()`, `languageServiceExtensions()`                       |
| **Search**   | Custom Lezer grammar, query autocomplete, parse diagnostics                              |
| **Bases**    | SQL highlighting and keyword completion in query editors                                 |
| **Notebook** | `EditorSuggest` for cell-aware suggestions                                               |

## Editor abstraction vs CodeMirror

Use the **editor abstraction** (`editor.replaceRange`, `editor.getCursor`, command callbacks) when manipulating document text from commands.

Use **CodeMirror extensions** when participating in the editing pipeline: token classes, widgets, autocomplete sources, or lint sources bridged from language services.

Do not depend on undocumented CodeMirror internals or private workspace editor fields. If a use case needs new editor surface area, prefer a language-service provider or a documented registration API.

## Related topics

- [Editor API](/developers/api/editor/)
- [Syntax and highlighting](/developers/language-extensions/syntax-and-highlighting/)
- [Language services](/developers/language-extensions/language-services/)
- [Editor views and associations](/developers/language-extensions/editor-views-and-associations/)
