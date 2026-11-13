---
title: Source Editor
description: Edit text, JSON and YAML through source views.
---

Source Editor provides text-oriented views, including JSON and YAML, through the host's editor associations.

## Open a source file

Open a supported text file from the vault. If another plugin owns its default view, use the host's view or editor-association controls to select an available source view. Edit the text directly and inspect any language diagnostics supplied by installed language services.

Use source mode for configuration and structured text that you need to inspect exactly. Syntax highlighting does not prove that an application-specific configuration is valid; check the owning tool's format and requirements before changing it.

Source Editor belongs to the reviewed shared default profile and remains optional. Markdown has its own [editing and reading views](/help/plugins/markdown/).

## Source and availability

[Owning source](https://github.com/lapismd/lapis-plugins/tree/main/packages/source-editor). Check [plugin availability](/help/plugins/core-plugins-overview/) and your build's installed plugin list before following this guide.
