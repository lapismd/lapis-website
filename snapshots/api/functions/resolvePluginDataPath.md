[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / resolvePluginDataPath

# Function: resolvePluginDataPath()

> **resolvePluginDataPath**(`pluginId`, `source`, `basePath?`): `string` \| `null`

Defined in: [plugin.ts:234](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L234)

Resolve the compatibility data path used by `loadData()` and `saveData()`.

Community plugins store data beside their manifest folder, while bundled and
system plugins use the shared `/.lapis/<id>.json` location.

## Parameters

### pluginId

`string`

### source

[`PluginSource`](../type-aliases/PluginSource.md)

### basePath?

`string`

## Returns

`string` \| `null`
