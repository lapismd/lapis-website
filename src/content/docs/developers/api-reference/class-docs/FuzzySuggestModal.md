---
title: "FuzzySuggestModal<T>"
description: "Source-generated public API reference for FuzzySuggestModal<T>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:472](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L472)

## Extends

- [`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/)\<`FuzzyMatch`\<`T`\>\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new FuzzySuggestModal**\<`T`\>(`app`): `FuzzySuggestModal`\<`T`\>

Defined in: [suggest.ts:310](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L310)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`FuzzySuggestModal`\<`T`\>

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`constructor`](/developers/api-reference/class-docs/suggestmodal/#constructor)

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [settings.svelte.ts:531](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L531)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`app`](/developers/api-reference/class-docs/suggestmodal/#app)

***

### containerEl

> `readonly` **containerEl**: `HTMLElement` \| `undefined`

Defined in: [settings.svelte.ts:529](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L529)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`containerEl`](/developers/api-reference/class-docs/suggestmodal/#containerel)

***

### emptyStateText

> **emptyStateText**: `string` = `"No results found"`

Defined in: [suggest.ts:300](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L300)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`emptyStateText`](/developers/api-reference/class-docs/suggestmodal/#emptystatetext)

***

### inputEl

> **inputEl**: `HTMLInputElement`

Defined in: [suggest.ts:301](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L301)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`inputEl`](/developers/api-reference/class-docs/suggestmodal/#inputel)

***

### instructionContainerEl

> **instructionContainerEl**: `HTMLElement`

Defined in: [suggest.ts:302](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L302)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`instructionContainerEl`](/developers/api-reference/class-docs/suggestmodal/#instructioncontainerel)

***

### limit

> **limit**: `number` = `100`

Defined in: [suggest.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L299)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`limit`](/developers/api-reference/class-docs/suggestmodal/#limit)

***

### resultContainerEl

> **resultContainerEl**: `HTMLElement`

Defined in: [suggest.ts:303](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L303)

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`resultContainerEl`](/developers/api-reference/class-docs/suggestmodal/#resultcontainerel)

## Accessors

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L581)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`contentEl`](/developers/api-reference/class-docs/suggestmodal/#contentel)

***

### modalEl

#### Get Signature

> **get** **modalEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:585](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L585)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`modalEl`](/developers/api-reference/class-docs/suggestmodal/#modalel)

***

### titleEl

#### Get Signature

> **get** **titleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:577](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L577)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`titleEl`](/developers/api-reference/class-docs/suggestmodal/#titleel)

## Methods

### close()

> **close**(): `void`

Defined in: [settings.svelte.ts:562](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L562)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`close`](/developers/api-reference/class-docs/suggestmodal/#close)

***

### getItems()

> `abstract` **getItems**(): `T`[]

Defined in: [suggest.ts:495](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L495)

#### Returns

`T`[]

***

### getItemText()

> `abstract` **getItemText**(`item`): `string`

Defined in: [suggest.ts:496](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L496)

#### Parameters

##### item

`T`

#### Returns

`string`

***

### getSuggestions()

> **getSuggestions**(`query`): `FuzzyMatch`\<`T`\>[]

Defined in: [suggest.ts:473](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L473)

#### Parameters

##### query

`string`

#### Returns

`FuzzyMatch`\<`T`\>[]

#### Overrides

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`getSuggestions`](/developers/api-reference/class-docs/suggestmodal/#getsuggestions)

***

### onChooseItem()

> `abstract` **onChooseItem**(`item`, `evt`): `void`

Defined in: [suggest.ts:497](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L497)

#### Parameters

##### item

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

***

### onChooseSuggestion()

> **onChooseSuggestion**(`item`, `evt`): `void`

Defined in: [suggest.ts:488](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L488)

#### Parameters

##### item

`FuzzyMatch`\<`T`\>

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Overrides

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`onChooseSuggestion`](/developers/api-reference/class-docs/suggestmodal/#onchoosesuggestion)

***

### onClose()

> **onClose**(): `void`

Defined in: [settings.svelte.ts:555](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L555)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`onClose`](/developers/api-reference/class-docs/suggestmodal/#onclose)

***

### onNoSuggestion()

> **onNoSuggestion**(): `void`

Defined in: [suggest.ts:341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L341)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`onNoSuggestion`](/developers/api-reference/class-docs/suggestmodal/#onnosuggestion)

***

### onOpen()

> **onOpen**(): `void`

Defined in: [settings.svelte.ts:553](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L553)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`onOpen`](/developers/api-reference/class-docs/suggestmodal/#onopen)

***

### onOpenChange()

> **onOpenChange**(`open`): `void`

Defined in: [settings.svelte.ts:549](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L549)

#### Parameters

##### open

`boolean`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`onOpenChange`](/developers/api-reference/class-docs/suggestmodal/#onopenchange)

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:379](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L379)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`open`](/developers/api-reference/class-docs/suggestmodal/#open)

***

### renderSuggestion()

> **renderSuggestion**(`item`, `el`): `void`

Defined in: [suggest.ts:484](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L484)

Render the suggestion item into DOM.

#### Parameters

##### item

`FuzzyMatch`\<`T`\>

##### el

`HTMLElement`

#### Returns

`void`

#### Overrides

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`renderSuggestion`](/developers/api-reference/class-docs/suggestmodal/#rendersuggestion)

***

### selectActiveSuggestion()

> **selectActiveSuggestion**(`evt`): `void`

Defined in: [suggest.ts:390](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L390)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`selectActiveSuggestion`](/developers/api-reference/class-docs/suggestmodal/#selectactivesuggestion)

***

### selectSuggestion()

> **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:385](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L385)

Called when the user makes a selection.

#### Parameters

##### value

`FuzzyMatch`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`selectSuggestion`](/developers/api-reference/class-docs/suggestmodal/#selectsuggestion)

***

### setContent()

> **setContent**(`content`): `this`

Defined in: [settings.svelte.ts:572](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L572)

#### Parameters

##### content

`string` \| `DocumentFragment`

#### Returns

`this`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`setContent`](/developers/api-reference/class-docs/suggestmodal/#setcontent)

***

### setInstructions()

> **setInstructions**(`instructions`): `void`

Defined in: [suggest.ts:336](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L336)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`setInstructions`](/developers/api-reference/class-docs/suggestmodal/#setinstructions)

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `void`

Defined in: [suggest.ts:332](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L332)

#### Parameters

##### placeholder

`string`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`setPlaceholder`](/developers/api-reference/class-docs/suggestmodal/#setplaceholder)

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [settings.svelte.ts:567](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L567)

#### Parameters

##### title

`string` \| `DocumentFragment`

#### Returns

`this`

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`setTitle`](/developers/api-reference/class-docs/suggestmodal/#settitle)

***

### updateSuggestions()

> **updateSuggestions**(): `Promise`\<`void`\>

Defined in: [suggest.ts:349](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L349)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SuggestModal`](/developers/api-reference/class-docs/suggestmodal/).[`updateSuggestions`](/developers/api-reference/class-docs/suggestmodal/#updatesuggestions)
