---
title: Manifest
description: The plugin manifest format and required fields.
---

Each community plugin lives in its own folder and declares metadata in `manifest.json`.

```json
{
  "id": "example-plugin",
  "name": "Example Plugin",
  "version": "0.1.0",
  "minAppVersion": "0.1.0",
  "author": "Example author",
  "description": "A small example plugin."
}
```

## Recommended fields

- `id`: stable lowercase plugin id.
- `name`: user-facing name.
- `version`: plugin version.
- `minAppVersion`: lowest Lapis version the plugin supports.
- `author` and `description`: attribution and a short explanation.
- `supportedRuntimes`: optional runtime declaration.
- `requiredCapabilities`: optional brokered capabilities such as vault I/O or settings.

Keep ids stable. Changing a plugin id creates a different plugin from the user's point of view.

## Lapis namespace

Lapis-native extensions can add an optional `lapis` object for VS Code-style contribution indexing, lazy activation, declarative settings, and language-service declarations. See [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/) for the full reference.

Set `minAppVersion` to the lowest app version you have actually tested; the value above is illustrative.

Obsidian-compatible folders use `main.js` by convention. Current ESM releases
declare a `lapis.runtime.entries.workspace` object with a `path`, `format`, and
the exact host-shared dependencies used by the bundle. Use the owning package's
build tooling to generate this metadata rather than copying another bundle's
module list.
