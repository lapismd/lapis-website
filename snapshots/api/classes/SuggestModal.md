[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / SuggestModal

# Abstract Class: SuggestModal\<T\>

Defined in: [suggest.ts:295](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L295)

## Extends

- [`Modal`](Modal.md)

## Extended by

- [`FuzzySuggestModal`](FuzzySuggestModal.md)

## Type Parameters

### T

`T`

## Implements

- `ISuggestOwner`\<`T`\>

## Constructors

### Constructor

> **new SuggestModal**\<`T`\>(`app`): `SuggestModal`\<`T`\>

Defined in: [suggest.ts:310](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L310)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`SuggestModal`\<`T`\>

#### Overrides

[`Modal`](Modal.md).[`constructor`](Modal.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [settings.svelte.ts:531](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L531)

#### Inherited from

[`Modal`](Modal.md).[`app`](Modal.md#app)

***

### containerEl

> `readonly` **containerEl**: `HTMLElement` \| `undefined`

Defined in: [settings.svelte.ts:529](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L529)

#### Inherited from

[`Modal`](Modal.md).[`containerEl`](Modal.md#containerel)

***

### emptyStateText

> **emptyStateText**: `string` = `"No results found"`

Defined in: [suggest.ts:300](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L300)

***

### inputEl

> **inputEl**: `HTMLInputElement`

Defined in: [suggest.ts:301](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L301)

***

### instructionContainerEl

> **instructionContainerEl**: `HTMLElement`

Defined in: [suggest.ts:302](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L302)

***

### limit

> **limit**: `number` = `100`

Defined in: [suggest.ts:299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L299)

***

### resultContainerEl

> **resultContainerEl**: `HTMLElement`

Defined in: [suggest.ts:303](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L303)

## Accessors

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L581)

##### Returns

`HTMLElement`

#### Inherited from

[`Modal`](Modal.md).[`contentEl`](Modal.md#contentel)

***

### modalEl

#### Get Signature

> **get** **modalEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:585](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L585)

##### Returns

`HTMLElement`

#### Inherited from

[`Modal`](Modal.md).[`modalEl`](Modal.md#modalel)

***

### titleEl

#### Get Signature

> **get** **titleEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:577](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L577)

##### Returns

`HTMLElement`

#### Inherited from

[`Modal`](Modal.md).[`titleEl`](Modal.md#titleel)

## Methods

### close()

> **close**(): `void`

Defined in: [settings.svelte.ts:562](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L562)

#### Returns

`void`

#### Inherited from

[`Modal`](Modal.md).[`close`](Modal.md#close)

***

### getSuggestions()

> `abstract` **getSuggestions**(`query`): `T`[] \| `Promise`\<`T`[]\>

Defined in: [suggest.ts:467](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L467)

#### Parameters

##### query

`string`

#### Returns

`T`[] \| `Promise`\<`T`[]\>

***

### onChooseSuggestion()

> `abstract` **onChooseSuggestion**(`item`, `evt`): `void`

Defined in: [suggest.ts:469](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L469)

#### Parameters

##### item

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

***

### onClose()

> **onClose**(): `void`

Defined in: [settings.svelte.ts:555](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L555)

#### Returns

`void`

#### Inherited from

[`Modal`](Modal.md).[`onClose`](Modal.md#onclose)

***

### onNoSuggestion()

> **onNoSuggestion**(): `void`

Defined in: [suggest.ts:341](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L341)

#### Returns

`void`

***

### onOpen()

> **onOpen**(): `void`

Defined in: [settings.svelte.ts:553](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L553)

#### Returns

`void`

#### Inherited from

[`Modal`](Modal.md).[`onOpen`](Modal.md#onopen)

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

[`Modal`](Modal.md).[`onOpenChange`](Modal.md#onopenchange)

***

### open()

> **open**(): `void`

Defined in: [suggest.ts:379](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L379)

#### Returns

`void`

#### Overrides

[`Modal`](Modal.md).[`open`](Modal.md#open)

***

### renderSuggestion()

> `abstract` **renderSuggestion**(`value`, `el`): `void`

Defined in: [suggest.ts:468](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L468)

Render the suggestion item into DOM.

#### Parameters

##### value

`T`

##### el

`HTMLElement`

#### Returns

`void`

#### Implementation of

`ISuggestOwner.renderSuggestion`

***

### selectActiveSuggestion()

> **selectActiveSuggestion**(`evt`): `void`

Defined in: [suggest.ts:390](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L390)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

***

### selectSuggestion()

> **selectSuggestion**(`value`, `evt`): `void`

Defined in: [suggest.ts:385](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L385)

Called when the user makes a selection.

#### Parameters

##### value

`T`

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`void`

#### Implementation of

`ISuggestOwner.selectSuggestion`

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

[`Modal`](Modal.md).[`setContent`](Modal.md#setcontent)

***

### setInstructions()

> **setInstructions**(`instructions`): `void`

Defined in: [suggest.ts:336](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L336)

#### Parameters

##### instructions

`Instruction`[]

#### Returns

`void`

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `void`

Defined in: [suggest.ts:332](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L332)

#### Parameters

##### placeholder

`string`

#### Returns

`void`

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

[`Modal`](Modal.md).[`setTitle`](Modal.md#settitle)

***

### updateSuggestions()

> **updateSuggestions**(): `Promise`\<`void`\>

Defined in: [suggest.ts:349](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L349)

#### Returns

`Promise`\<`void`\>
