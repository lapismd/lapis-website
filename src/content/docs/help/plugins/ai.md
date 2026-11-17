---
title: AI
description: Bundled Desktop AI and the retired shared plugin.
---

Current AI functionality is owned by the [Tauri Desktop application](https://github.com/lapismd/lapis-desktop). It uses the app's native integration; installing the old shared AI plugin or starting its Deno controller is unnecessary.

## Use the AI supplied by your host

Use the AI controls available in your Desktop build and configure a supported agent client through the host. Inspect tool activity and review requested actions before granting approval. Available clients and tools depend on the host and its configuration.

A standalone browser cannot start native agent processes. AI in a browser requires a supporting host; installing a plugin cannot add native process access. Network providers may send selected context to their service, so review the provider configuration before sharing private notes.

## Retired external plugin

The shared `@lapis-notes/ai` package from `lapis-plugins` is retired and is no longer an active installation recommendation. Historical catalog versions and media describe that former implementation, not proof of current native behavior. See [plugin availability](/help/plugins/core-plugins-overview/).

Retirement does not require deleting settings, conversations or memory. Keep existing data in place and use the host's normal enable/disable controls. The bundled/native implementation retains the AI identity; an old external package is not a replacement for the host integration.

## Owning source

[Desktop AI](https://github.com/lapismd/lapis-desktop/tree/main/src/components/ai) and [Notes native chat](https://github.com/lapismd/lapis-notes/tree/main/packages/app-profile/src/native-chat) own the current implementations. Their release and host support determine availability in your build.
