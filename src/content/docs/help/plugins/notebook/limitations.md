---
title: Notebook limitations
description: Supported languages, Observable compatibility, and Safe Mode.
---

Lapis notebooks are markdown-native and intentionally narrower than full
Observable notebooks or general-purpose Jupyter environments.

## Supported today

- JavaScript, TypeScript, SQL, and dynamic markdown cells
- Explicit execution with stale-cell tracking
- DuckDB over vault files and app metadata tables
- Reactive `view(Inputs.*)` inputs with downstream reruns
- Tables, charts, markdown, text, images, errors, and trusted `html`/`svg`
- Static ESM imports for configured or installed packages
- Generated output persistence across reloads

## Not supported today

| Area                     | Status                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Python (`py` / `python`) | Not available                                                                                              |
| Full Observable JS       | Mutable variables, generators, implicit invalidation, and `@observablehq/runtime` imports are out of scope |
| Observable imports       | Use Lapis `lapis.*` helpers instead of Observable notebook imports                                         |
| Relative cell imports    | Rejected until notebook-local module resolution exists                                                     |
| Public `nb` namespace    | Removed; use `lapis.*` or documented bare globals                                                          |

## Observable-inspired subset

The source catalog’s **System Guide** notebook exercises the current parity
slice: async cells, `display()`, plain inputs, markdown interpolation, trusted
`html`, and `lapis.FileAttachment()`. It documents what the runtime targets,
not every Observable feature.

## Browser vs desktop

- **Browser / PWA** uses DuckDB-Wasm and vault adapter reads for file registration.
- **Current Desktop and web plugin** use the plugin-owned DuckDB-WASM path where the host can serve its assets. The legacy Electron native-DuckDB sidecar is not part of the current plugin.

## Safe Mode

Safe Mode can disable notebook execution while you review untrusted vault
content. When execution is blocked, run commands surface a recovery notice
instead of starting cells.

See [Safe mode](/help/plugins/safe-mode/).

## Related pages

- [Notebook overview](/help/plugins/notebook/)
- [Inputs and outputs](/help/plugins/notebook/inputs-and-outputs/)
- [SQL and DuckDB](/help/plugins/notebook/sql-and-duckdb/)
