---
title: "resolvePluginDataPath()"
description: "Source-generated public API reference for resolvePluginDataPath()."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

> **resolvePluginDataPath**(`pluginId`, `source`, `basePath?`): `string` \| `null`

Defined in: [plugin.ts:234](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L234)

Resolve the compatibility data path used by `loadData()` and `saveData()`.

Community plugins store data beside their manifest folder, while bundled and
system plugins use the shared `/.lapis/<id>.json` location.

## Parameters

### pluginId

`string`

### source

[`PluginSource`](/developers/api-reference/type-aliases/pluginsource/)

### basePath?

`string`

## Returns

`string` \| `null`
