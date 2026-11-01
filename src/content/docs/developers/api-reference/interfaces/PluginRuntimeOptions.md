---
title: "PluginRuntimeOptions"
description: "Source-generated public API reference for PluginRuntimeOptions."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [plugin.ts:264](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L264)

Runtime metadata applied to a plugin instance before activation.

## Properties

### basePath?

> `optional` **basePath?**: `string`

Defined in: [plugin.ts:265](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L265)

***

### createSyncHostCapabilities?

> `optional` **createSyncHostCapabilities?**: () => `SyncHostCapabilities`

Defined in: [plugin.ts:272](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L272)

#### Returns

`SyncHostCapabilities`

***

### grantedCapabilities?

> `optional` **grantedCapabilities?**: `HostedPluginCapability`[]

Defined in: [plugin.ts:271](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L271)

***

### hostMode?

> `optional` **hostMode?**: `string`

Defined in: [plugin.ts:269](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L269)

***

### provenance?

> `optional` **provenance?**: `PluginProvenance`

Defined in: [plugin.ts:267](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L267)

***

### requestedCapabilities?

> `optional` **requestedCapabilities?**: `HostedPluginCapability`[]

Defined in: [plugin.ts:270](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L270)

***

### required?

> `optional` **required?**: `boolean`

Defined in: [plugin.ts:268](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L268)

***

### revokeSyncHostCapabilities?

> `optional` **revokeSyncHostCapabilities?**: () => `void` \| `Promise`\<`void`\>

Defined in: [plugin.ts:273](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L273)

#### Returns

`void` \| `Promise`\<`void`\>

***

### source?

> `optional` **source?**: [`PluginSource`](/developers/api-reference/type-aliases/pluginsource/)

Defined in: [plugin.ts:266](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin.ts#L266)
