---
title: "ToggleComponent"
description: "Source-generated public API reference for ToggleComponent."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:295](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L295)

## Extends

- `ValueComponent`\<`boolean`\>

## Constructors

### Constructor

> **new ToggleComponent**(`containerEl`): `ToggleComponent`

Defined in: [settings.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L299)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`ToggleComponent`

#### Overrides

`ValueComponent<boolean>.constructor`

## Properties

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L299)

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

Defined in: [settings.svelte.ts:310](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L310)

##### Returns

`boolean`

#### Overrides

`ValueComponent.disabled`

***

### toggleEl

#### Get Signature

> **get** **toggleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:306](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L306)

##### Returns

`HTMLElement`

## Methods

### getValue()

> **getValue**(): `boolean`

Defined in: [settings.svelte.ts:320](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L320)

#### Returns

`boolean`

#### Overrides

`ValueComponent.getValue`

***

### onChange()

> **onChange**(`callback`): `this`

Defined in: [settings.svelte.ts:338](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L338)

#### Parameters

##### callback

(`value`) => `any`

#### Returns

`this`

***

### onClick()

> **onClick**(): `void`

Defined in: [settings.svelte.ts:334](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L334)

#### Returns

`void`

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

Defined in: [settings.svelte.ts:315](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L315)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Overrides

`ValueComponent.setDisabled`

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

### setTooltip()

> **setTooltip**(`tooltip`, `options?`): `this`

Defined in: [settings.svelte.ts:330](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L330)

#### Parameters

##### tooltip

`string`

##### options?

`TooltipOptions`

#### Returns

`this`

***

### setValue()

> **setValue**(`on`): `this`

Defined in: [settings.svelte.ts:324](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L324)

#### Parameters

##### on

`boolean`

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
