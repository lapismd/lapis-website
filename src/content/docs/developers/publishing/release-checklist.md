---
title: Release checklist
description: Prepare a community plugin for users.
---

Before publishing a plugin, verify that it behaves well in fresh vaults and recovery scenarios.

## Checklist

- Manifest id is stable and lowercase.
- Version is updated.
- Required runtime capabilities are declared.
- Commands have clear names.
- Settings validate saved data and provide defaults.
- Event subscriptions, timers, CSS, and views unload cleanly.
- Browser/PWA and desktop support are documented.
- Safe mode and untrusted workspace behavior are handled.
- README explains install steps and known limitations.

Publish only the files users need: `manifest.json`, `main.js`, optional `styles.css`, and required assets.
