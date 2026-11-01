---
title: Runtime overview
description: Keep plugin behavior inside the public host contract.
---

The plugin manager discovers metadata, checks manifests and runtime requirements, activates admitted enabled code, and owns cleanup and diagnostics. The host owns vault selection, persistence, native capabilities, and session lifetime.

## Desktop and web

The current Desktop preview is Tauri. A browser session and a Desktop session can expose different services even when they load the same plugin package. A declared native requirement does not grant or automatically enable a native service.

Do not depend on Electron, Node globals, an unrestricted sidecar, or package-private services. Inspect the public host capabilities and report an unavailable feature clearly. Unknown outcomes from native operations must not be retried automatically as if they failed before acceptance.

## App ownership

Use the `App` supplied to your plugin, view, or component context. Legacy compatibility is a disposable host responsibility and is not a reason for new plugin code to read ambient application state.
