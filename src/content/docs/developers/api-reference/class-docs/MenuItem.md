---
title: "MenuItem"
description: "Source-generated public API reference for MenuItem."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [menu.svelte.ts:23](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L23)

## Properties

### \[MENU\_ITEM\_TAG\]

> `readonly` **\[MENU\_ITEM\_TAG\]**: `true` = `true`

Defined in: [menu.svelte.ts:24](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L24)

***

### menu

> `readonly` **menu**: [`Menu`](/developers/api-reference/class-docs/menu/)

Defined in: [menu.svelte.ts:75](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L75)

## Accessors

### checked

#### Get Signature

> **get** **checked**(): `boolean` \| `null`

Defined in: [menu.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L50)

##### Returns

`boolean` \| `null`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [menu.svelte.ts:54](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L54)

##### Returns

`boolean`

***

### icon

#### Get Signature

> **get** **icon**(): `string` \| `null`

Defined in: [menu.svelte.ts:46](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L46)

##### Returns

`string` \| `null`

***

### isLabel

#### Get Signature

> **get** **isLabel**(): `boolean`

Defined in: [menu.svelte.ts:58](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L58)

##### Returns

`boolean`

***

### section

#### Get Signature

> **get** **section**(): `string`

Defined in: [menu.svelte.ts:38](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L38)

##### Returns

`string`

***

### title

#### Get Signature

> **get** **title**(): `string` \| `DocumentFragment`

Defined in: [menu.svelte.ts:42](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L42)

##### Returns

`string` \| `DocumentFragment`

## Methods

### click()

> **click**(`evt`): `any`

Defined in: [menu.svelte.ts:62](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L62)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`any`

***

### onClick()

> **onClick**(`callback`): `this`

Defined in: [menu.svelte.ts:115](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L115)

#### Parameters

##### callback

(`evt`) => `any`

#### Returns

`this`

***

### setChecked()

> **setChecked**(`checked`): `this`

Defined in: [menu.svelte.ts:94](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L94)

#### Parameters

##### checked

`boolean` \| `null`

#### Returns

`this`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [menu.svelte.ts:99](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L99)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

***

### setIcon()

> **setIcon**(`icon`): `this`

Defined in: [menu.svelte.ts:88](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L88)

#### Parameters

##### icon

`string` \| `null`

ID of the icon, can use any icon loaded with [addIcon](/developers/api-reference/functions/addicon/)
  or from the built-in lucide library.

#### Returns

`this`

#### See

The Obsidian icon library includes the [Lucide icon library](https://lucide.dev/), any icon name from their site will work here.

***

### setIsLabel()

> **setIsLabel**(`isLabel`): `this`

Defined in: [menu.svelte.ts:109](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L109)

#### Parameters

##### isLabel

`boolean`

#### Returns

`this`

***

### setSection()

> **setSection**(`section`): `this`

Defined in: [menu.svelte.ts:130](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L130)

Sets the section this menu item should belong in. To find the section IDs
of an existing menu, inspect the DOM elements to see their `data-section`
attribute.

#### Parameters

##### section

`string`

#### Returns

`this`

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [menu.svelte.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L78)

#### Parameters

##### title

`string` \| `DocumentFragment`

#### Returns

`this`

***

### setWarning()

> **setWarning**(`warning?`): `this`

Defined in: [menu.svelte.ts:104](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L104)

#### Parameters

##### warning?

`boolean` = `true`

#### Returns

`this`

***

### create()

> `static` **create**(`menu`): `MenuItem`

Defined in: [menu.svelte.ts:66](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L66)

#### Parameters

##### menu

[`Menu`](/developers/api-reference/class-docs/menu/)

#### Returns

`MenuItem`
