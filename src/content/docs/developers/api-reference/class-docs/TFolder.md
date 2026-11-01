---
title: "TFolder"
description: "Source-generated public API reference for TFolder."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [storage/fs.ts:121](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L121)

## Extends

- [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

## Constructors

### Constructor

> **new TFolder**(`path`, `children?`, `parent?`, `vault?`): `TFolder`

Defined in: [storage/fs.ts:122](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L122)

#### Parameters

##### path

`string`

##### children?

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)[] = `[]`

##### parent?

`TFolder` \| `null`

##### vault?

[`Vault`](/developers/api-reference/class-docs/vault/)

#### Returns

`TFolder`

#### Overrides

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`constructor`](/developers/api-reference/class-docs/tabstractfile/#constructor)

## Properties

### children

> `readonly` **children**: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)[] = `[]`

Defined in: [storage/fs.ts:124](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L124)

***

### parent

> **parent**: `TFolder` \| `null` = `null`

Defined in: [storage/fs.ts:55](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L55)

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`parent`](/developers/api-reference/class-docs/tabstractfile/#parent)

***

### path

> **path**: `string`

Defined in: [storage/fs.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L50)

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`path`](/developers/api-reference/class-docs/tabstractfile/#path)

***

### vault

> **vault**: [`Vault`](/developers/api-reference/class-docs/vault/)

Defined in: [storage/fs.ts:51](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L51)

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`vault`](/developers/api-reference/class-docs/tabstractfile/#vault)

## Accessors

### basename

#### Get Signature

> **get** **basename**(): `string`

Defined in: [storage/fs.ts:79](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L79)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`basename`](/developers/api-reference/class-docs/tabstractfile/#basename)

***

### baseName

#### Get Signature

> **get** **baseName**(): `string`

Defined in: [storage/fs.ts:66](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L66)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`baseName`](/developers/api-reference/class-docs/tabstractfile/#basename-1)

***

### extension

#### Get Signature

> **get** **extension**(): `string`

Defined in: [storage/fs.ts:70](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L70)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`extension`](/developers/api-reference/class-docs/tabstractfile/#extension)

***

### files

#### Get Signature

> **get** **files**(): [`TFile`](/developers/api-reference/class-docs/tfile/)[]

Defined in: [storage/fs.ts:153](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L153)

##### Returns

[`TFile`](/developers/api-reference/class-docs/tfile/)[]

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [storage/fs.ts:75](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L75)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`name`](/developers/api-reference/class-docs/tabstractfile/#name)

## Methods

### copy()

> **copy**(`props?`): `TFolder`

Defined in: [storage/fs.ts:131](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L131)

#### Parameters

##### props?

`Partial`\<\{ `children`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)[]; `path`: `string`; \}\> = `{}`

#### Returns

`TFolder`

#### Overrides

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`copy`](/developers/api-reference/class-docs/tabstractfile/#copy)

***

### isRoot()

> **isRoot**(): `boolean`

Defined in: [storage/fs.ts:163](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L163)

#### Returns

`boolean`

***

### iterateAll()

> **iterateAll**(`callback`): `void`

Defined in: [storage/fs.ts:142](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L142)

#### Parameters

##### callback

(`file`) => `void`

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [storage/fs.ts:94](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L94)

#### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`toString`](/developers/api-reference/class-docs/tabstractfile/#tostring)
