---
title: AI
description: Agent chat with host-provided providers and tools.
---

AI adds agent conversations, tool activity and approval controls to Lapis. It is an optional plugin; a compatible agent provider must also be configured by your host.

## Start a conversation

Enable AI in your build's plugin settings, open its chat surface and choose an available provider. Ask about a focused task and inspect the tool transcript as the agent works. Review requested actions before granting approval.

Provider availability differs between Desktop and web. Native agent runtimes require host support; installing the plugin cannot give a browser native process access. Network providers need connectivity and may send the selected context to their service. Review the provider's settings before sharing private notes.

If no provider appears, check the host's agent configuration and plugin compatibility. A plugin installation alone does not configure an account or runtime.

## Source and availability

[Owning source](https://github.com/lapismd/lapis-plugins/tree/main/packages/ai). Check [plugin availability](/help/plugins/core-plugins-overview/) and your build's installed plugin list before following this guide.
