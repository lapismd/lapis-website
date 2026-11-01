---
title: Community plugins
description: Install compatible extensions explicitly.
---

Use the Community plugin surface available in your build to review plugin metadata, version, host requirements, and installation status before installing. The [plugin registry](https://registry.lapis.md) describes published packages; host support still depends on your application version.

## Installation and recovery

Current hosts use `.lapis/` for application state and `.lapis/plugins/<plugin-id>/` for installed plugins by default. Signed `.lapis-plugin` archives carry verified release metadata and assets. Restart when the host marks an installation as requiring restart; an older running owner must not reactivate a replacement module.

Only install code you trust. Plugin code is not automatically harmless because it is signed or compatible. Desktop's native operations require host admission; do not assume an Electron sidecar or arbitrary Node access exists.

Use [Safe Mode](/help/plugins/safe-mode/) to recover from failures. Keep vault backups before testing unfamiliar plugins.

## Related pages

- [Developer installation guide](/developers/publishing/install-community-plugins/)
- [Plugin availability](/help/plugins/core-plugins-overview/)
