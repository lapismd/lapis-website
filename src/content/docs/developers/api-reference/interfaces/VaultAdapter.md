---
title: "VaultAdapter"
description: "Source-generated public API reference for VaultAdapter."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [storage/fs.ts:284](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L284)

Preferred name for the canonical vault file adapter contract.

`DataAdapter` remains exported for Obsidian API compatibility while the
runtime migrates toward the cross-host vault session model.

## Extends

- [`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

## Methods

### append()

> **append**(`normalizedPath`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:226](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L226)

#### Parameters

##### normalizedPath

`string`

##### data

`string`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`append`](/developers/api-reference/interfaces/dataadapter/#append)

***

### appendBinary()

> **appendBinary**(`normalizedPath`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:231](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L231)

#### Parameters

##### normalizedPath

`string`

##### data

`ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`appendBinary`](/developers/api-reference/interfaces/dataadapter/#appendbinary)

***

### atomicWrite()?

> `optional` **atomicWrite**(`normalizedPath`, `source`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:303](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L303)

#### Parameters

##### normalizedPath

`string`

##### source

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### options?

`AtomicDataWriteOptions`

#### Returns

`Promise`\<`void`\>

***

### copy()

> **copy**(`normalizedPath`, `normalizedNewPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:261](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L261)

#### Parameters

##### normalizedPath

`string`

##### normalizedNewPath

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`copy`](/developers/api-reference/interfaces/dataadapter/#copy)

***

### exists()

> **exists**(`normalizedPath`, `sensitive?`): `Promise`\<`boolean`\>

Defined in: [storage/fs.ts:212](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L212)

#### Parameters

##### normalizedPath

`string`

##### sensitive?

`boolean`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`exists`](/developers/api-reference/interfaces/dataadapter/#exists)

***

### getCapabilities()?

> `optional` **getCapabilities**(): `Partial`\<[`VaultAdapterCapabilities`](/developers/api-reference/interfaces/vaultadaptercapabilities/)\>

Defined in: [storage/fs.ts:285](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L285)

#### Returns

`Partial`\<[`VaultAdapterCapabilities`](/developers/api-reference/interfaces/vaultadaptercapabilities/)\>

***

### getName()

> **getName**(): `string`

Defined in: [storage/fs.ts:211](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L211)

#### Returns

`string`

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`getName`](/developers/api-reference/interfaces/dataadapter/#getname)

***

### getResourcePath()

> **getResourcePath**(`normalizedPath`): `string`

Defined in: [storage/fs.ts:262](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L262)

#### Parameters

##### normalizedPath

`string`

#### Returns

`string`

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`getResourcePath`](/developers/api-reference/interfaces/dataadapter/#getresourcepath)

***

### list()

> **list**(`normalizedPath`): `Promise`\<`ListedFiles`\>

Defined in: [storage/fs.ts:253](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L253)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`ListedFiles`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`list`](/developers/api-reference/interfaces/dataadapter/#list)

***

### mkdir()

> **mkdir**(`normalizedPath`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:254](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L254)

#### Parameters

##### normalizedPath

`string`

##### options?

`Partial`\<\{ `mode`: `string`; `recursive`: `boolean`; \}\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`mkdir`](/developers/api-reference/interfaces/dataadapter/#mkdir)

***

### openRead()?

> `optional` **openRead**(`normalizedPath`): `Promise`\<`VaultReadHandle`\>

Defined in: [storage/fs.ts:302](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L302)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`VaultReadHandle`\>

***

### process()

> **process**(`normalizedPath`, `fn`, `options?`): `Promise`\<`string`\>

Defined in: [storage/fs.ts:248](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L248)

Atomically read, modify, and save the contents of a plaintext file.

#### Parameters

##### normalizedPath

`string`

Path to file/folder, use [normalizePath](/developers/api-reference/functions/normalizepath/) to
  normalize beforehand.

##### fn

(`data`) => `string`

A callback function which returns the new content of the file
  synchronously.

##### options?

`Partial`\<`FileProperties`\>

Write options.

#### Returns

`Promise`\<`string`\>

String - the text value of the file that was written.

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`process`](/developers/api-reference/interfaces/dataadapter/#process)

***

### read()

> **read**(`normalizedPath`): `Promise`\<`string`\>

Defined in: [storage/fs.ts:214](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L214)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`read`](/developers/api-reference/interfaces/dataadapter/#read)

***

### readBinary()

> **readBinary**(`normalizedPath`): `Promise`\<`ArrayBuffer`\>

Defined in: [storage/fs.ts:215](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L215)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`readBinary`](/developers/api-reference/interfaces/dataadapter/#readbinary)

***

### remove()

> **remove**(`normalizedPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:259](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L259)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`remove`](/developers/api-reference/interfaces/dataadapter/#remove)

***

### rename()

> **rename**(`normalizedPath`, `normalizedNewPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:260](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L260)

#### Parameters

##### normalizedPath

`string`

##### normalizedNewPath

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`rename`](/developers/api-reference/interfaces/dataadapter/#rename)

***

### rmdir()

> **rmdir**(`normalizedPath`, `recursive`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:258](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L258)

#### Parameters

##### normalizedPath

`string`

##### recursive

`boolean`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`rmdir`](/developers/api-reference/interfaces/dataadapter/#rmdir)

***

### stat()

> **stat**(`normalizedPath`): `Promise`\<`Stat` \| `null`\>

Defined in: [storage/fs.ts:213](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L213)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`Stat` \| `null`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`stat`](/developers/api-reference/interfaces/dataadapter/#stat)

***

### trashLocal()

> **trashLocal**(`normalizedPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:264](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L264)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`trashLocal`](/developers/api-reference/interfaces/dataadapter/#trashlocal)

***

### trashSystem()

> **trashSystem**(`normalizedPath`): `Promise`\<`boolean`\>

Defined in: [storage/fs.ts:263](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L263)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`trashSystem`](/developers/api-reference/interfaces/dataadapter/#trashsystem)

***

### write()

> **write**(`normalizedPath`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:216](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L216)

#### Parameters

##### normalizedPath

`string`

##### data

`string`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`write`](/developers/api-reference/interfaces/dataadapter/#write)

***

### writeBinary()

> **writeBinary**(`normalizedPath`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:221](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L221)

#### Parameters

##### normalizedPath

`string`

##### data

`ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/).[`writeBinary`](/developers/api-reference/interfaces/dataadapter/#writebinary)

***

### writeExclusive()?

> `optional` **writeExclusive**(`normalizedPath`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:287](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L287)

Publish new complete bytes without replacing an existing destination.

#### Parameters

##### normalizedPath

`string`

##### data

`string` \| `ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### writeTextIfUnchanged()?

> `optional` **writeTextIfUnchanged**(`normalizedPath`, `data`, `expected`, `options?`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:296](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L296)

Reject when the file no longer has these exact contents (null means
absent).

#### Parameters

##### normalizedPath

`string`

##### data

`string`

##### expected

`string` \| `null`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>
