---
title: Events
description: Subscribe to workspace and editor events.
---

Events let plugins react to app and vault changes without polling.

## Use events for

- Vault file changes
- Metadata updates
- Workspace lifecycle
- Plugin lifecycle
- Approved editor or view changes

Dispose every event subscription during `onunload()`. A plugin that keeps stale listeners alive can continue mutating state after users believe it is disabled.

## Timers are also resources

Intervals and timeouts should be treated like event subscriptions. Register them from `onload()`, keep a cleanup handle, and clear them during `onunload()`.

Use events when something external changes. Use timers only when the work is truly periodic.
