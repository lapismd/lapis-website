---
title: Plugin lifecycle
description: Load, enable, disable, and unload hooks.
---

Plugins are activated only after their manifest passes preflight.

## Lifecycle hooks

- `onload()` runs when the plugin activates.
- `onunload()` runs when the plugin is disabled, fails rollback, or the vault closes.

Register resources in `onload()` and release them in `onunload()`. This includes commands, event listeners, timers, views, CSS, and long-running tasks.

## Cleanup patterns

Prefer registration helpers that return disposables or register cleanup automatically. If a plugin starts an interval, subscribes to an event, mounts a view, or creates a background task, keep the cleanup handle and dispose it during `onunload()`.

```ts
import { Plugin } from "@lapis-notes/api";

export default class ClockPlugin extends Plugin {
  async onload() {
    const timer = window.setInterval(() => {
      this.app.notifications.notify({ message: "tick" });
    }, 60_000);
    this.register(() => window.clearInterval(timer));
  }
}
```

## Failure handling

If activation throws, the plugin is marked failed and Lapis keeps workspace boot moving. Diagnostics should explain the failing plugin id, runtime host, and last error.
