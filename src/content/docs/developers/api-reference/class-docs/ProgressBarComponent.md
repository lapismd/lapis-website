---
title: "ProgressBarComponent"
description: "Source-generated public API reference for ProgressBarComponent."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:420](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L420)

## Extends

- `ValueComponent`\<`number`\>

## Constructors

### Constructor

> **new ProgressBarComponent**(`containerEl`): `ProgressBarComponent`

Defined in: [settings.svelte.ts:424](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L424)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`ProgressBarComponent`

#### Overrides

`ValueComponent<number>.constructor`

## Properties

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:424](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L424)

***

### metadata

> **metadata**: `Record`\<`string`, `any`\> = `{}`

Defined in: [settings.svelte.ts:68](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L68)

#### Inherited from

`ValueComponent.metadata`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `any`

Defined in: [settings.svelte.ts:435](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L435)

##### Returns

`any`

#### Overrides

`ValueComponent.disabled`

***

### toggleEl

#### Get Signature

> **get** **toggleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:431](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L431)

##### Returns

`HTMLElement`

## Methods

### getValue()

> **getValue**(): `number`

Defined in: [settings.svelte.ts:446](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L446)

#### Returns

`number`

#### Overrides

`ValueComponent.getValue`

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

Defined in: [settings.svelte.ts:440](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L440)

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

Defined in: [settings.svelte.ts:456](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L456)

#### Parameters

##### tooltip

`string`

##### options?

`TooltipOptions`

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [settings.svelte.ts:450](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L450)

#### Parameters

##### value

`number`

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
