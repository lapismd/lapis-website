---
title: Trust & safe mode
description: Workspace trust and restricted plugin execution.
---

Plugins must behave well when a workspace is untrusted or safe mode is active.

## Workspace trust

Untrusted workspaces block powerful plugin features such as trusted desktop runtime entries and brokered hosted capabilities. Your plugin should surface a clear message when a required capability is unavailable.

## Safe mode

Safe mode exists for recovery. Plugins should not try to bypass it. If safe mode blocks your plugin, explain which feature is unavailable and how the user can re-enable it intentionally.
