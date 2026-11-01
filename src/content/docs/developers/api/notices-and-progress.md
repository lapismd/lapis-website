---
title: Notices & progress
description: Report user-visible messages and background work.
---

Use notices for short user-visible messages and progress for long-running work.

## Notices

Notices should be actionable. Good examples:

- A plugin setting could not be saved.
- A generated file was created.
- A command cannot run because the active view is not supported.

Avoid notice spam. Logs and repeated diagnostics belong in developer tools or a plugin diagnostics view.

## Progress

Use progress when work may take noticeable time: vault-wide scans, imports, indexing, remote model downloads, or semantic refreshes.

Progress can be determinate, incremental, or indeterminate. If the operation supports cancellation, pass an abort signal and check it between async steps.
