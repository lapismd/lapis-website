---
title: What is a Lapis plugin?
description: Overview of the Lapis plugin model.
---

A Lapis plugin extends the app by registering commands, views, settings, event listeners, styles, or vault-backed behavior.

## Plugin kinds

- **Bundled first-party plugins** ship with the app and follow first-party package contracts.
- **Community plugins** are discovered from `.lapis/plugins/<id>/` and run through the community plugin host boundary.
- **Runtime-aware plugins** can declare host requirements so Lapis can decide whether the current runtime can run them.

Plugins should treat the public `App` facade as their boundary. Internal Svelte components, workspace stores, and package-private services can change without notice.
