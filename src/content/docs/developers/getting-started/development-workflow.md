---
title: Development workflow
description: Build, test, and debug a local plugin.
---

Develop plugins in a test vault before using them in a real vault.

## Local loop

1. Create a plugin folder under `.lapis/plugins/<plugin-id>/`.
2. Add `manifest.json`, `main.js`, and optional `styles.css`.
3. Enable the plugin in settings.
4. Use developer tools and plugin diagnostics to inspect activation failures.
5. Follow the host’s restart requirement after replacing loaded code; do not assume disable/enable reloads the module.

## Debugging

Use console output for development, but remove noisy logs before publishing. User-facing failures should go through notices or plugin diagnostics.

If a plugin breaks startup, open the vault in safe mode, disable the plugin, and inspect the last failure message.
