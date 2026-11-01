---
title: "ButtonComponent"
description: "Source-generated public API reference for ButtonComponent."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:201](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L201)

## Extends

- `BaseComponent`

## Constructors

### Constructor

> **new ButtonComponent**(`containerEl`): `ButtonComponent`

Defined in: [settings.svelte.ts:207](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L207)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`ButtonComponent`

#### Overrides

`BaseComponent.constructor`

## Properties

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:207](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L207)

## Accessors

### buttonEl

#### Get Signature

> **get** **buttonEl**(): `HTMLButtonElement`

Defined in: [settings.svelte.ts:218](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L218)

##### Returns

`HTMLButtonElement`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [settings.svelte.ts:285](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L285)

##### Returns

`boolean`

#### Overrides

`BaseComponent.disabled`

## Methods

### createChildren()

> **createChildren**(): `Snippet`\<\[\]\>

Defined in: [settings.svelte.ts:268](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L268)

#### Returns

`Snippet`\<\[\]\>

***

### onClick()

> **onClick**(`onclick`): `this`

Defined in: [settings.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L280)

#### Parameters

##### onclick

(`evt`) => `any`

#### Returns

`this`

***

### setButtonText()

> **setButtonText**(`name`): `this`

Defined in: [settings.svelte.ts:249](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L249)

#### Parameters

##### name

`string`

#### Returns

`this`

***

### setClass()

> **setClass**(`cls`): `this`

Defined in: [settings.svelte.ts:263](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L263)

#### Parameters

##### cls

`string`

#### Returns

`this`

***

### setCta()

> **setCta**(): `this`

Defined in: [settings.svelte.ts:230](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L230)

#### Returns

`this`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:289](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L289)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Overrides

`BaseComponent.setDisabled`

***

### setIcon()

> **setIcon**(`icon`): `this`

Defined in: [settings.svelte.ts:256](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L256)

#### Parameters

##### icon

`string`

#### Returns

`this`

***

### setSize()

> **setSize**(`size`): `void`

Defined in: [settings.svelte.ts:240](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L240)

#### Parameters

##### size

`ButtonSize`

#### Returns

`void`

***

### setTooltip()

> **setTooltip**(`value`, `options?`): `this`

Defined in: [settings.svelte.ts:223](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L223)

#### Parameters

##### value

`string`

##### options?

`TooltipOptions`

#### Returns

`this`

***

### setVariant()

> **setVariant**(`variant`): `this`

Defined in: [settings.svelte.ts:235](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L235)

#### Parameters

##### variant

`ButtonVariant`

#### Returns

`this`

***

### setWarning()

> **setWarning**(): `this`

Defined in: [settings.svelte.ts:244](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L244)

#### Returns

`this`

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

`BaseComponent.then`
