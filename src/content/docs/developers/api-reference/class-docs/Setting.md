---
title: "Setting"
description: "Source-generated public API reference for Setting."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:1493](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1493)

## Constructors

### Constructor

> **new Setting**(`containerEl`): `Setting`

Defined in: [settings.svelte.ts:1509](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1509)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`Setting`

## Properties

### components

> **components**: `BaseComponent`[] = `[]`

Defined in: [settings.svelte.ts:1494](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1494)

***

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1509](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1509)

***

### controlEl

> **controlEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1507](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1507)

***

### descEl

> **descEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1505](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1505)

***

### infoEl

> **infoEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1501](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1501)

***

### nameEl

> **nameEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1503](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1503)

***

### settingEl

> **settingEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1499](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1499)

## Methods

### addButton()

> **addButton**(`cb`): `this`

Defined in: [settings.svelte.ts:1636](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1636)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addColorPicker()

> **addColorPicker**(`cb`): `this`

Defined in: [settings.svelte.ts:1720](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1720)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addComponent()

> **addComponent**\<`T`\>(`component`): `this`

Defined in: [settings.svelte.ts:1615](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1615)

#### Type Parameters

##### T

`T` *extends* `BaseComponent`

#### Parameters

##### component

`T`

#### Returns

`this`

***

### addDatePicker()

> **addDatePicker**(`cb`): `this`

Defined in: [settings.svelte.ts:1794](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1794)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addDropdown()

> **addDropdown**(`cb`): `this`

Defined in: [settings.svelte.ts:1736](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1736)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addExtraButton()

> **addExtraButton**(`cb`): `this`

Defined in: [settings.svelte.ts:1654](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1654)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addIconPicker()

> **addIconPicker**(`cb`): `this`

Defined in: [settings.svelte.ts:1728](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1728)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addList()

> **addList**(`cb`): `this`

Defined in: [settings.svelte.ts:1752](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1752)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addMomentFormat()

> **addMomentFormat**(`cb`): `this`

Defined in: [settings.svelte.ts:1744](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1744)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addObjectArray()

> **addObjectArray**(`cb`): `this`

Defined in: [settings.svelte.ts:1786](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1786)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addObjectGrid()

> **addObjectGrid**(`cb`): `this`

Defined in: [settings.svelte.ts:1770](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1770)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addObjectMap()

> **addObjectMap**(`cb`): `this`

Defined in: [settings.svelte.ts:1778](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1778)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addOptionsCombobox()

> **addOptionsCombobox**(`cb`): `this`

Defined in: [settings.svelte.ts:1760](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1760)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addProgressBar()

> **addProgressBar**(`cb`): `this`

Defined in: [settings.svelte.ts:1712](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1712)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addSearch()

> **addSearch**(`cb`): `this`

Defined in: [settings.svelte.ts:1688](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1688)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addSlider()

> **addSlider**(`cb`): `this`

Defined in: [settings.svelte.ts:1704](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1704)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addText()

> **addText**(`cb`): `this`

Defined in: [settings.svelte.ts:1680](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1680)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addTextArea()

> **addTextArea**(`cb`): `this`

Defined in: [settings.svelte.ts:1696](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1696)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### addToggle()

> **addToggle**(`cb`): `this`

Defined in: [settings.svelte.ts:1672](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1672)

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

***

### clear()

> **clear**(): `this`

Defined in: [settings.svelte.ts:1609](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1609)

#### Returns

`this`

***

### setClass()

> **setClass**(`cls`): `this`

Defined in: [settings.svelte.ts:1583](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1583)

#### Parameters

##### cls

`string`

#### Returns

`this`

***

### setDesc()

> **setDesc**(`desc`): `this`

Defined in: [settings.svelte.ts:1568](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1568)

#### Parameters

##### desc

`string` \| `DocumentFragment`

#### Returns

`this`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:1603](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1603)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

***

### setHeading()

> **setHeading**(): `this`

Defined in: [settings.svelte.ts:1620](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1620)

#### Returns

`this`

***

### setName()

> **setName**(`name`): `this`

Defined in: [settings.svelte.ts:1552](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1552)

#### Parameters

##### name

`string` \| `DocumentFragment`

#### Returns

`this`

***

### setTooltip()

> **setTooltip**(`tooltip`, `options?`): `this`

Defined in: [settings.svelte.ts:1597](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1597)

#### Parameters

##### tooltip

`string`

##### options?

`TooltipOptions`

#### Returns

`this`

***

### setVisibility()

> **setVisibility**(`visible`): `void`

Defined in: [settings.svelte.ts:1563](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1563)

#### Parameters

##### visible

`boolean`

#### Returns

`void`

***

### then()

> **then**(`cb`): `this`

Defined in: [settings.svelte.ts:1547](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1547)

Facilitates chaining

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`
