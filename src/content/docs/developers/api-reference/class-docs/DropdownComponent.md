---
title: "DropdownComponent"
description: "Source-generated public API reference for DropdownComponent."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:590](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L590)

## Extends

- `ValueComponent`\<`string` \| `string`[]\>

## Constructors

### Constructor

> **new DropdownComponent**(`containerEl`): `DropdownComponent`

Defined in: [settings.svelte.ts:594](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L594)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`DropdownComponent`

#### Overrides

ValueComponent\<string \| string\[\]\>.constructor

## Properties

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:594](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L594)

***

### metadata

> **metadata**: `Record`\<`string`, `any`\> = `{}`

Defined in: [settings.svelte.ts:68](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L68)

#### Inherited from

`ValueComponent.metadata`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [settings.svelte.ts:630](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L630)

##### Returns

`boolean`

#### Overrides

`ValueComponent.disabled`

***

### selectEl

#### Get Signature

> **get** **selectEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:626](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L626)

##### Returns

`HTMLElement`

## Methods

### addOption()

> **addOption**(`value`, `label`): `this`

Defined in: [settings.svelte.ts:605](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L605)

#### Parameters

##### value

`string`

##### label

`string`

#### Returns

`this`

***

### addOptions()

> **addOptions**(`options`): `this`

Defined in: [settings.svelte.ts:610](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L610)

#### Parameters

##### options

`Record`\<`string`, `string`\>

#### Returns

`this`

***

### getValue()

> **getValue**(): `string` \| `string`[]

Defined in: [settings.svelte.ts:646](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L646)

#### Returns

`string` \| `string`[]

#### Overrides

`ValueComponent.getValue`

***

### onChange()

> **onChange**(`callback`): `this`

Defined in: [settings.svelte.ts:659](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L659)

#### Parameters

##### callback

(`value`) => `any`

#### Returns

`this`

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

`ValueComponent.registerOptionListener`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:635](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L635)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Overrides

`ValueComponent.setDisabled`

***

### setItems()

> **setItems**(`items`): `this`

Defined in: [settings.svelte.ts:619](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L619)

#### Parameters

##### items

`object`[]

#### Returns

`this`

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

`ValueComponent.setMetadata`

***

### setType()

> **setType**(`type`): `this`

Defined in: [settings.svelte.ts:640](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L640)

#### Parameters

##### type

`"multiple"` \| `"single"`

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [settings.svelte.ts:654](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L654)

#### Parameters

##### value

`string` \| `string`[]

#### Returns

`this`

#### Overrides

`ValueComponent.setValue`

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

`ValueComponent.then`
