[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / TAbstractFile

# Abstract Class: TAbstractFile

Defined in: [storage/fs.ts:49](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L49)

## Extended by

- [`TFile`](TFile.md)
- [`TFolder`](TFolder.md)

## Constructors

### Constructor

> **new TAbstractFile**(`path`, `parent?`, `vault?`): `TAbstractFile`

Defined in: [storage/fs.ts:53](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L53)

#### Parameters

##### path

`string`

##### parent?

[`TFolder`](TFolder.md) \| `null` = `null`

##### vault?

[`Vault`](Vault.md)

#### Returns

`TAbstractFile`

## Properties

### parent

> **parent**: [`TFolder`](TFolder.md) \| `null` = `null`

Defined in: [storage/fs.ts:55](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L55)

***

### path

> **path**: `string`

Defined in: [storage/fs.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L50)

***

### vault

> **vault**: [`Vault`](Vault.md)

Defined in: [storage/fs.ts:51](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L51)

## Accessors

### basename

#### Get Signature

> **get** **basename**(): `string`

Defined in: [storage/fs.ts:79](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L79)

##### Returns

`string`

***

### baseName

#### Get Signature

> **get** **baseName**(): `string`

Defined in: [storage/fs.ts:66](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L66)

##### Returns

`string`

***

### extension

#### Get Signature

> **get** **extension**(): `string`

Defined in: [storage/fs.ts:70](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L70)

##### Returns

`string`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [storage/fs.ts:75](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L75)

##### Returns

`string`

## Methods

### copy()

> `abstract` **copy**(`props?`): `TAbstractFile`

Defined in: [storage/fs.ts:85](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L85)

#### Parameters

##### props?

`Partial`\<\{ `children`: `TAbstractFile`[]; `parent`: [`TFolder`](TFolder.md); `path`: `string`; `stat`: `FileStats`; \}\>

#### Returns

`TAbstractFile`

***

### toString()

> **toString**(): `string`

Defined in: [storage/fs.ts:94](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L94)

#### Returns

`string`
