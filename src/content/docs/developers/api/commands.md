---
title: Commands
description: Register commands and keybindings.
---

Commands make plugin actions available from the command palette and other app surfaces.

## Command shape

```js
this.addCommand({
  id: "open-dashboard",
  name: "Open dashboard",
  callback: () => {
    // Open a view, update a note, or run plugin work.
  },
});
```

Use names that describe the user action. `Plugin.addCommand()` prefixes the id with your plugin id and registers cleanup.

Commands should fail visibly and briefly. Use notices for user-facing problems and diagnostics for developer-facing details.

## Command label icons

Command names can include VS Code-style icon tokens in the `name` or manifest `title` field:

```js
this.addCommand({
  id: "run",
  name: "$(play) Run example",
  callback: () => {
    /* ... */
  },
});
```

Supported token forms:

- `$(play)` — VS Code codicon when available, otherwise a registered Iconify icon with the same id
- `$(sync~spin)` — codicon or registry icon with spin animation
- `$(lucide:file-text)` — qualified Iconify pack icon
- `$(vscode-icons:file-type-json)` — another qualified pack example

Unknown tokens remain visible as literal `$(…)` text. Manifest commands use the same parser for `title` values declared under `lapis.contributes.commands`.
