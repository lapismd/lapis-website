---
title: Syntax and highlighting
description: Register languages, parsers, and token styling with CodeMirror and Lezer.
---

VS Code language extensions often start with a [TextMate grammar](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide). Lapis uses **CodeMirror 6** with **Lezer** parsers instead. Syntax highlighting, bracket behavior, and basic editing affordances come from language packages and editor extensions.

## Register a language for a file type

The usual pattern combines extension routing with a CodeMirror language package:

```js
import { javascript } from "@codemirror/lang-javascript";
import { markupEditor } from "@lapis-notes/api/editor";

this.registerExtensions(["ts"], "typescript");
this.registerEditorExtension(
  markupEditor(javascript({ typescript: true })),
  "typescript",
);
```

The bundled `LangCode` plugin registers JavaScript, TypeScript, JSON, YAML, CSS, and plain text this way using packages from `@codemirror/lang-*`.

Steps:

1. Map extensions to a view type with `registerExtensions()`
2. Register a file-backed view (see [Editor views and associations](/developers/language-extensions/editor-views-and-associations/))
3. Attach the parser with `registerEditorExtension(markupEditor(languagePackage()), viewType)`

## Nested languages in Markdown

Markdown files embed other languages inside fenced code blocks. The markdown plugin composes CodeMirror's markdown parser with `@codemirror/language-data` and lazy-loaded extras such as Mermaid.

For your own markdown extension, follow the same idea:

- Extend the markdown `Language` with `codeLanguages`
- Provide a `LanguageDescription` for each nested language you support
- Use lazy loading for heavy grammars

Reading-mode and preview surfaces may use highlight.js CSS for read-only token styling. Editor surfaces use the shared **`classHighlighter`**, which emits `cm-*` classes and compatible `hljs-*` classes where vocabularies overlap.

## Custom grammars

When no off-the-shelf `@codemirror/lang-*` package exists, define a Lezer grammar and wrap it in a CodeMirror `Language`.

The search plugin uses a custom query grammar in the API package. Custom grammars can also add:

- Autocomplete tied to the grammar AST
- Parse diagnostics for invalid input
- Language-specific close-bracket configuration

## Language configuration (brackets, indent, comments)

VS Code's [language configuration](https://code.visualstudio.com/api/language-extensions/language-configuration-guide) file controls comments, brackets, and indentation rules. Lapis applies equivalent behavior through:

- **Shared editor defaults** — bracket matching, auto-closing, indent-on-input, tab vs spaces from vault settings
- **Per-language `languageData`** — for example custom `closeBrackets` on the search query language
- **CodeMirror extensions** — folding, comment toggling, and language-specific input handlers registered by plugins

There is no `language-configuration.json` contribution point. Set behavior in the CodeMirror extension bundle you register for the view type.

## Token styling

Editor tokens receive CSS classes from Lezer highlight tags through the shared highlighter. Theme CSS can target:

- `cm-*` classes from CodeMirror highlight tags
- Compatible `hljs-*` classes when a highlight.js theme is already loaded

Plugin CSS should follow the [plugin CSS contract](/developers/ui-and-css/plugin-css-contract/) and prefer stable token classes over fragile DOM structure selectors.

## Markdown-specific syntax extensions

The markdown plugin is the reference implementation for rich syntax in Lapis. It registers many CodeMirror extensions, including:

| Extension area | Examples                                          |
| -------------- | ------------------------------------------------- |
| Structure      | Tables, grid tables, headings, lists, blockquotes |
| Vault syntax   | Wiki links, tags, embed links                     |
| Directives     | Container directives, notebook cells              |
| Rich editing   | Live preview decorations and widgets              |
| Nested code    | Inner-language highlighting inside fenced blocks  |

Study the markdown plugin when you need live-preview decorations, custom Lezer nodes, or vault-aware autocomplete inside an editor.

## What not to use

- **TextMate grammars (`.tmLanguage`, `.json` grammars)** — not supported in the editing pipeline
- **Direct Monaco APIs** — the workspace editor is CodeMirror-based
- **VS Code semantic token providers** — use Lezer highlight tags and language-service diagnostics instead

## Related topics

- [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/)
- [Editor views and associations](/developers/language-extensions/editor-views-and-associations/)
- [Language services](/developers/language-extensions/language-services/) — programmatic analysis layered on top of syntax
