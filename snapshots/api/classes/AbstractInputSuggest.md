[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / AbstractInputSuggest

# Abstract Class: AbstractInputSuggest\<T\>

Defined in: [suggest.ts:61](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L61)

Base class for adding a type-ahead popover.

## Extends

- [`PopoverSuggest`](PopoverSuggest.md)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new AbstractInputSuggest**\<`T`\>(`app`, `textInputEl`): `AbstractInputSuggest`\<`T`\>

Defined in: [suggest.ts:75](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L75)

#### Parameters

##### app

[`App`](App.md)

##### textInputEl

`HTMLDivElement` \| `HTMLInputElement`

#### Returns

`AbstractInputSuggest`\<`T`\>

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`constructor`](PopoverSuggest.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L39)

#### Inherited from

[`PopoverSuggest`](PopoverSuggest.md).[`app`](PopoverSuggest.md#app)

***

### emptyStateEl

> **emptyStateEl**: `HTMLElement`

Defined in: [suggest.ts:65](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L65)

***

### instructionContainerEl

> **instructionContainerEl**: `HTMLElement`

Defined in: [suggest.ts:64](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L64)

***

### limit

> **limit**: `number` = `100`

Defined in: [suggest.ts:62](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L62)

***

### scope?

> `readonly` `optional` **scope?**: [`Scope`](Scope.md)

Defined in: [suggest.ts:40](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L40)

#### Inherited from

[`PopoverSuggest`](PopoverSuggest.md).[`scope`](PopoverSuggest.md#scope)

***

### suggestEl

> **suggestEl**: `HTMLElement`

Defined in: [suggest.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L63)

***

### textInputEl

> `readonly` **textInputEl**: `HTMLDivElement` \| `HTMLInputElement`

Defined in: [suggest.ts:77](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L77)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:120](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L120)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`close`](PopoverSuggest.md#close)

***

### getValue()

> **getValue**(): `string`

Defined in: [suggest.ts:97](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L97)

#### Returns

`string`

***

### onSelect()

> **onSelect**(`callback`): `this`

Defined in: [suggest.ts:148](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L148)

#### Parameters

##### callback

(`value`, `evt`) => `any`

#### Returns

`this`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L105)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`open`](PopoverSuggest.md#open)

***

### renderSuggestion()

> `abstract` **renderSuggestion**(`value`, `el`): `void`

Defined in: [suggest.ts:53](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L53)

#### Parameters

##### value

`T`

##### el

`HTMLElement`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`PopoverSuggest`](PopoverSuggest.md).[`renderSuggestion`](PopoverSuggest.md#rendersuggestion)

***

### selectSuggestion()

> **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:138](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L138)

#### Parameters

##### value

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherit Doc

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`selectSuggestion`](PopoverSuggest.md#selectsuggestion)

***

### setInstructions()

> **setInstructions**(`instructions`): `this`

Defined in: [suggest.ts:143](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L143)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `void`

Defined in: [suggest.ts:89](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L89)

#### Parameters

##### value

`string`

#### Returns

`void`
