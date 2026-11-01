---
title: Lapis manifest contributions
description: VS Code-style manifest contributions under the lapis namespace.
---

Every community plugin starts with the baseline Obsidian [`manifest.json`](/developers/getting-started/manifest/) fields. Lapis-native extensions can add an optional **`lapis`** namespace for contribution indexing, lazy activation, and declarative settings.

If you are coming from VS Code, compare this to [`contributes` in `package.json`](https://code.visualstudio.com/api/references/contribution-points). Lapis keeps Obsidian-compatible fields at the top level and puts Lapis-specific metadata under `lapis`.

## Baseline plus Lapis namespace

```json
{
  "id": "example-plugin",
  "name": "Example Plugin",
  "version": "1.0.0",
  "minAppVersion": "0.1.0",
  "author": "Example author",
  "description": "Example language tools.",
  "lapis": {
    "manifestVersion": 1,
    "extensionKind": ["workspace", "trustedDesktop"],
    "activationEvents": ["onCommand:example-plugin:lint"],
    "permissions": ["vault.read", "commands"],
    "contributes": {
      "commands": [],
      "configuration": [],
      "languages": [],
      "editorViews": [],
      "services": [],
      "statusBarItems": []
    },
    "runtime": {
      "entries": {
        "workspace": {
          "path": "main.mjs",
          "format": "esm",
          "sharedDependencies": ["@lapis-notes/api"]
        }
      }
    }
  }
}
```

If `lapis` is absent, the plugin is treated as a standard Obsidian-compatible community plugin.

## Top-level `lapis` fields

| Field              | Purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `manifestVersion`  | Schema version for the `lapis` namespace (currently `1`)                |
| `extensionKind`    | Supported hosts: `workspace`, `browserWorker`, `trustedDesktop`         |
| `activationEvents` | Lazy activation triggers (see below)                                    |
| `permissions`      | Requested brokered capabilities such as `vault.read` or `settings.read` |
| `contributes`      | Declarative contribution records                                        |
| `runtime`          | Host-specific entry files when they differ from `main`                  |

Current ESM packages use `runtime.entries` and declare every host-shared module
that their bundle imports. The short legacy `runtime.workspace` / `desktop`
fields remain compatibility metadata; they do not grant a native service.
Generate the exact module list with your package's build tooling and test the
resulting archive in the target host. See the [public manifest type](/developers/api-reference/interfaces/lapisextensionmanifest/).

## Activation events

Lapis extensions can defer running `main.js` until a contribution needs code:

| Event                      | Meaning                                         |
| -------------------------- | ----------------------------------------------- |
| `onStartupFinished`        | Activate after workspace boot completes         |
| `onCommand:<id>`           | Activate before executing a contributed command |
| `onLanguage:<languageId>`  | Activate when a matching document opens         |
| `onView:<viewType>`        | Activate before creating a contributed view     |
| `onService:<serviceId>`    | Activate when a service provider is selected    |
| `onFileSystem:<glob>`      | Activate when matching vault files are opened   |
| `workspaceContains:<glob>` | Activate after discovery finds a matching file  |

Obsidian-compatible plugins without `lapis` metadata still activate during the normal plugin boot phase.

## Contribution kinds

### Commands

```json
{
  "command": "example-plugin:lint",
  "title": "$(play) Run lint",
  "category": "Example",
  "when": "editor.active && editor.language == markdown"
}
```

Manifest commands install without running plugin code. Execution triggers lazy activation when the plugin has not loaded yet.

### Configuration

Declarative settings use JSON Schema properties, similar to VS Code `contributes.configuration`:

```json
{
  "id": "example-plugin",
  "title": "Example Plugin",
  "properties": {
    "enabled": {
      "type": "boolean",
      "title": "Enable linting",
      "default": true
    },
    "severity": {
      "type": "string",
      "enum": ["error", "warning", "info"],
      "enumItemLabels": ["Errors only", "Warnings", "All messages"],
      "default": "warning"
    }
  }
}
```

Supported control mappings include boolean toggles, text inputs, enums, sliders (number with min/max), multiline text, color and icon pickers, date/time fields, primitive arrays, arrays of flat objects (table rows with fixed columns), flat object grids, and record-object maps. Nested object/array columns inside array rows, free-form object rows, and other complex nested schemas fall back to an **Edit in app.json** button that opens the vault configuration file in a centered in-app floating editor pane.

Arrays of flat objects render as table editors when `items.type` is `object` with fixed `properties` whose columns are plain strings, string enums, `optionsSource` strings, booleans, numbers, or integers. Recommend `additionalProperties: false`.

Compared to [VS Code configuration contributions](https://code.visualstudio.com/api/references/contribution-points#_contributes.configuration), Lapis supports the common scalar and collection shapes plus Lapis-specific `format: "icon"`. VS Code-only metadata such as `scope`, `tags`, and `keywords` are not used.

### Languages

```json
{
  "id": "typescript",
  "aliases": ["TS"],
  "extensions": [".ts", ".tsx"]
}
```

Language contributions are indexed for activation and diagnostics. **Registering the CodeMirror parser still requires plugin code** through `registerEditorExtension()`.

### Editor views

```json
{
  "id": "example.editor",
  "label": "Example editor",
  "filenamePatterns": ["*.example"],
  "priority": "default"
}
```

Editor-view metadata lets Settings show selectable editor IDs and preserves `workspace.editorAssociations` when a plugin is disabled. You still register the view constructor with `registerView()` and wire extensions with `registerExtensions()`.

### Services (language services)

```json
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
```

The bundled Markdown Lint plugin uses this pattern. A system extension binds the actual provider implementation at boot. Hybrid community plugins can call `Plugin.registerLapisServiceProvider()` from code instead.

### Status bar items

```json
{
  "id": "example.status",
  "text": "Ready",
  "alignment": "left",
  "command": "example-plugin:lint",
  "when": "editor.active"
}
```

## Context keys and `when` clauses

Declarative contributions can declare a `when` expression evaluated through `App.contextKeys`.

Built-in keys include:

- `editor.active`, `editor.language`, `editor.hasSelection`
- `view.id`, `view.focused`
- `workspace.trusted`
- `runtime.host`, `runtime.desktop`, `runtime.browser`, `runtime.nativeHost`
- `plugin.enabled.<pluginId>`, `plugin.state.<pluginId>`

Plugins can register custom scoped keys under `plugin.<pluginId>.*`. Unload resets those keys automatically.

Supported grammar:

- Identifiers with dot or dash namespaces (`editor.active`)
- `&&`, `||`, unary `!`
- `==`, `!=`
- Parentheses for grouping
- Boolean, string, and number literals

## Plugin classification

| Class               | When                                         | Required entry                           |
| ------------------- | -------------------------------------------- | ---------------------------------------- |
| Obsidian-compatible | No `lapis` namespace                         | `main.js`                                |
| Lapis extension     | `lapis` only, no Obsidian-compat requirement | Selected runtime entry if any            |
| Hybrid              | Both Obsidian and `lapis` metadata           | `main.js` plus any Lapis runtime entries |

## Real example: Markdown Lint

The Markdown Lint source illustrates manifest-heavy registration (set the minimum app version from actual compatibility testing):

```json
{
  "id": "markdown-lint",
  "name": "Markdown Lint",
  "version": "0.0.1",
  "minAppVersion": "0.1.0",
  "lapis": {
    "manifestVersion": 1,
    "source": "system",
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
}
```

## Related topics

- [Baseline manifest](/developers/getting-started/manifest/)
- [Language services](/developers/language-extensions/language-services/)
- [Editor views and associations](/developers/language-extensions/editor-views-and-associations/)
- [Commands](/developers/api/commands/) — imperative command registration and label icons
