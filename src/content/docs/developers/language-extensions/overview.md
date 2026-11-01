---
title: Language & editor extensions overview
description: How Lapis extends editing with CodeMirror, language services, and VS Code-inspired manifest contributions.
---

If you have built [VS Code language extensions](https://code.visualstudio.com/api/language-extensions/overview) before, Lapis splits the same problems into **declarative editing** (CodeMirror and Lezer) and **programmatic analysis** (`LanguageServiceProvider`). Lapis does not run VS Code extensions or TextMate grammars, but the mental model is similar.

## Two categories of language features

VS Code groups language support into declarative and programmatic features. Lapis follows the same split:

### Declarative editing features

These are defined in configuration or registered once at plugin load. They do not need to analyze the whole project on every keystroke.

Examples in Lapis:

- Syntax highlighting through Lezer parsers and CodeMirror language packages
- Bracket matching, auto-closing, and indentation from shared editor defaults
- File extension to view-type routing through `registerExtensions()` and editor-view metadata
- Folding, comment toggling, and line-level editing behavior from CodeMirror extensions

See [Syntax and highlighting](/developers/language-extensions/syntax-and-highlighting/) and [Editor views and associations](/developers/language-extensions/editor-views-and-associations/).

### Programmatic language features

These analyze document content to provide dynamic assistance.

Examples in Lapis:

- Diagnostics (markdownlint, TypeScript)
- Code completions (TypeScript; ad-hoc autocomplete for markdown links and search queries)
- Hover information (TypeScript)
- Code actions (markdownlint quick fixes)

These run through **`LanguageServiceProvider`** registrations and render in the editor through shared CodeMirror adapters. See [Language services](/developers/language-extensions/language-services/).

## What Lapis uses instead of VS Code defaults

| VS Code approach                                        | Lapis approach                                                              |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| TextMate grammars (`.tmLanguage`)                       | Lezer grammars via `@codemirror/lang-*` or custom parsers                   |
| Language configuration JSON                             | CodeMirror `languageData` and shared editor extensions                      |
| Language Server Protocol (JSON-RPC)                     | Custom `LanguageServiceProvider` contract (LSP-shaped, not wire-compatible) |
| VS Code extension manifest (`package.json` contributes) | Obsidian `manifest.json` plus optional `lapis.contributes` namespace        |
| VS Code extension host                                  | Obsidian-compatible plugin host with Lapis contribution indexing            |

## What is not supported today

Be explicit about these boundaries when planning a plugin:

- **No TextMate or `.tmLanguage` grammars.** Use CodeMirror language packages or a custom Lezer grammar.
- **No VS Code extension host or `.vsix` install path.** Plugins use the Obsidian-compatible folder layout.
- **No LSP wire protocol.** The `"lsp"` runtime value is reserved for future work; providers today run in-process, in a Web Worker, or in a host-admitted native service.
- **Go-to-definition has no editor UI yet.** TypeScript providers can return definitions, but the editor does not bind a go-to-definition gesture to them yet.
- **Full VS Code extension parity is out of scope.** Lapis borrows manifest and association patterns, not the entire VS Code API surface.

## Where to start

1. Read [VS Code to Lapis mapping](/developers/language-extensions/vscode-to-lapis/) if you are coming from VS Code extension development.
2. Review the [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/) reference for declarative commands, settings, services, and editor views.
3. Choose the right layer for your feature:
   - **Syntax or editing behavior** → [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/)
   - **Linting, completions, or hover** → [Language services](/developers/language-extensions/language-services/)
   - **Custom file type or editor** → [Editor views and associations](/developers/language-extensions/editor-views-and-associations/)

## Related topics

- [Editor API](/developers/api/editor/) — read and modify the active document through the editor abstraction
- [Manifest](/developers/getting-started/manifest/) — baseline Obsidian manifest fields
- [Editor associations (user help)](/help/user-interface/editor-associations/) — how users override which view opens a file

Native provider declarations describe an API capability, not a promise that the Tauri preview supplies an Electron-compatible service. Check the host and provider version before enabling it.
