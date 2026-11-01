[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / AppSettings

# Class: AppSettings

Defined in: [settings.svelte.ts:1299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1299)

Mutable registry of settings groups and items shown in the settings UI.

## Constructors

### Constructor

> **new AppSettings**(): `AppSettings`

Defined in: [settings.svelte.ts:1305](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1305)

#### Returns

`AppSettings`

## Properties

### groups

> `readonly` **groups**: `SettingGroup`[]

Defined in: [settings.svelte.ts:1300](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1300)

***

### key

> **key**: `string`

Defined in: [settings.svelte.ts:1301](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1301)

## Methods

### addGroup()

> **addGroup**(`cb`): `this`

Defined in: [settings.svelte.ts:1309](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1309)

#### Parameters

##### cb

(`item`) => `any`

#### Returns

`this`

***

### find()

> **find**(`id`): `SettingGroup` \| `undefined`

Defined in: [settings.svelte.ts:1321](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1321)

#### Parameters

##### id

`string`

#### Returns

`SettingGroup` \| `undefined`

***

### findItem()

> **findItem**(`id`): `SettingItem` \| `undefined`

Defined in: [settings.svelte.ts:1325](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1325)

#### Parameters

##### id

`string`

#### Returns

`SettingItem` \| `undefined`

***

### update()

> **update**(): `this`

Defined in: [settings.svelte.ts:1316](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1316)

#### Returns

`this`
