---
title: Getting started with notebooks
description: Create a notebook note, run cells, and read notebook status.
---

Notebook notes use the `.notebook.md` suffix. Lapis opens them in the Notebook
view by default, where you can run cells and inspect results beside the source.

<figure class="docs-media">
<img src="/media/notebook-workspace.light.webp" data-product-theme="light" alt="A notebook with executed cells in a Notes workspace." loading="lazy" />
<img src="/media/notebook-workspace.dark.webp" data-product-theme="dark" alt="A notebook with executed cells in a Notes workspace." loading="lazy" />
</figure>

## Create or open a notebook

1. Create a new file that ends in `.notebook.md`, or convert an existing note
   by renaming a Markdown file in a disposable vault.
2. Open the file in the Notebook view. Source editing and live preview stay in
   the same tab.
3. Add cells with the slash menu in source mode (`/code`, `/sql`, `/input`,
   `/markdown`) or by writing `:::cell` directives by hand.

Ordinary markdown outside `:::cell` blocks stays non-executable prose.

## Run a notebook

Execution starts explicitly. Auto-run controls stale-cell reruns after edits
(see [Execution and stale cells](/help/plugins/notebook/execution-and-stale-cells/)).

To run work:

1. Use **Run notebook** in the notebook status bar to execute the full note.
2. Use the inline **Run** control on a cell to run just that cell and its
   downstream dependents.
3. Use **Rerun stale** when upstream values changed and downstream cells need
   refreshing.

The status bar also shows:

- whether outputs were **restored** from a previous session or **recomputed**
  during the current run
- whether the note is on the **worker runtime** or **in-process runtime**
- whether [Safe Mode](/help/plugins/safe-mode/) has blocked execution

## Clear outputs without editing source

Use **Clear outputs** from the notebook status bar or command palette
(`lapis-notebook:clear-active-notebook-outputs`) to discard generated output state.
Your `.notebook.md` source file is not changed.

## Try the gallery notes

Use **Create demo notebook folder** (`lapis-notebook:create-demo-notebooks`)
when the plugin is enabled to add its example notes. The source catalog also
includes disposable **Getting Started** and **System Guide** fixtures covering
SQL, inputs, tables, and attachments.

## Related pages

- [Cells and syntax](/help/plugins/notebook/cells-and-syntax/)
- [Execution and stale cells](/help/plugins/notebook/execution-and-stale-cells/)
- [Notebook overview](/help/plugins/notebook/)
