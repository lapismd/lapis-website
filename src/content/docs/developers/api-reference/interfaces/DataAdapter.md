---
title: "DataAdapter"
description: "Source-generated public API reference for DataAdapter."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [storage/fs.ts:210](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L210)

## Extended by

- [`VaultAdapter`](/developers/api-reference/interfaces/vaultadapter/)

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

***

### getName()

> **getName**(): `string`

Defined in: [storage/fs.ts:211](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L211)

#### Returns

`string`

***

### getResourcePath()

> **getResourcePath**(`normalizedPath`): `string`

Defined in: [storage/fs.ts:262](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L262)

#### Parameters

##### normalizedPath

`string`

#### Returns

`string`

***

### list()

> **list**(`normalizedPath`): `Promise`\<`ListedFiles`\>

Defined in: [storage/fs.ts:253](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L253)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`ListedFiles`\>

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

***

### read()

> **read**(`normalizedPath`): `Promise`\<`string`\>

Defined in: [storage/fs.ts:214](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L214)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`string`\>

***

### readBinary()

> **readBinary**(`normalizedPath`): `Promise`\<`ArrayBuffer`\>

Defined in: [storage/fs.ts:215](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L215)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### remove()

> **remove**(`normalizedPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:259](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L259)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`void`\>

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

***

### stat()

> **stat**(`normalizedPath`): `Promise`\<`Stat` \| `null`\>

Defined in: [storage/fs.ts:213](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L213)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`Stat` \| `null`\>

***

### trashLocal()

> **trashLocal**(`normalizedPath`): `Promise`\<`void`\>

Defined in: [storage/fs.ts:264](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L264)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`void`\>

***

### trashSystem()

> **trashSystem**(`normalizedPath`): `Promise`\<`boolean`\>

Defined in: [storage/fs.ts:263](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L263)

#### Parameters

##### normalizedPath

`string`

#### Returns

`Promise`\<`boolean`\>

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
