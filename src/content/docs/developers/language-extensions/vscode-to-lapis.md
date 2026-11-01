---
title: VS Code to Lapis mapping
description: Concept mapping for developers coming from VS Code language extensions.
---

This page maps [VS Code language extension concepts](https://code.visualstudio.com/api/language-extensions/overview) to the Lapis codebase. Use it when you know what you want to build in VS Code and need the Lapis equivalent.

## Concept mapping

| VS Code concept             | Lapis equivalent                                        | How you implement it                                                                      |
| --------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| TextMate grammar            | Lezer parser + CodeMirror `Language`                    | `registerEditorExtension(markupEditor(langPackage()), viewType)`                          |
| Language configuration      | CodeMirror `languageData` + shared editor config        | Per-language close-bracket rules, indent behavior, or shared defaults in the editor shell |
| Snippets                    | Not a first-class manifest contribution                 | Register CodeMirror autocomplete or use command-based insertion                           |
| `contributes.languages`     | `lapis.contributes.languages`                           | Declares language IDs for activation indexing; code still registers parsers               |
| Language Server (LSP)       | `LanguageServiceProvider`                               | Manifest `contributes.services` or `Plugin.registerLapisServiceProvider()`                |
| Diagnostics                 | `provideDiagnostics` on a language-service provider     | Rendered through shared CodeMirror lint adapters                                          |
| Completion                  | `provideCompletions` or CodeMirror autocomplete         | TypeScript uses language services; markdown links use editor extensions                   |
| Hover                       | `provideHover`                                          | TypeScript only today; wired through `languageServiceExtensions()`                        |
| Go to definition            | `provideDefinition`                                     | Provider API exists; editor UI binding is not shipped yet                                 |
| Custom editor               | `registerEditorView()` + `registerView()`               | Metadata in manifest optional; constructor registration required                          |
| File association            | `registerExtensions()` + `workspace.editorAssociations` | Glob patterns in user settings or `filenamePatterns` on editor views                      |
| Extension manifest          | `manifest.json` + `lapis` namespace                     | See [Lapis manifest](/developers/language-extensions/lapis-manifest/)                     |
| `contributes.configuration` | `lapis.contributes.configuration`                       | JSON Schema properties rendered in Settings                                               |
| `contributes.commands`      | `lapis.contributes.commands`                            | Manifest-only commands with optional `when` clauses                                       |
| Activation events           | `lapis.activationEvents`                                | Lazy activation for Lapis extensions                                                      |
| Context keys / `when`       | `App.contextKeys` + manifest `when`                     | Shared evaluator for command and contribution visibility                                  |

## What Lapis borrowed vs built differently

### Borrowed patterns

- **Contribution manifest.** Optional `lapis.contributes` in `manifest.json` indexes commands, configuration, languages, editor views, and services before plugin code runs.
- **Activation events.** `onCommand:`, `onLanguage:`, `onService:`, and similar events defer code execution until needed.
- **Context keys and `when` clauses.** Declarative contributions can gate visibility on editor and workspace state.
- **Editor associations.** Users can map glob patterns to editor-view IDs, similar to VS Code's `workbench.editorAssociations`.
- **Command label icons.** Command names can include VS Code-style `$(play)` or `$(lucide:file-text)` icon tokens.

### Built differently

- **Editor engine.** Lapis uses CodeMirror 6, not Monaco or VS Code's editor stack.
- **Syntax.** Lezer grammars replace TextMate. The markdown plugin extends CodeMirror's Markdown parser with wiki links, tags, grid tables, and directives.
- **Language intelligence.** Providers implement a Lapis-specific contract consumed by `app.languageServices`, not JSON-RPC LSP messages.
- **Plugin host.** Community plugins follow the Obsidian-compatible JavaScript plugin model. The `lapis` namespace extends that model rather than replacing it.

## Manifest vs imperative registration

Many features need **both** layers:

| Feature                   | Manifest (declarative)                               | Code (imperative)                                                                    |
| ------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Markdown lint diagnostics | `contributes.services` + `contributes.configuration` | System extension binds the provider at boot                                          |
| TypeScript completions    | Optional service metadata                            | `LangCode` plugin registers CodeMirror extensions with `languageServiceExtensions()` |
| Custom file editor        | `contributes.editorViews` metadata                   | `registerView()` + `registerEditorView()` + `registerExtensions()`                   |
| Sidebar command           | `contributes.commands`                               | Optional callback after lazy activation                                              |

**Rule of thumb:**

- Use the **manifest** when Lapis can install metadata, settings, or service declarations without running your plugin code.
- Use **imperative registration** when you need a view constructor, CodeMirror extension, or provider implementation.

Manifest-only plugins can contribute commands, settings, status bar items, editor-view metadata, and language-service bindings. They cannot register CodeMirror extensions or custom view classes without code.

## Runtime hosts

Language-service providers can run in different hosts:

| Runtime      | Where it runs                | Typical use                              |
| ------------ | ---------------------------- | ---------------------------------------- |
| `worker`     | Browser Web Worker           | markdownlint, TypeScript in PWA          |
| `native`     | Host-admitted native service | Only where the host supplies the service |
| `in-process` | Renderer main thread         | Lightweight or test providers            |

When multiple providers target the same language and capability, Lapis merges results by **priority** (higher number wins for diagnostics; first successful provider wins for completions and hover).

## Next steps

- [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/) — full manifest reference
- [Language services](/developers/language-extensions/language-services/) — provider contract and examples
- [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/) — editor extension registration

Native provider declarations describe an API capability, not a promise that the Tauri preview supplies an Electron-compatible service. Check the host and provider version before enabling it.
