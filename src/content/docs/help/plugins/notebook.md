---
title: Notebook
description: Run executable notebook cells inside Markdown files.
---

Notebook files use the `.notebook.md` suffix and remain Markdown notes with
notebook-owned cell structure. You can mix ordinary prose with executable
JavaScript, TypeScript, SQL, and dynamic markdown cells in the same vault file.

<figure class="product-media"><img src="/media/notebook-workspace.light.webp" data-product-theme="light" alt="A notebook with executed cells inside a Notes workspace." loading="lazy" width="2400" height="1600" /><img src="/media/notebook-workspace.dark.webp" data-product-theme="dark" alt="A notebook with executed cells inside a Notes workspace." loading="lazy" width="2400" height="1600" /></figure>

Notebook is a separately installed plugin. See its [source and current package requirements](https://github.com/lapismd/lapis-plugin-notebook).

## What notebooks are for

- SQL and data exploration over vault files or app tables
- Small JavaScript or TypeScript calculations beside your notes
- Interactive inputs that update downstream cells
- Tables, charts, and rendered outputs next to explanatory text

Use ordinary notes for durable prose. Use notebooks when execution and outputs
are part of the thinking process.

## Notebook docs

- [Getting started](/help/plugins/notebook/getting-started/) — create a notebook, run cells, read the status bar
- [Cells and syntax](/help/plugins/notebook/cells-and-syntax/) — `:::cell` directives, languages, slash menu
- [Execution and stale cells](/help/plugins/notebook/execution-and-stale-cells/) — run actions, stale cells, auto-run, persistence
- [SQL and DuckDB](/help/plugins/notebook/sql-and-duckdb/) — vault files, app tables, queries
- [Inputs and outputs](/help/plugins/notebook/inputs-and-outputs/) — `view(...)`, tables, charts, `display()`
- [Panels and packages](/help/plugins/notebook/panels-and-packages/) — Variables, Dependencies, Packages
- [Limitations](/help/plugins/notebook/limitations/) — supported languages, Observable subset, Safe Mode

## Related pages

- [Code, math, and diagrams](/help/editing/code-blocks/)
- [Safe mode](/help/plugins/safe-mode/)
- [Community plugins](/help/plugins/community-plugins/)
