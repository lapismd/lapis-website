---
title: Settings
description: Expose plugin settings to users.
---

Plugin settings should be explicit, validated, and recoverable.

## Good settings

- Store only plugin-owned data.
- Validate saved data before using it.
- Provide defaults for fresh installs.
- Keep user-facing labels short and concrete.
- Avoid settings that require editing JSON by hand.

Settings surfaces should use the app's shared controls and token system so plugin UI remains consistent with the workspace.

For declarative manifest settings that need runtime suggestion lists, see
[Configuration option sources](/developers/api/configuration-option-sources/).
