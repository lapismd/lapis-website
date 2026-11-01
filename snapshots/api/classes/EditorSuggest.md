[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / EditorSuggest

# Abstract Class: EditorSuggest\<T\>

Defined in: [suggest.ts:540](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L540)

Base class for adding a type-ahead popover.

## Extends

- [`PopoverSuggest`](PopoverSuggest.md)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new EditorSuggest**\<`T`\>(`app`): `EditorSuggest`\<`T`\>

Defined in: [suggest.ts:559](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L559)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`EditorSuggest`\<`T`\>

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`constructor`](PopoverSuggest.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L39)

#### Inherited from

[`PopoverSuggest`](PopoverSuggest.md).[`app`](PopoverSuggest.md#app)

***

### context

> **context**: [`EditorSuggestContext`](../interfaces/EditorSuggestContext.md) \| `null` = `null`

Defined in: [suggest.ts:547](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L547)

Current suggestion context, containing the result of `onTrigger`. This will
be null any time the EditorSuggest is not supposed to run.

***

### limit

> **limit**: `number` = `-1`

Defined in: [suggest.ts:557](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L557)

Override this to use a different limit for suggestion items

***

### scope

> **scope**: [`Scope`](Scope.md)

Defined in: [suggest.ts:549](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L549)

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`scope`](PopoverSuggest.md#scope)

***

### suggestEl

> **suggestEl**: `HTMLElement`

Defined in: [suggest.ts:550](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L550)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:566](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L566)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](PopoverSuggest.md).[`close`](PopoverSuggest.md#close)

***

### getSuggestions()

> `abstract` **getSuggestions**(`context`): `T`[] \| `Promise`\<`T`[]\>

Defined in: [suggest.ts:600](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L600)

Generate suggestion items based on this context. Can be async, but
preferably sync. When generating async suggestions, you should pass the
context along.

#### Parameters

##### context

[`EditorSuggestContext`](../interfaces/EditorSuggestContext.md)

#### Returns

`T`[] \| `Promise`\<`T`[]\>

***

### onTrigger()

> `abstract` **onTrigger**(`cursor`, `editor`, `file`): [`EditorSuggestTriggerInfo`](../interfaces/EditorSuggestTriggerInfo.md) \| `null`

Defined in: [suggest.ts:588](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L588)

Based on the editor line and cursor position, determine if this
EditorSuggest should be triggered at this moment. Typically, you would run
a regular expression on the current line text before the cursor. Return
null to indicate that this editor suggest is not supposed to be triggered.

Please be mindful of performance when implementing this function, as it
will be triggered very often (on each keypress). Keep it simple, and return
null as early as possible if you determine that it is not the right time.

#### Parameters

##### cursor

[`EditorPosition`](../type-aliases/EditorPosition.md)

##### editor

[`Editor`](Editor.md)

##### file

[`TFile`](TFile.md) \| `null`

#### Returns

[`EditorSuggestTriggerInfo`](../interfaces/EditorSuggestTriggerInfo.md) \| `null`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:571](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L571)

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

#### Inherited from

[`PopoverSuggest`](PopoverSuggest.md).[`selectSuggestion`](PopoverSuggest.md#selectsuggestion)

***

### setInstructions()

> **setInstructions**(`instructions`): `void`

Defined in: [suggest.ts:564](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L564)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`void`
