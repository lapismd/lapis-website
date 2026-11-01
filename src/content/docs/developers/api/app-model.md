---
title: App model
description: The Application object plugins receive at load time.
---

Plugins receive an app facade that exposes supported capabilities without exposing the full internal runtime graph.

## Common services

- `vault`: read and write vault-scoped files.
- `commands`: inspect and execute registered commands; use `Plugin.addCommand()` for owned registration.
- `notifications`: report user-visible messages and progress.
- `configuration`: access app configuration; use `Plugin.loadData()` and `saveData()` for plugin-owned saved data.
- `workspace`: observe and control workspace leaves and views.
- `metadataCache`: query indexed note metadata and subscribe to its updates.

The app object is a contract. Treat undocumented fields as private even when they are visible in a debugger.
