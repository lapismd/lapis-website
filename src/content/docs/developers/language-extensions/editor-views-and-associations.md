---
title: Editor views and associations
description: Register custom file-backed editors and control which view opens a file.
---

Lapis resolves file-backed views with a [VS Code-inspired association model](/help/user-interface/editor-associations/). As a plugin author, you register editor metadata and view constructors so the workspace can route files to your editor.

## Three registration APIs

| API                                                        | Purpose                                              |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| `registerView(viewType, factory)`                          | Register the view class constructor                  |
| `registerEditorView({ id, label, filenamePatterns, ... })` | Register selectable editor metadata                  |
| `registerExtensions(extensions, viewType)`                 | Map file extensions to a view type (legacy fallback) |

All three are typically needed for a new file-backed editor.

## Example: code file support

The `LangCode` source example registers JavaScript support like this:

```js
this.registerView(
  "javascript",
  (leaf) => new TextView(leaf, "javascript", ["js"]),
);
this.registerEditorView({
  id: "javascript",
  label: "JavaScript",
  filenamePatterns: ["*.js"],
  priority: "default",
});
this.registerExtensions(["js"], "javascript");
this.registerEditorExtension(markupEditor(javascript()), "javascript");
```

Repeat the pattern for each language or file flavor your plugin owns.

## Resolution order

When a file opens, Lapis checks in order:

1. **User or workspace editor associations** — `workspace.editorAssociations` glob → editor-view ID map
2. **Registered editor-view filename patterns** — from `registerEditorView()` or manifest `contributes.editorViews`
3. **Registered extension fallbacks** — from `registerExtensions()`; longest matching suffix wins

Examples users see today:

- `.md` → Markdown view
- `.notebook.md` → Notebook view (longer suffix beats `.md`)
- `.canvas` → Canvas view
- `.base` / `.bases` → Bases view

## Editor associations for users

Users configure associations in Settings under **Workspace → Editor associations**. Keys are glob patterns; values are editor-view IDs from the registry.

Associations persist even when a plugin is disabled. Unknown saved values stay visible as missing rather than being reset, so reinstalling a plugin restores the previous mapping.

## Manifest metadata vs code registration

You can declare editor-view metadata in `lapis.contributes.editorViews` so Settings lists your editor before code runs:

```json
{
  "id": "example.editor",
  "label": "Example editor",
  "filenamePatterns": ["*.example"],
  "priority": "default"
}
```

Manifest metadata alone does **not** open files in your editor. You must still:

1. Register the view constructor with `registerView()`
2. Map extensions with `registerExtensions()` when needed
3. Register CodeMirror or custom UI extensions for text-backed views

## View types and file views

File-backed editors extend the view hierarchy:

```text
View
└── ItemView
    └── FileView
        └── TextFileView (CodeMirror)
            └── MarkdownView (preview modes)
```

Graphical editors such as Canvas use `FileView` directly without CodeMirror. Choose the base class that matches your file format.

## Priority

Editor-view metadata accepts `priority`:

- `default` — normal selectable editor
- `option` — appears as an alternate editor users can pick
- `exclusive` — intended to own the file type when registered

Use `option` when multiple editors can open the same extension (for example Markdown source vs notebook).

## Notebook extension points

The separately installed Notebook plugin registers `.notebook.md` as a first-class editor view with its own runtime, side panels, and generated output state. Plugin authors usually do not reimplement notebook execution; instead:

- register editor associations or alternate views only when your plugin owns a distinct file type
- use the documented `lapis.*` notebook surface from user-facing docs when explaining cell behavior to vault authors

For end-user notebook workflows, see the [Notebook help section](/help/plugins/notebook/).

## Plugin author checklist

When adding a new file-backed editor:

1. Pick a stable `viewType` string and editor-view `id`
2. Implement and register the view constructor
3. Register editor-view metadata with `filenamePatterns`
4. Map extensions with `registerExtensions()`
5. Register editor extensions if the view uses CodeMirror
6. Optionally declare `contributes.editorViews` in the manifest
7. Document recommended glob patterns for users who need associations

## Related topics

- [Editor associations (user help)](/help/user-interface/editor-associations/)
- [Syntax and highlighting](/developers/language-extensions/syntax-and-highlighting/)
- [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/)
- [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/)
- [Notebook overview (user help)](/help/plugins/notebook/)
