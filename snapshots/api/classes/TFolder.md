[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / TFolder

# Class: TFolder

Defined in: [storage/fs.ts:121](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L121)

## Extends

- [`TAbstractFile`](TAbstractFile.md)

## Constructors

### Constructor

> **new TFolder**(`path`, `children?`, `parent?`, `vault?`): `TFolder`

Defined in: [storage/fs.ts:122](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L122)

#### Parameters

##### path

`string`

##### children?

[`TAbstractFile`](TAbstractFile.md)[] = `[]`

##### parent?

`TFolder` \| `null`

##### vault?

[`Vault`](Vault.md)

#### Returns

`TFolder`

#### Overrides

[`TAbstractFile`](TAbstractFile.md).[`constructor`](TAbstractFile.md#constructor)

## Properties

### children

> `readonly` **children**: [`TAbstractFile`](TAbstractFile.md)[] = `[]`

Defined in: [storage/fs.ts:124](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L124)

***

### parent

> **parent**: `TFolder` \| `null` = `null`

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

### files

#### Get Signature

> **get** **files**(): [`TFile`](TFile.md)[]

Defined in: [storage/fs.ts:153](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L153)

##### Returns

[`TFile`](TFile.md)[]

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

> **copy**(`props?`): `TFolder`

Defined in: [storage/fs.ts:131](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L131)

#### Parameters

##### props?

`Partial`\<\{ `children`: [`TAbstractFile`](TAbstractFile.md)[]; `path`: `string`; \}\> = `{}`

#### Returns

`TFolder`

#### Overrides

[`TAbstractFile`](TAbstractFile.md).[`copy`](TAbstractFile.md#copy)

***

### isRoot()

> **isRoot**(): `boolean`

Defined in: [storage/fs.ts:163](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L163)

#### Returns

`boolean`

***

### iterateAll()

> **iterateAll**(`callback`): `void`

Defined in: [storage/fs.ts:142](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L142)

#### Parameters

##### callback

(`file`) => `void`

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [storage/fs.ts:94](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/fs.ts#L94)

#### Returns

`string`

#### Inherited from

[`TAbstractFile`](TAbstractFile.md).[`toString`](TAbstractFile.md#tostring)
