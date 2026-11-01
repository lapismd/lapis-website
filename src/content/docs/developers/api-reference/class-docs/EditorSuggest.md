---
title: "EditorSuggest<T>"
description: "Source-generated public API reference for EditorSuggest<T>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:540](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L540)

Base class for adding a type-ahead popover.

## Extends

- [`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new EditorSuggest**\<`T`\>(`app`): `EditorSuggest`\<`T`\>

Defined in: [suggest.ts:559](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L559)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`EditorSuggest`\<`T`\>

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`constructor`](/developers/api-reference/class-docs/popoversuggest/#constructor)

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [suggest.ts:39](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L39)

#### Inherited from

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`app`](/developers/api-reference/class-docs/popoversuggest/#app)

***

### context

> **context**: [`EditorSuggestContext`](/developers/api-reference/interfaces/editorsuggestcontext/) \| `null` = `null`

Defined in: [suggest.ts:547](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L547)

Current suggestion context, containing the result of `onTrigger`. This will
be null any time the EditorSuggest is not supposed to run.

***

### limit

> **limit**: `number` = `-1`

Defined in: [suggest.ts:557](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L557)

Override this to use a different limit for suggestion items

***

### scope

> **scope**: [`Scope`](/developers/api-reference/class-docs/scope/)

Defined in: [suggest.ts:549](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L549)

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`scope`](/developers/api-reference/class-docs/popoversuggest/#scope)

***

### suggestEl

> **suggestEl**: `HTMLElement`

Defined in: [suggest.ts:550](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L550)

## Methods

### close()

> **close**(): `void`

Defined in: [suggest.ts:566](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L566)

#### Returns

`void`

#### Overrides

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`close`](/developers/api-reference/class-docs/popoversuggest/#close)

***

### getSuggestions()

> `abstract` **getSuggestions**(`context`): `T`[] \| `Promise`\<`T`[]\>

Defined in: [suggest.ts:600](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L600)

Generate suggestion items based on this context. Can be async, but
preferably sync. When generating async suggestions, you should pass the
context along.

#### Parameters

##### context

[`EditorSuggestContext`](/developers/api-reference/interfaces/editorsuggestcontext/)

#### Returns

`T`[] \| `Promise`\<`T`[]\>

***

### onTrigger()

> `abstract` **onTrigger**(`cursor`, `editor`, `file`): [`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/) \| `null`

Defined in: [suggest.ts:588](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L588)

Based on the editor line and cursor position, determine if this
EditorSuggest should be triggered at this moment. Typically, you would run
a regular expression on the current line text before the cursor. Return
null to indicate that this editor suggest is not supposed to be triggered.

Please be mindful of performance when implementing this function, as it
will be triggered very often (on each keypress). Keep it simple, and return
null as early as possible if you determine that it is not the right time.

#### Parameters

##### cursor

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### editor

[`Editor`](/developers/api-reference/class-docs/editor/)

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

#### Returns

[`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/) \| `null`

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:571](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L571)

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

#### Inherited from

[`PopoverSuggest`](/developers/api-reference/class-docs/popoversuggest/).[`selectSuggestion`](/developers/api-reference/class-docs/popoversuggest/#selectsuggestion)

***

### setInstructions()

> **setInstructions**(`instructions`): `void`

Defined in: [suggest.ts:564](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L564)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`void`
