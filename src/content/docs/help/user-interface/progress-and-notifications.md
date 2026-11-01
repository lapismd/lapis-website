---
title: Progress & notifications
description: Follow background work and plugin messages.
---

Long-running work should report progress instead of silently blocking the workspace.

## Progress

Lapis supports determinate progress, incremental progress, and indeterminate progress. Index rebuilds, semantic search refreshes, imports, and plugin background tasks can surface status in the status bar or notification center.

Progress can be cancellable when the underlying work checks an abort signal between async steps. Synchronous plugin code cannot be preempted, so plugins should split long work into cancellable async chunks.

## Notifications

Notifications are for user-visible outcomes: success, failure, warning, or a clear next step. Plugin authors should avoid using notifications as a log stream. Diagnostics belong in plugin diagnostics, console output, or a dedicated plugin view.
