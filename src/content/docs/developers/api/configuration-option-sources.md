---
title: Configuration option sources
description: Register dynamic option lists for declarative plugin settings.
---

Declarative plugin settings can declare `optionsSource` on string schemas so the
settings UI loads suggestion lists at runtime instead of hardcoding `enum`
values.

## Register a source

Register during `onload` and let the plugin runtime dispose the registration on
unload:

```ts
this.registerConfigurationOptionSource("fixtureTags", {
  label: "Fixture tags",
  cache: "session",
  getOptions: ({ query, limit }) => {
    const values = ["release", "beta", "manual"];
    const filtered = query
      ? values.filter((value) => value.includes(query.toLowerCase()))
      : values;
    return filtered.slice(0, limit ?? 50).map((value) => ({ value }));
  },
});
```

Relative ids are prefixed with the plugin manifest id (`fixtureTags` →
`plugin-test.fixtureTags`). Use a fully qualified id when referencing the source
from manifest JSON.

## Manifest schema fields

| Field                 | Purpose                                                          |
| --------------------- | ---------------------------------------------------------------- |
| `optionsSource`       | Source id (`plugin-id.sourceName`)                               |
| `allowUnknownOptions` | When `true`, users may enter values not returned by the provider |
| `optionsSourceParams` | Optional parameters passed to the provider through the schema    |

Closed-set settings (`allowUnknownOptions: false`) render as dropdowns.
Open-set settings render as searchable comboboxes that pass `query` and `limit`
to the provider.

## Provider context

`getOptions` receives:

- `app` — the running app instance
- `schema` — the string schema being rendered
- `configId`, `categoryId`, `settingTitle` — setting location metadata
- `currentValue` — current saved value (or array of values for table columns)
- `query` — user search text for combobox controls
- `limit` — maximum number of options to return (defaults to `50`)
- `signal` — optional abort signal for async lookups

Return `{ value, label?, description?, disabled? }` entries. Labels default to
the value string.

## Caching and invalidation

Set `cache: "session"` on the provider to reuse resolved lists until you call
`registration.invalidate()`. Session cache keys include `optionsSourceParams`,
`query`, and `limit`, so filtered combobox queries are cached separately.

Call `invalidate()` when underlying data changes (for example after reloading a
metadata cache or refreshing a workspace registry).

## Built-in sources

Core services register built-in sources during app bootstrap. Examples:

- `workspace.editorViews` — editor view ids from `EditorViewRegistry`
- `metadata.fieldValues` — distinct values for a metadata field via
  `optionsSourceParams: { "field": "status" }`

## Related docs

- [Settings](/developers/api/settings/) — general plugin settings guidance
- [Configuration and settings contract](/developers/api-reference/) — schema
  fields and control mapping in the generated API reference
