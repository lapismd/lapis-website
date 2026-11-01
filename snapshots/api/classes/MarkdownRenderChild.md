[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MarkdownRenderChild

# Class: MarkdownRenderChild

Defined in: [markdown.ts:22](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L22)

Base lifecycle helper used throughout the public API.

Components can own child components and cleanup callbacks so complex views
and plugins can tear themselves down predictably.

## Extends

- [`Component`](Component.md)

## Constructors

### Constructor

> **new MarkdownRenderChild**(`containerEl`): `MarkdownRenderChild`

Defined in: [markdown.ts:31](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L31)

#### Parameters

##### containerEl

`HTMLElement`

This HTMLElement will be used to test whether this
  component is still alive. It should be a child of the Markdown preview
  sections, and when it's no longer attached (for example, when it is
  replaced with a new version because the user edited the Markdown source
  code), this component will be unloaded.

#### Returns

`MarkdownRenderChild`

#### Overrides

[`Component`](Component.md).[`constructor`](Component.md#constructor)

## Properties

### children

> **children**: [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L31)

#### Inherited from

[`Component`](Component.md).[`children`](Component.md#children)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L33)

#### Inherited from

[`Component`](Component.md).[`loaded`](Component.md#loaded)

## Accessors

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:37](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L37)

##### Returns

`HTMLElement`

#### Set Signature

> **set** **containerEl**(`el`): `void`

Defined in: [view.svelte.ts:41](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L41)

##### Parameters

###### el

`HTMLElement`

##### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`containerEl`](Component.md#containerel)

## Methods

### addChild()

> **addChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:161](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L161)

Adds a child component, loading it if this component is loaded

#### Type Parameters

##### T

`T` *extends* [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`Component`](Component.md).[`addChild`](Component.md#addchild)

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`dispatch`](Component.md#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`emit`](Component.md#emit)

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`load`](Component.md#load)

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`off`](Component.md#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### ref

`EventRef`\<`Record`\<`string`, `any`\>, `T`\>

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`offref`](Component.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

#### Inherited from

[`Component`](Component.md).[`on`](Component.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

#### Inherited from

[`Component`](Component.md).[`once`](Component.md#once)

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [view.svelte.ts:64](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L64)

Override this to load your component

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Component`](Component.md).[`onload`](Component.md#onload)

***

### onunload()

> `abstract` **onunload**(): `void`

Defined in: [view.svelte.ts:121](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L121)

Override this to unload your component

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`onunload`](Component.md#onunload)

***

### register()

> **register**(`cb`): `void`

Defined in: [view.svelte.ts:188](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L188)

Registers a callback to be called when unloading

#### Parameters

##### cb

() => `any`

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`register`](Component.md#register)

***

### registerDomEvent()

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:207](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L207)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `HTMLElementEventMap`

##### Parameters

###### el

`HTMLElement`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:213](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L213)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `DocumentEventMap`

##### Parameters

###### el

`Document`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:219](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L219)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### el

`Window`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

***

### registerEvent()

> **registerEvent**\<`T`, `K`\>(`eventRef`): `void`

Defined in: [view.svelte.ts:192](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L192)

#### Type Parameters

##### T

`T` *extends* `ValidEventTypes`

##### K

`K` *extends* `string` \| `symbol`

#### Parameters

##### eventRef

`EventRef`\<`T`, `K`, `any`\>

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`registerEvent`](Component.md#registerevent)

***

### registerInterval()

> **registerInterval**(`id`): `void`

Defined in: [view.svelte.ts:198](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L198)

#### Parameters

##### id

`Timeout`

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`registerInterval`](Component.md#registerinterval)

***

### removeChild()

> **removeChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:175](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L175)

Removes a child component, unloading it

#### Type Parameters

##### T

`T` *extends* [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`Component`](Component.md).[`removeChild`](Component.md#removechild)

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`trigger`](Component.md#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### evt

`EventRef`\<`Record`\<`string`, `any`\>, `T`\>

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`tryTrigger`](Component.md#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L91)

Unload this component and its children

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`unload`](Component.md#unload)
