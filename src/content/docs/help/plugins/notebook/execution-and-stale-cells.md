---
title: Execution and stale cells
description: Run notebooks, track stale cells, auto-run, and persisted outputs.
---

Notebook execution is per note. Each `.notebook.md` file gets its own session,
dependency graph, and generated output state.

## Explicit runs

Lapis does not execute notebook cells automatically when you merely open a
note. Run work through:

- **Run notebook** — execute the note from the status bar or command palette
- **Run cell** — inline control on the active cell
- **Rerun stale** — rerun only cells marked stale in the dependency closure

Queued and running cells show status in the cell footer. Stop a running cell
with the inline stop control on that cell.

## Stale cells

When an upstream cell changes, downstream dependents become **stale**. Stale
cells keep their previous outputs visible until you rerun them.

Lazy mode tracks which cells need rerunning without rebuilding unchanged input
cells unnecessarily. Input changes rerun downstream cells only and reuse
already-satisfied upstream values.

## Auto-run on edit

You can enable automatic stale-cell reruns after edits:

1. Open notebook settings and turn on **Auto-run stale cells on edit**, or
2. Set `notebook.autorun: true` in note frontmatter

Auto-run is debounced so rapid edits do not trigger a run on every keystroke.

## Status bar messages

The notebook status bar reports:

| Message                     | Meaning                                                |
| --------------------------- | ------------------------------------------------------ |
| Restored generated outputs  | Serializable outputs loaded from the app database      |
| Outputs recomputed          | Cells ran during this session after an explicit run    |
| Restored outputs need rerun | Saved state exists but live DOM or inputs need a rerun |
| Worker runtime              | Simple notebooks without DuckDB or live DOM            |
| In-process runtime          | DuckDB, interactive inputs, or trusted DOM outputs     |

## Persistence model

- **Source** stays in `.notebook.md` on disk.
- **Generated state** (outputs, input values, stale flags) lives in the app
  database under a stable notebook identity, with source-path ownership checks.
- **Live DOM** (trusted `html`/`svg`, mounted inputs) is ephemeral and is
  rebuilt by rerunning the owning cell when needed.

Use **Clear outputs** to discard generated state without touching source.

## Safe Mode

When Safe Mode disables notebook execution, run commands show a recovery notice
instead of starting the runtime. See [Safe mode](/help/plugins/safe-mode/) and
[Limitations](/help/plugins/notebook/limitations/).

## Related pages

- [Getting started](/help/plugins/notebook/getting-started/)
- [Inputs and outputs](/help/plugins/notebook/inputs-and-outputs/)
- [Panels and packages](/help/plugins/notebook/panels-and-packages/)
