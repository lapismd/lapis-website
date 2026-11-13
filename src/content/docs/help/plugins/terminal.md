---
title: Terminal
description: Interactive shell sessions through an admitted host service.
---

Terminal provides interactive shell sessions in the workspace bottom panel. The plugin renders the terminal; an admitted host service provides process execution.

## Before opening a session

Use a build that explicitly supports Terminal and supplies its compatible terminal service. Enable the plugin and open the terminal surface exposed by that build. The reviewed plugin uses Ghostty WASM for its terminal display.

A terminal runs real commands through the host with that session's permissions. Check the working directory before changing files and review commands before executing them.

Installing the plugin in a browser does not grant native shell access. Web use requires an explicitly configured compatible host service. Terminal has public source but was not in the reviewed public plugin catalog; check your build's supported installation path.

## Source and availability

[Owning source](https://github.com/lapismd/lapis-plugin-terminal). Check [plugin availability](/help/plugins/core-plugins-overview/) and your build's installed plugin list before following this guide.
