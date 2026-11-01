[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / FuzzySuggestModal

# Abstract Class: FuzzySuggestModal\<T\>

Defined in: [suggest.ts:472](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L472)

## Extends

- [`SuggestModal`](SuggestModal.md)\<`FuzzyMatch`\<`T`\>\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new FuzzySuggestModal**\<`T`\>(`app`): `FuzzySuggestModal`\<`T`\>

Defined in: [suggest.ts:310](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L310)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`FuzzySuggestModal`\<`T`\>

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`constructor`](SuggestModal.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [settings.svelte.ts:531](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L531)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`app`](SuggestModal.md#app)

***

### containerEl

> `readonly` **containerEl**: `HTMLElement` \| `undefined`

Defined in: [settings.svelte.ts:529](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L529)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`containerEl`](SuggestModal.md#containerel)

***

### emptyStateText

> **emptyStateText**: `string` = `"No results found"`

Defined in: [suggest.ts:300](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L300)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`emptyStateText`](SuggestModal.md#emptystatetext)

***

### inputEl

> **inputEl**: `HTMLInputElement`

Defined in: [suggest.ts:301](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L301)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`inputEl`](SuggestModal.md#inputel)

***

### instructionContainerEl

> **instructionContainerEl**: `HTMLElement`

Defined in: [suggest.ts:302](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L302)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`instructionContainerEl`](SuggestModal.md#instructioncontainerel)

***

### limit

> **limit**: `number` = `100`

Defined in: [suggest.ts:299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L299)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`limit`](SuggestModal.md#limit)

***

### resultContainerEl

> **resultContainerEl**: `HTMLElement`

Defined in: [suggest.ts:303](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L303)

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`resultContainerEl`](SuggestModal.md#resultcontainerel)

## Accessors

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L581)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`contentEl`](SuggestModal.md#contentel)

***

### modalEl

#### Get Signature

> **get** **modalEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:585](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L585)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`modalEl`](SuggestModal.md#modalel)

***

### titleEl

#### Get Signature

> **get** **titleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:577](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L577)

##### Returns

`HTMLElement`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`titleEl`](SuggestModal.md#titleel)

## Methods

### close()

> **close**(): `void`

Defined in: [settings.svelte.ts:562](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L562)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`close`](SuggestModal.md#close)

***

### getItems()

> `abstract` **getItems**(): `T`[]

Defined in: [suggest.ts:495](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L495)

#### Returns

`T`[]

***

### getItemText()

> `abstract` **getItemText**(`item`): `string`

Defined in: [suggest.ts:496](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L496)

#### Parameters

##### item

`T`

#### Returns

`string`

***

### getSuggestions()

> **getSuggestions**(`query`): `FuzzyMatch`\<`T`\>[]

Defined in: [suggest.ts:473](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L473)

#### Parameters

##### query

`string`

#### Returns

`FuzzyMatch`\<`T`\>[]

#### Overrides

[`SuggestModal`](SuggestModal.md).[`getSuggestions`](SuggestModal.md#getsuggestions)

***

### onChooseItem()

> `abstract` **onChooseItem**(`item`, `evt`): `void`

Defined in: [suggest.ts:497](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L497)

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

Defined in: [suggest.ts:488](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L488)

#### Parameters

##### item

`FuzzyMatch`\<`T`\>

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Overrides

[`SuggestModal`](SuggestModal.md).[`onChooseSuggestion`](SuggestModal.md#onchoosesuggestion)

***

### onClose()

> **onClose**(): `void`

Defined in: [settings.svelte.ts:555](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L555)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`onClose`](SuggestModal.md#onclose)

***

### onNoSuggestion()

> **onNoSuggestion**(): `void`

Defined in: [suggest.ts:341](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L341)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`onNoSuggestion`](SuggestModal.md#onnosuggestion)

***

### onOpen()

> **onOpen**(): `void`

Defined in: [settings.svelte.ts:553](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L553)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`onOpen`](SuggestModal.md#onopen)

***

### onOpenChange()

> **onOpenChange**(`open`): `void`

Defined in: [settings.svelte.ts:549](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L549)

#### Parameters

##### open

`boolean`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`onOpenChange`](SuggestModal.md#onopenchange)

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:379](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L379)

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`open`](SuggestModal.md#open)

***

### renderSuggestion()

> **renderSuggestion**(`item`, `el`): `void`

Defined in: [suggest.ts:484](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L484)

Render the suggestion item into DOM.

#### Parameters

##### item

`FuzzyMatch`\<`T`\>

##### el

`HTMLElement`

#### Returns

`void`

#### Overrides

[`SuggestModal`](SuggestModal.md).[`renderSuggestion`](SuggestModal.md#rendersuggestion)

***

### selectActiveSuggestion()

> **selectActiveSuggestion**(`evt`): `void`

Defined in: [suggest.ts:390](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L390)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`selectActiveSuggestion`](SuggestModal.md#selectactivesuggestion)

***

### selectSuggestion()

> **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:385](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L385)

Called when the user makes a selection.

#### Parameters

##### value

`FuzzyMatch`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`selectSuggestion`](SuggestModal.md#selectsuggestion)

***

### setContent()

> **setContent**(`content`): `this`

Defined in: [settings.svelte.ts:572](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L572)

#### Parameters

##### content

`string` \| `DocumentFragment`

#### Returns

`this`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`setContent`](SuggestModal.md#setcontent)

***

### setInstructions()

> **setInstructions**(`instructions`): `void`

Defined in: [suggest.ts:336](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L336)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`setInstructions`](SuggestModal.md#setinstructions)

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `void`

Defined in: [suggest.ts:332](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L332)

#### Parameters

##### placeholder

`string`

#### Returns

`void`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`setPlaceholder`](SuggestModal.md#setplaceholder)

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [settings.svelte.ts:567](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L567)

#### Parameters

##### title

`string` \| `DocumentFragment`

#### Returns

`this`

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`setTitle`](SuggestModal.md#settitle)

***

### updateSuggestions()

> **updateSuggestions**(): `Promise`\<`void`\>

Defined in: [suggest.ts:349](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L349)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SuggestModal`](SuggestModal.md).[`updateSuggestions`](SuggestModal.md#updatesuggestions)
