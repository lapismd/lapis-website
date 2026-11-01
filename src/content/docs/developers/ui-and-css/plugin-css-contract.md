---
title: Plugin CSS contract
description: How plugin styles integrate with the shared theme.
---

First-party plugin CSS uses stable plugin-prefixed selectors and shared theme variables.

## Selector rules

Use your plugin id as the selector prefix:

- `search-...`
- `graph-...`
- `canvas-...`
- `bases-...`
- `tasks-...`
- `notebook-...`

Use semantic variables such as `--background-primary`, `--background-primary-alt`, `--background-modifier-border`, `--text-normal`, `--text-muted`, `--interactive-accent`, and `--text-on-accent`.

## Avoid

- Hard-coded app palette values in plugin chrome.
- Workspace-global selectors for plugin-owned surfaces.
- Component-local CSS for repeated plugin semantics that should be part of the plugin stylesheet.

Community plugins should follow the same spirit: local selectors, scoped styles, and no assumptions about undocumented workspace DOM.
