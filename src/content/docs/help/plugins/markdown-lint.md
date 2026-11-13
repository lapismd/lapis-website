---
title: Markdown Lint
description: Find supported formatting issues in open Markdown notes.
---

Markdown Lint adds diagnostics for supported Markdown rules in open documents. It works with the host's diagnostics and Problems surfaces.

## Review a diagnostic

Enable the plugin and open a Markdown note. Inspect a highlighted issue or its Problems entry, read the rule message and apply a supported fix when appropriate. You can also edit the text yourself and let diagnostics refresh.

Rule configuration determines which issues are reported. Check the plugin settings before changing an established writing style merely to satisfy a default rule. Not every diagnostic has an automatic fix.

The reviewed behavior covers open-document diagnostics. Do not assume it scans or rewrites every file in a vault. [Spell Check](/help/plugins/spell-check/) handles spelling separately.

## Source and availability

[Owning source](https://github.com/lapismd/lapis-plugins/tree/main/packages/markdown-lint). Check [plugin availability](/help/plugins/core-plugins-overview/) and your build's installed plugin list before following this guide.
