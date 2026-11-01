---
title: Documentation attributions
description: Upstream documentation sources adapted for Lapis Notes.
---

Some public documentation pages are adapted from open documentation projects and rewritten for Lapis Notes.

## Obsidian plugin development docs

Developer documentation for plugin anatomy, lifecycle, editor access, events, manifest shape, publishing, and plugin CSS is adapted from Marcus Olsson's archived **Obsidian Plugin Developer Docs** repository.

- Source: [github.com/marcusolsson/obsidian-plugin-docs](https://github.com/marcusolsson/obsidian-plugin-docs)
- License: [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- Changes: rewritten for the Lapis `App` facade, community plugin host boundary, current manifest guidance, and first-party plugin CSS contract.

## Visual Studio Code documentation

User-interface documentation for command-driven workflows, sidebars, editor groups, shortcuts, and workspace layout is adapted from the **Visual Studio Code Documentation** repository.

- Source: [github.com/microsoft/vscode-docs](https://github.com/microsoft/vscode-docs)
- License: [Creative Commons Attribution 3.0 United States](https://creativecommons.org/licenses/by/3.0/us/)
- Changes: rewritten for Lapis Notes, vaults, notes, sidebars, plugin views, and the current web/desktop runtime.

Developer documentation for language extensions, manifest contributions, and the VS Code-to-Lapis mapping draws on structure and terminology from the [Visual Studio Code Extension API — Language Extensions Overview](https://code.visualstudio.com/api/language-extensions/overview) and related contribution-point reference pages.

- Source: [code.visualstudio.com/api](https://code.visualstudio.com/api)
- Changes: rewritten for Lapis CodeMirror/Lezer editing, `LanguageServiceProvider`, and `lapis.contributes` manifest metadata rather than TextMate grammars or VS Code extension hosts.

No Microsoft, Visual Studio Code, or Obsidian trademarks imply endorsement of Lapis Notes.
