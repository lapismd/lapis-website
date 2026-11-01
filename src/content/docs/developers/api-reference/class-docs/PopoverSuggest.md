---
title: "PopoverSuggest<T>"
description: "Source-generated public API reference for PopoverSuggest<T>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:34](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L34)

Base class for adding a type-ahead popover.

## Extended by

- [`AbstractInputSuggest`](/developers/api-reference/class-docs/abstractinputsuggest/)
- [`EditorSuggest`](/developers/api-reference/class-docs/editorsuggest/)

## Type Parameters

### T

`T`

## Implements

- `ISuggestOwner`\<`T`\>
- `CloseableComponent`

## Constructors

### Constructor

> **new PopoverSuggest**\<`T`\>(`app`, `scope?`): `PopoverSuggest`\<`T`\>

Defined in: [suggest.ts:38](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L38)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

##### scope?

[`Scope`](/developers/api-reference/class-docs/scope/)

#### Returns

`PopoverSuggest`\<`T`\>

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L39)

***

### scope?

> `readonly` `optional` **scope?**: [`Scope`](/developers/api-reference/class-docs/scope/)

Defined in: [suggest.ts:40](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L40)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:47](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L47)

#### Returns

`void`

#### Implementation of

`CloseableComponent.close`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:44](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L44)

#### Returns

`void`

***

### renderSuggestion()

> `abstract` **renderSuggestion**(`value`, `el`): `void`

Defined in: [suggest.ts:53](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L53)

#### Parameters

##### value

`T`

##### el

`HTMLElement`

#### Returns

`void`

#### Inherit Doc

#### Implementation of

`ISuggestOwner.renderSuggestion`

***

### selectSuggestion()

> `abstract` **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:58](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L58)

#### Parameters

##### value

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherit Doc

#### Implementation of

`ISuggestOwner.selectSuggestion`
