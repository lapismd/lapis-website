---
title: "Component<Events>"
description: "Source-generated public API reference for Component<Events>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [view.svelte.ts:28](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L28)

Base lifecycle helper used throughout the public API.

Components can own child components and cleanup callbacks so complex views
and plugins can tear themselves down predictably.

## Extends

- [`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/)\<`Events`\>

## Extended by

- [`Plugin`](/developers/api-reference/class-docs/plugin/)
- [`View`](/developers/api-reference/class-docs/view/)
- [`MarkdownRenderChild`](/developers/api-reference/class-docs/markdownrenderchild/)

## Type Parameters

### Events

`Events` *extends* `ValidEventTypes` = `Record`\<`string`, `any`\>

## Constructors

### Constructor

> **new Component**\<`Events`\>(): `Component`\<`Events`\>

#### Returns

`Component`\<`Events`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`constructor`](/developers/api-reference/class-docs/eventdispatcher/#constructor)

## Properties

### children

> **children**: `Component`\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L31)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L33)

## Accessors

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:37](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L37)

##### Returns

`HTMLElement`

#### Set Signature

> **set** **containerEl**(`el`): `void`

Defined in: [view.svelte.ts:41](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L41)

##### Parameters

###### el

`HTMLElement`

##### Returns

`void`

## Methods

### addChild()

> **addChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:161](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L161)

Adds a child component, loading it if this component is loaded

#### Type Parameters

##### T

`T` *extends* `Component`\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`Events`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`dispatch`](/developers/api-reference/class-docs/eventdispatcher/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`Events`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`emit`](/developers/api-reference/class-docs/eventdispatcher/#emit)

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`Events`, `T`\>

##### context?

`any`

##### once?

`boolean`

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`off`](/developers/api-reference/class-docs/eventdispatcher/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### ref

`EventRef`\<`Events`, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`offref`](/developers/api-reference/class-docs/eventdispatcher/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Events`, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`Events`, `T`\>

##### context?

`any`

#### Returns

`EventRef`\<`Events`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`on`](/developers/api-reference/class-docs/eventdispatcher/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Events`, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`Events`, `T`\>

##### context?

`any`

#### Returns

`EventRef`\<`Events`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`once`](/developers/api-reference/class-docs/eventdispatcher/#once)

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [view.svelte.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L64)

Override this to load your component

#### Returns

`void` \| `Promise`\<`void`\>

***

### onunload()

> `abstract` **onunload**(): `void`

Defined in: [view.svelte.ts:121](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L121)

Override this to unload your component

#### Returns

`void`

***

### register()

> **register**(`cb`): `void`

Defined in: [view.svelte.ts:188](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L188)

Registers a callback to be called when unloading

#### Parameters

##### cb

() => `any`

#### Returns

`void`

***

### registerDomEvent()

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:207](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L207)

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

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:213](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L213)

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

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:219](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L219)

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

***

### registerEvent()

> **registerEvent**\<`T`, `K`\>(`eventRef`): `void`

Defined in: [view.svelte.ts:192](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L192)

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

***

### registerInterval()

> **registerInterval**(`id`): `void`

Defined in: [view.svelte.ts:198](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L198)

#### Parameters

##### id

`Timeout`

#### Returns

`void`

***

### removeChild()

> **removeChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:175](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L175)

Removes a child component, unloading it

#### Type Parameters

##### T

`T` *extends* `Component`\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`Events`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`trigger`](/developers/api-reference/class-docs/eventdispatcher/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### evt

`EventRef`\<`Events`, `T`\>

##### args

...`Parameters`\<`EventListener`\<`Events`, `T`\>\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`tryTrigger`](/developers/api-reference/class-docs/eventdispatcher/#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L91)

Unload this component and its children

#### Returns

`void`
