---
title: "AbstractInputSuggest<T>"
description: "Source-generated public API reference for AbstractInputSuggest<T>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:61](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L61)

Base class for adding a type-ahead popover.

## Extends

- [`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new AbstractInputSuggest**\<`T`\>(`app`, `textInputEl`): `AbstractInputSuggest`\<`T`\>

Defined in: [suggest.ts:75](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L75)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

##### textInputEl

`HTMLDivElement` \| `HTMLInputElement`

#### Returns

`AbstractInputSuggest`\<`T`\>

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`constructor`](/developers/api-reference/class-docs/popoversuggest/#constructor)

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L39)

#### Inherited from

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`app`](/developers/api-reference/class-docs/popoversuggest/#app)

***

### emptyStateEl

> **emptyStateEl**: `HTMLElement`

Defined in: [suggest.ts:65](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L65)

***

### instructionContainerEl

> **instructionContainerEl**: `HTMLElement`

Defined in: [suggest.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L64)

***

### limit

> **limit**: `number` = `100`

Defined in: [suggest.ts:62](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L62)

***

### scope?

> `readonly` `optional` **scope?**: [`Scope`](/developers/api-reference/class-docs/scope/)

Defined in: [suggest.ts:40](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L40)

#### Inherited from

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`scope`](/developers/api-reference/class-docs/popoversuggest/#scope)

***

### suggestEl

> **suggestEl**: `HTMLElement`

Defined in: [suggest.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L63)

***

### textInputEl

> `readonly` **textInputEl**: `HTMLDivElement` \| `HTMLInputElement`

Defined in: [suggest.ts:77](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L77)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:120](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L120)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`close`](/developers/api-reference/class-docs/popoversuggest/#close)

***

### getValue()

> **getValue**(): `string`

Defined in: [suggest.ts:97](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L97)

#### Returns

`string`

***

### onSelect()

> **onSelect**(`callback`): `this`

Defined in: [suggest.ts:148](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L148)

#### Parameters

##### callback

(`value`, `evt`) => `any`

#### Returns

`this`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L105)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`open`](/developers/api-reference/class-docs/popoversuggest/#open)

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

#### Inherited from

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`renderSuggestion`](/developers/api-reference/class-docs/popoversuggest/#rendersuggestion)

***

### selectSuggestion()

> **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:138](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L138)

#### Parameters

##### value

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherit Doc

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`selectSuggestion`](/developers/api-reference/class-docs/popoversuggest/#selectsuggestion)

***

### setInstructions()

> **setInstructions**(`instructions`): `this`

Defined in: [suggest.ts:143](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L143)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `void`

Defined in: [suggest.ts:89](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L89)

#### Parameters

##### value

`string`

#### Returns

`void`
