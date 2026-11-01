---
title: Language services
description: Diagnostics, completions, hover, and code actions through LanguageServiceProvider.
---

VS Code [programmatic language features](https://code.visualstudio.com/api/language-extensions/programmatic-language-features) often run through a Language Server. Lapis uses a custom **`LanguageServiceProvider`** contract consumed by `app.languageServices`. The API is LSP-shaped—positions, ranges, diagnostics, completions—but it does not use JSON-RPC or VS Code's language server libraries.

## Capabilities

Providers declare what they implement through `metadata.capabilities`:

| Capability    | Editor support today                                        |
| ------------- | ----------------------------------------------------------- |
| `diagnostics` | Yes — lint gutter, inline markers, Lapis-owned lint tooltip |
| `codeActions` | Yes — quick fixes from diagnostics                          |
| `completion`  | Yes — TypeScript in code file views and notebook cells      |
| `hover`       | Yes — TypeScript                                            |
| `definition`  | Provider API only — **no go-to-definition editor UI yet**   |

## Declare a provider in the manifest

Manifest-only language services are the preferred path when Lapis can bind a known provider at boot. The bundled Markdown Lint plugin demonstrates the pattern:

```json
{
  "contributes": {
    "configuration": [
      {
        "id": "markdown-lint",
        "title": "Markdown Lint",
        "properties": {
          "disabledRules": {
            "type": "array",
            "title": "Disabled rules",
            "items": { "type": "string" },
            "default": []
          }
        }
      }
    ],
    "services": [
      {
        "id": "markdown-lint",
        "service": "language-service",
        "languages": ["markdown"],
        "priority": 100,
        "capabilities": {
          "diagnostics": true,
          "codeActions": true
        }
      }
    ]
  }
}
```

System extensions connect the manifest declaration to a concrete provider implementation. Community plugins with custom analysis logic should register imperatively.

## Register a provider from plugin code

Hybrid plugins call `Plugin.registerLapisServiceProvider()` during `onload()`:

```js
this.registerLapisServiceProvider({
  id: "example-plugin:analyzer",
  service: "language-service",
  languages: ["markdown"],
  priority: 50,
  capabilities: {
    diagnostics: true,
  },
  provider: myProvider,
});
```

The plugin manager scopes the provider ID to your plugin and registers it with `app.languageServices`. Cleanup runs automatically on unload.

## Provider contract

A `LanguageServiceProvider` includes metadata and optional methods:

```typescript
interface LanguageServiceProvider {
  metadata: {
    id: string;
    languages: string[];
    runtime: "worker" | "native" | "in-process" | "lsp";
    priority?: number;
    capabilities: {
      diagnostics?: boolean;
      completion?: boolean;
      hover?: boolean;
      definition?: boolean;
      codeActions?: boolean;
    };
  };
  updateDocument?(update): void | Promise<void>;
  provideDiagnostics?(context): Promise<Diagnostic[]>;
  provideCompletions?(context, position): Promise<CompletionList | null>;
  provideHover?(context, position): Promise<Hover | null>;
  provideDefinition?(context, position): Promise<Location[]>;
  provideCodeActions?(context, range): Promise<CodeAction[]>;
  dispose?(): void | Promise<void>;
}
```

Request context includes the virtual document (`uri`, `languageId`, `text`, `version`) and optional global declarations for cross-file analysis.

## Runtime hosts

| Runtime      | Where it runs                | When to use                                  |
| ------------ | ---------------------------- | -------------------------------------------- |
| `worker`     | Browser Web Worker           | PWA-safe analysis (markdownlint, TypeScript) |
| `native`     | Host-admitted native service | Only where explicitly admitted by the host   |
| `in-process` | Renderer thread              | Lightweight providers and tests              |
| `lsp`        | Reserved                     | Not implemented; do not rely on it           |

Provider priority controls selection where multiple providers match. A native provider must be supplied and admitted by the host; the Desktop preview does not promise one for every language.

## Wire providers into the editor

File-backed editors attach language-service UI through `languageServiceExtensions()` from `@lapis-notes/api/editor/language-service`:

```js
import { languageServiceExtensions } from "@lapis-notes/api/editor/language-service";

this.registerEditorExtension(
  markupEditor(
    javascript({ typescript: true }),
    languageServiceExtensions({ languageId: "typescript" }),
  ),
  "typescript",
);
```

Options let you enable subsets of features per view:

```js
languageServiceExtensions({
  languageId: "markdown",
  completion: false,
  hover: false,
});
```

The markdown plugin enables diagnostics only. TypeScript views enable diagnostics, completions, and hover.

### What the editor renders

Shared adapters in the API package connect `app.languageServices` to CodeMirror:

- **Diagnostics** — gutter markers, inline squiggles, and a Lapis-owned lint tooltip (not CodeMirror's default lint tooltip)
- **Completions** — `@codemirror/autocomplete` override
- **Hover** — `hoverTooltip()` integration
- **Code actions** — exposed through the lint UI

Notebook cell editors can supply a virtual document through a CodeMirror facet so TypeScript sees the full notebook while diagnostics map back to the focused cell.

## Language services vs CodeMirror autocomplete

Not every suggestion belongs in a language service.

| Use language services when                      | Use CodeMirror extensions when                        |
| ----------------------------------------------- | ----------------------------------------------------- |
| Analysis needs document or project context      | Suggestions come from vault structure or local syntax |
| Results should merge with other providers       | Behavior is markdown- or view-specific                |
| You want consistent diagnostics and quick fixes | You need custom trigger rules or widget UI            |

Examples:

- **TypeScript completions** — language service (TypeScript compiler API in a worker)
- **Markdown wiki link autocomplete** — CodeMirror completion in the markdown plugin
- **Search query suggestions** — custom autocomplete in the search query editor
- **Markdownlint diagnostics** — language service

## Shipped providers

The source catalogs include these language-service providers. Availability depends on the installed host profile and plugins:

| Provider     | Languages                  | Capabilities                                           |
| ------------ | -------------------------- | ------------------------------------------------------ |
| Markdownlint | `markdown`                 | diagnostics, code actions                              |
| TypeScript   | `typescript`, `javascript` | diagnostics, completions, hover, definition (API only) |

## Related topics

- [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/)
- [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/)
- [Syntax and highlighting](/developers/language-extensions/syntax-and-highlighting/)

Native provider declarations describe an API capability, not a promise that the Tauri preview supplies an Electron-compatible service. Check the host and provider version before enabling it.
