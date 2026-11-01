---
title: SQL and DuckDB
description: Query vault files and app tables from notebook SQL cells.
---

SQL cells run through DuckDB inside the notebook runtime. Register vault files
from JavaScript/TypeScript cells, then query them from SQL cells with
`{{parameter}}` placeholders.

## App tables

These read-only tables expose vault metadata to SQL:

| Table                    | Contents                      |
| ------------------------ | ----------------------------- |
| `lapis.notes`            | Note paths, names, extensions |
| `lapis.links`            | Resolved internal links       |
| `lapis.search_documents` | Search-indexed document text  |

Example:

````markdown
:::cell{#recent-notes lang="sql"}

```sql
SELECT path, name
FROM lapis.notes
ORDER BY name
LIMIT 10
```

:::
````

## Register vault files

Register CSV, Parquet, or JSON files from a TypeScript cell:

````markdown
:::cell{#register lang="ts"}

```ts
await lapis.duckdb.registerVaultFile("sales_csv", "./assets/sales.csv");
lapis.markdown("Registered `./assets/sales.csv` for SQL queries.");
```

:::

:::cell{#query lang="sql"}

```sql
SELECT month, amount
FROM read_csv_auto('sales_csv')
WHERE region = {{selectedRegion}}
ORDER BY month
```

:::
````

Paths are vault-relative. The current plugin uses DuckDB-WASM and reads
through the owning App vault adapter. It does not provide the legacy native
DuckDB sidecar or promise zero-copy access to Desktop files.

## Parameter placeholders

SQL cells can reference JavaScript variables with `{{name}}` syntax. Upstream
cells must define those variables before the SQL cell runs.

## DuckDB and runtime choice

Notebooks that use DuckDB run on the **in-process runtime** in the browser.
Simple notebooks without DuckDB or live DOM can use the lighter **worker
runtime**. The status bar tells you which path is active.

## Related pages

- [Cells and syntax](/help/plugins/notebook/cells-and-syntax/)
- [Inputs and outputs](/help/plugins/notebook/inputs-and-outputs/)
- [Execution and stale cells](/help/plugins/notebook/execution-and-stale-cells/)
