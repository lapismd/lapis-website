---
title: Cells and syntax
description: Write notebook cells with :::cell directives and supported languages.
---

Notebook cells live inside markdown container directives named `cell`. Text
outside those blocks stays ordinary markdown.

## Cell directive shape

Each cell needs a stable id and a language:

````markdown
:::cell{#load-data lang="ts"}

```ts
const tag = "project/alpha";
lapis.markdown(`Filtering notes tagged **${tag}**.`);
```

:::
````

Supported `lang` values:

| Language    | Use for                                            |
| ----------- | -------------------------------------------------- |
| `ts` / `js` | Calculations, inputs, vault reads, charts          |
| `sql`       | DuckDB queries over registered files or app tables |
| `md`        | Dynamic markdown with `{{variable}}` placeholders  |

Python (`py` / `python`) is not supported in the current runtime.

If you omit `lang`, Lapis infers it from the fenced code block info string when
possible, otherwise it defaults to `ts`.

## Optional notebook frontmatter

```yaml
---
notebook:
  version: 1
  autorun: false
  mode: lazy
---
```

- `autorun` — per-note override for stale-cell auto-runs after edits
- `mode` — reserved metadata; execution still requires explicit runs unless
  auto-run is enabled

## Mix prose and cells

````markdown
# Weekly review

This paragraph is not executable.

:::cell{#matching-notes lang="sql"}

```sql
SELECT path, name
FROM lapis.notes
ORDER BY name
LIMIT 10
```

:::
````

## Slash menu templates

In a `.notebook.md` source editor, type `/` to insert canonical templates for:

- `/code` — JavaScript/TypeScript cell
- `/sql` — SQL cell
- `/input` — input cell with `view(...)`
- `/markdown` — dynamic markdown cell

## Cell ids matter

Cell ids (`#load-data`, `#summary`, and so on) identify cells in the dependency
graph, Variables panel, and error messages. Reuse ids carefully; duplicate
definitions are reported as errors.

## Related pages

- [Getting started](/help/plugins/notebook/getting-started/)
- [SQL and DuckDB](/help/plugins/notebook/sql-and-duckdb/)
- [Inputs and outputs](/help/plugins/notebook/inputs-and-outputs/)
