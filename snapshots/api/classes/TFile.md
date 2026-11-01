[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / TFile

# Class: TFile

Defined in: [storage/fs.ts:99](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L99)

## Extends

- [`TAbstractFile`](TAbstractFile.md)

## Constructors

### Constructor

> **new TFile**(`path`, `stat`, `parent`, `vault?`): `TFile`

Defined in: [storage/fs.ts:100](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L100)

#### Parameters

##### path

`string`

##### stat

`FileStats`

##### parent

[`TFolder`](TFolder.md) \| `null`

##### vault?

[`Vault`](Vault.md)

#### Returns

`TFile`

#### Overrides

[`TAbstractFile`](TAbstractFile.md).[`constructor`](TAbstractFile.md#constructor)

## Properties

### parent

> **parent**: [`TFolder`](TFolder.md) \| `null` = `null`

Defined in: [storage/fs.ts:55](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L55)

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`parent`](TAbstractFile.md#parent)

***

### path

> **path**: `string`

Defined in: [storage/fs.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L50)

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`path`](TAbstractFile.md#path)

***

### stat

> `readonly` **stat**: `FileStats`

Defined in: [storage/fs.ts:102](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L102)

***

### vault

> **vault**: [`Vault`](Vault.md)

Defined in: [storage/fs.ts:51](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L51)

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`vault`](TAbstractFile.md#vault)

## Accessors

### basename

#### Get Signature

> **get** **basename**(): `string`

Defined in: [storage/fs.ts:79](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L79)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`basename`](TAbstractFile.md#basename)

***

### baseName

#### Get Signature

> **get** **baseName**(): `string`

Defined in: [storage/fs.ts:66](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L66)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`baseName`](TAbstractFile.md#basename-1)

***

### extension

#### Get Signature

> **get** **extension**(): `string`

Defined in: [storage/fs.ts:70](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L70)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`extension`](TAbstractFile.md#extension)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [storage/fs.ts:75](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L75)

##### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`name`](TAbstractFile.md#name)

## Methods

### copy()

> **copy**(`props?`): `TFile`

Defined in: [storage/fs.ts:109](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L109)

#### Parameters

##### props?

`Partial`\<\{ `parent`: [`TFolder`](TFolder.md); `path`: `string`; `stat`: `FileStats`; \}\> = `{}`

#### Returns

`TFile`

#### Overrides

[`TAbstractFile`](TAbstractFile.md).[`copy`](TAbstractFile.md#copy)

***

### toString()

> **toString**(): `string`

Defined in: [storage/fs.ts:94](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L94)

#### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`toString`](TAbstractFile.md#tostring)
