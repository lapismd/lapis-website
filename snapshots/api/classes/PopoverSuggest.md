[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / PopoverSuggest

# Abstract Class: PopoverSuggest\<T\>

Defined in: [suggest.ts:34](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L34)

Base class for adding a type-ahead popover.

## Extended by

- [`AbstractInputSuggest`](AbstractInputSuggest.md)
- [`EditorSuggest`](EditorSuggest.md)

## Type Parameters

### T

`T`

## Implements

- `ISuggestOwner`\<`T`\>
- `CloseableComponent`

## Constructors

### Constructor

> **new PopoverSuggest**\<`T`\>(`app`, `scope?`): `PopoverSuggest`\<`T`\>

Defined in: [suggest.ts:38](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L38)

#### Parameters

##### app

[`App`](App.md)

##### scope?

[`Scope`](Scope.md)

#### Returns

`PopoverSuggest`\<`T`\>

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L39)

***

### scope?

> `readonly` `optional` **scope?**: [`Scope`](Scope.md)

Defined in: [suggest.ts:40](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L40)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:47](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L47)

#### Returns

`void`

#### Implementation of

`CloseableComponent.close`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:44](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L44)

#### Returns

`void`

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

#### Implementation of

`ISuggestOwner.renderSuggestion`

***

### selectSuggestion()

> `abstract` **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:58](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L58)

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
