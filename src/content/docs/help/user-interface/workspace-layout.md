---
title: Workspace layout
description: Understand editor groups, sidebars, panels, and restored layout state.
---

Lapis uses a VS Code-inspired workspace model adapted for notes. The center area holds editor leaves, and the sidebars hold navigation and plugin tools.

## Main areas

- **Editor area**: notes, canvases, bases, graphs, PDFs, slides, and notebooks open as tabs.
- **Left sidebar**: file explorer, search, graph, notebook dependencies, and other navigation-heavy views.
- **Right sidebar**: contextual plugin panels such as backlinks, properties, or [notebook Variables, Dependencies, and Packages](/help/plugins/notebook/panels-and-packages/) when enabled.
- **Status bar**: compact runtime state, progress, and plugin status items.
- **Command palette**: command-driven access to app and plugin actions.

## Editor groups

Tabs can be split into groups so related notes and views stay visible together. Open a reference note beside the note you are writing, or keep Search and Graph visible while editing a project note.

Lapis persists the workspace tree as layout state and restores it after plugins finish activating. If startup recovery enters safe mode, layout restoration can be skipped so a broken view does not trap the vault.

## Sidebar groups

Sidebar views can be grouped into collapsible panels. Each panel is still a real workspace leaf, so plugin views keep normal lifecycle, history, and persistence behavior.
