---
title: "Menu"
description: "Source-generated public API reference for Menu."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [menu.svelte.ts:171](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L171)

## Constructors

### Constructor

> **new Menu**(): `Menu`

Defined in: [menu.svelte.ts:252](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L252)

#### Returns

`Menu`

## Properties

### component

> **component**: `MountComponent`\<`any`\> \| `null` = `null`

Defined in: [menu.svelte.ts:172](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L172)

***

### filter

> **filter**: `string`

Defined in: [menu.svelte.ts:174](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L174)

***

### open

> **open**: `boolean`

Defined in: [menu.svelte.ts:173](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L173)

## Accessors

### filteredItems

#### Get Signature

> **get** **filteredItems**(): `Record`\<`string`, (`"separator"` \| [`MenuItem`](/developers/api-reference/class-docs/menuitem/) \| `Menu`)[]\>

Defined in: [menu.svelte.ts:203](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L203)

##### Returns

`Record`\<`string`, (`"separator"` \| [`MenuItem`](/developers/api-reference/class-docs/menuitem/) \| `Menu`)[]\>

***

### items

#### Get Signature

> **get** **items**(): `Record`\<`string`, `MenuEntry`[]\>

Defined in: [menu.svelte.ts:195](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L195)

##### Returns

`Record`\<`string`, `MenuEntry`[]\>

***

### noIcon

#### Get Signature

> **get** **noIcon**(): `boolean`

Defined in: [menu.svelte.ts:187](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L187)

##### Returns

`boolean`

***

### renderedItems

#### Get Signature

> **get** **renderedItems**(): `Record`\<`string`, (`"separator"` \| [`MenuItem`](/developers/api-reference/class-docs/menuitem/) \| `Menu`)[]\>

Defined in: [menu.svelte.ts:199](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L199)

##### Returns

`Record`\<`string`, (`"separator"` \| [`MenuItem`](/developers/api-reference/class-docs/menuitem/) \| `Menu`)[]\>

***

### section

#### Get Signature

> **get** **section**(): `string`

Defined in: [menu.svelte.ts:227](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L227)

##### Returns

`string`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [menu.svelte.ts:223](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L223)

##### Returns

`string`

***

### useNativeMenu

#### Get Signature

> **get** **useNativeMenu**(): `boolean`

Defined in: [menu.svelte.ts:191](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L191)

##### Returns

`boolean`

## Methods

### addGroups()

> **addGroups**(...`groups`): `this`

Defined in: [menu.svelte.ts:312](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L312)

#### Parameters

##### groups

...(`string` \| `string`[])[]

#### Returns

`this`

***

### addItem()

> **addItem**(`cb`): `this`

Defined in: [menu.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L294)

Adds a menu item. Only works when menu is not shown yet.

#### Parameters

##### cb

(`item`) => `any`

#### Returns

`this`

***

### addMenu()

> **addMenu**(`cb`): `this`

Defined in: [menu.svelte.ts:303](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L303)

#### Parameters

##### cb

(`item`) => `any`

#### Returns

`this`

***

### addSeparator()

> **addSeparator**(`section?`): `this`

Defined in: [menu.svelte.ts:322](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L322)

Adds a separator. Only works when menu is not shown yet.

#### Parameters

##### section?

`string`

#### Returns

`this`

***

### clear()

> **clear**(): `this`

Defined in: [menu.svelte.ts:246](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L246)

#### Returns

`this`

***

### close()

> **close**(): `void`

Defined in: [menu.svelte.ts:335](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L335)

#### Returns

`void`

***

### dropdown()

> **dropdown**(): `this`

Defined in: [menu.svelte.ts:236](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L236)

#### Returns

`this`

***

### forEvent()

> **forEvent**(`evt`): `this`

Defined in: [menu.svelte.ts:370](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L370)

#### Parameters

##### evt

`Event`

#### Returns

`this`

***

### hide()

> **hide**(): `this`

Defined in: [menu.svelte.ts:330](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L330)

#### Returns

`this`

***

### onHide()

> **onHide**(`callback`): `void`

Defined in: [menu.svelte.ts:340](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L340)

#### Parameters

##### callback

() => `any`

#### Returns

`void`

***

### popover()

> **popover**(): `this`

Defined in: [menu.svelte.ts:231](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L231)

#### Returns

`this`

***

### search()

> **search**(`value`): `this`

Defined in: [menu.svelte.ts:241](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L241)

#### Parameters

##### value

`string`

#### Returns

`this`

***

### setNoIcon()

> **setNoIcon**(): `this`

Defined in: [menu.svelte.ts:255](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L255)

#### Returns

`this`

***

### setOpen()

> **setOpen**(`open`): `this`

Defined in: [menu.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L280)

#### Parameters

##### open

`boolean`

#### Returns

`this`

***

### setSection()

> **setSection**(`section`): `this`

Defined in: [menu.svelte.ts:265](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L265)

#### Parameters

##### section

`string`

#### Returns

`this`

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [menu.svelte.ts:260](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L260)

#### Parameters

##### title

`string`

#### Returns

`this`

***

### setUseNativeMenu()

> **setUseNativeMenu**(`useNativeMenu`): `this`

Defined in: [menu.svelte.ts:275](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L275)

Force this menu to use native or DOM. (Only works on the desktop app)

#### Parameters

##### useNativeMenu

`boolean`

#### Returns

`this`

***

### showAtElement()

> **showAtElement**(`target?`): `this`

Defined in: [menu.svelte.ts:344](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L344)

#### Parameters

##### target?

`HTMLElement` \| `null`

#### Returns

`this`

***

### showAtMouseEvent()

> **showAtMouseEvent**(`evt`): `this`

Defined in: [menu.svelte.ts:365](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L365)

#### Parameters

##### evt

`Event`

#### Returns

`this`

***

### showAtPosition()

> **showAtPosition**(`position`, `doc?`): `this`

Defined in: [menu.svelte.ts:374](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/menu.svelte.ts#L374)

#### Parameters

##### position

`MenuPositionDef`

##### doc?

`Document`

#### Returns

`this`
