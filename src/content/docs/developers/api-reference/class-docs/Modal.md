---
title: "Modal"
description: "Source-generated public API reference for Modal."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [settings.svelte.ts:527](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L527)

## Extended by

- [`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/)

## Constructors

### Constructor

> **new Modal**(`app`): `Modal`

Defined in: [settings.svelte.ts:531](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L531)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`Modal`

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [settings.svelte.ts:531](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L531)

***

### containerEl

> `readonly` **containerEl**: `HTMLElement` \| `undefined`

Defined in: [settings.svelte.ts:529](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L529)

## Accessors

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L581)

##### Returns

`HTMLElement`

***

### modalEl

#### Get Signature

> **get** **modalEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:585](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L585)

##### Returns

`HTMLElement`

***

### titleEl

#### Get Signature

> **get** **titleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:577](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L577)

##### Returns

`HTMLElement`

## Methods

### close()

> **close**(): `void`

Defined in: [settings.svelte.ts:562](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L562)

#### Returns

`void`

***

### onClose()

> **onClose**(): `void`

Defined in: [settings.svelte.ts:555](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L555)

#### Returns

`void`

***

### onOpen()

> **onOpen**(): `void`

Defined in: [settings.svelte.ts:553](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L553)

#### Returns

`void`

***

### onOpenChange()

> **onOpenChange**(`open`): `void`

Defined in: [settings.svelte.ts:549](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L549)

#### Parameters

##### open

`boolean`

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [settings.svelte.ts:557](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L557)

#### Returns

`void`

***

### setContent()

> **setContent**(`content`): `this`

Defined in: [settings.svelte.ts:572](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L572)

#### Parameters

##### content

`string` \| `DocumentFragment`

#### Returns

`this`

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [settings.svelte.ts:567](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L567)

#### Parameters

##### title

`string` \| `DocumentFragment`

#### Returns

`this`
