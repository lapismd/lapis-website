---
title: "SearchComponent"
description: "Source-generated public API reference for SearchComponent."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:752](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L752)

## Extends

- `AbstractTextComponent`\<`HTMLInputElement`\>

## Constructors

### Constructor

> **new SearchComponent**(`containerEl`): `SearchComponent`

Defined in: [settings.svelte.ts:754](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L754)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`SearchComponent`

#### Overrides

`AbstractTextComponent<HTMLInputElement>.constructor`

## Properties

### metadata

> **metadata**: `Record`\<`string`, `any`\> = `{}`

Defined in: [settings.svelte.ts:68](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L68)

#### Inherited from

`AbstractTextComponent.metadata`

## Accessors

### clearButtonEl

#### Get Signature

> **get** **clearButtonEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:767](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L767)

##### Returns

`HTMLElement`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [settings.svelte.ts:677](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L677)

##### Returns

`boolean`

#### Inherited from

`AbstractTextComponent.disabled`

***

### inputEl

#### Get Signature

> **get** **inputEl**(): `T`

Defined in: [settings.svelte.ts:673](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L673)

##### Returns

`T`

#### Inherited from

`AbstractTextComponent.inputEl`

## Methods

### getValue()

> **getValue**(): `string`

Defined in: [settings.svelte.ts:688](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L688)

#### Returns

`string`

#### Inherited from

`AbstractTextComponent.getValue`

***

### onChange()

> **onChange**(`callback`): `this`

Defined in: [settings.svelte.ts:775](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L775)

#### Parameters

##### callback

(`value`) => `any`

#### Returns

`this`

#### Overrides

`AbstractTextComponent.onChange`

***

### onChanged()

> **onChanged**(): `void`

Defined in: [settings.svelte.ts:781](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L781)

#### Returns

`void`

#### Overrides

`AbstractTextComponent.onChanged`

***

### registerOptionListener()

> **registerOptionListener**(`listeners`, `key`): `this`

Defined in: [settings.svelte.ts:71](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L71)

#### Parameters

##### listeners

`Record`\<`string`, (`value?`) => `T`\>

##### key

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.registerOptionListener`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:682](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L682)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setDisabled`

***

### setMetadata()

> **setMetadata**(`key`, `value`): `this`

Defined in: [settings.svelte.ts:82](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L82)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setMetadata`

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `this`

Defined in: [settings.svelte.ts:698](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L698)

#### Parameters

##### placeholder

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setPlaceholder`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [settings.svelte.ts:693](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L693)

#### Parameters

##### value

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setValue`

***

### then()

> **then**(`cb`): `this`

Defined in: [settings.svelte.ts:59](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L59)

Facilitates chaining

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.then`
