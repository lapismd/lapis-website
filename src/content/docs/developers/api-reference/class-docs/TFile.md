---
title: "TFile"
description: "Source-generated public API reference for TFile."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [storage/fs.ts:99](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L99)

## Extends

- [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

## Constructors

### Constructor

> **new TFile**(`path`, `stat`, `parent`, `vault?`): `TFile`

Defined in: [storage/fs.ts:100](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L100)

#### Parameters

##### path

`string`

##### stat

`FileStats`

##### parent

[`TFolder`](/developers/api-reference/class-docs/tfolder/) \| `null`

##### vault?

[`Vault`](/developers/api-reference/class-docs/vault/)

#### Returns

`TFile`

#### Overrides

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`constructor`](/developers/api-reference/class-docs/tabstractfile/#constructor)

## Properties

### parent

> **parent**: [`TFolder`](/developers/api-reference/class-docs/tfolder/) \| `null` = `null`

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

### stat

> `readonly` **stat**: `FileStats`

Defined in: [storage/fs.ts:102](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L102)

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

> **copy**(`props?`): `TFile`

Defined in: [storage/fs.ts:109](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L109)

#### Parameters

##### props?

`Partial`\<\{ `parent`: [`TFolder`](/developers/api-reference/class-docs/tfolder/); `path`: `string`; `stat`: `FileStats`; \}\> = `{}`

#### Returns

`TFile`

#### Overrides

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`copy`](/developers/api-reference/class-docs/tabstractfile/#copy)

***

### toString()

> **toString**(): `string`

Defined in: [storage/fs.ts:94](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/fs.ts#L94)

#### Returns

`string`

#### Inherited from

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/).[`toString`](/developers/api-reference/class-docs/tabstractfile/#tostring)
