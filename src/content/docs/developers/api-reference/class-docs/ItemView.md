---
title: "ItemView"
description: "Source-generated public API reference for ItemView."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [view.svelte.ts:431](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L431)

View base class with an action bar and content area.

## Extends

- [`View`](/developers/api-reference/class-docs/view/)

## Extended by

- [`FileView`](/developers/api-reference/class-docs/fileview/)

## Constructors

### Constructor

> **new ItemView**(`leaf?`): `ItemView`

Defined in: [view.svelte.ts:439](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L439)

#### Parameters

##### leaf?

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`ItemView`

#### Overrides

[`View`](/developers/api-reference/class-docs/view/).[`constructor`](/developers/api-reference/class-docs/view/#constructor)

## Properties

### actions

> **actions**: `object`[]

Defined in: [view.svelte.ts:432](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L432)

#### callback

> **callback**: (`evt`) => `any`

##### Parameters

###### evt

`MouseEvent`

##### Returns

`any`

#### disabled?

> `optional` **disabled?**: `boolean`

#### icon

> **icon**: `string`

#### title

> **title**: `string`

***

### children

> **children**: [`Component`](/developers/api-reference/class-docs/component/)\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L31)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`children`](/developers/api-reference/class-docs/view/#children)

***

### icon

> **icon**: `string` = `""`

Defined in: [view.svelte.ts:289](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L289)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`icon`](/developers/api-reference/class-docs/view/#icon)

***

### leaf

> **leaf**: [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

Defined in: [view.svelte.ts:290](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L290)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`leaf`](/developers/api-reference/class-docs/view/#leaf)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L33)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`loaded`](/developers/api-reference/class-docs/view/#loaded)

***

### scope

> **scope**: [`Scope`](/developers/api-reference/class-docs/scope/) \| `null` = `null`

Defined in: [view.svelte.ts:291](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L291)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`scope`](/developers/api-reference/class-docs/view/#scope)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](/developers/api-reference/class-docs/app/)

Defined in: [view.svelte.ts:306](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L306)

##### Returns

[`App`](/developers/api-reference/class-docs/app/)

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`app`](/developers/api-reference/class-docs/view/#app)

***

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:302](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L302)

##### Returns

`HTMLElement`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`containerEl`](/developers/api-reference/class-docs/view/#containerel)

***

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [view.svelte.ts:443](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L443)

##### Returns

`HTMLElement`

## Methods

### addAction()

> **addAction**(`icon`, `title`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:451](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L451)

#### Parameters

##### icon

`string`

##### title

`string`

##### callback

(`evt`) => `any`

##### options?

###### disabled?

`boolean`

#### Returns

`void`

***

### addChild()

> **addChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:161](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L161)

Adds a child component, loading it if this component is loaded

#### Type Parameters

##### T

`T` *extends* [`Component`](/developers/api-reference/class-docs/component/)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`addChild`](/developers/api-reference/class-docs/view/#addchild)

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

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

[`View`](/developers/api-reference/class-docs/view/).[`dispatch`](/developers/api-reference/class-docs/view/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

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

[`View`](/developers/api-reference/class-docs/view/).[`emit`](/developers/api-reference/class-docs/view/#emit)

***

### getBreadcrumbFilePath()

> **getBreadcrumbFilePath**(): `string` \| `null`

Defined in: [view.svelte.ts:351](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L351)

Vault path used for parent-path header breadcrumbs. File views return the
open file; other views MAY return a related path or null.

#### Returns

`string` \| `null`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getBreadcrumbFilePath`](/developers/api-reference/class-docs/view/#getbreadcrumbfilepath)

***

### getBreadcrumbs()

> **getBreadcrumbs**(): `ViewBreadcrumb`[]

Defined in: [view.svelte.ts:360](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L360)

Prefix breadcrumbs rendered before parent-path segments.

#### Returns

`ViewBreadcrumb`[]

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getBreadcrumbs`](/developers/api-reference/class-docs/view/#getbreadcrumbs)

***

### getClosePersistenceScope()

> **getClosePersistenceScope**(): `"application"` \| `"layout"`

Defined in: [view.svelte.ts:341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L341)

Layout-only views own no file writers and retain staged state outside their
UI. Every other view keeps the complete application writer close guard.

#### Returns

`"application"` \| `"layout"`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getClosePersistenceScope`](/developers/api-reference/class-docs/view/#getclosepersistencescope)

***

### getDisplayText()

> `abstract` **getDisplayText**(): `string`

Defined in: [view.svelte.ts:333](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L333)

#### Returns

`string`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getDisplayText`](/developers/api-reference/class-docs/view/#getdisplaytext)

***

### getIcon()

> **getIcon**(): `string`

Defined in: [view.svelte.ts:329](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L329)

#### Returns

`string`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getIcon`](/developers/api-reference/class-docs/view/#geticon)

***

### getState()

> **getState**(): `Record`\<`string`, `unknown`\>

Defined in: [view.svelte.ts:317](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L317)

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getState`](/developers/api-reference/class-docs/view/#getstate)

***

### getViewType()

> `abstract` **getViewType**(): `string`

Defined in: [view.svelte.ts:315](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L315)

#### Returns

`string`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`getViewType`](/developers/api-reference/class-docs/view/#getviewtype)

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`load`](/developers/api-reference/class-docs/view/#load)

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

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

[`View`](/developers/api-reference/class-docs/view/).[`off`](/developers/api-reference/class-docs/view/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### ref

`EventRef`\<`Record`\<`string`, `any`\>, `T`\>

#### Returns

`void`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`offref`](/developers/api-reference/class-docs/view/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

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

[`View`](/developers/api-reference/class-docs/view/).[`on`](/developers/api-reference/class-docs/view/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

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

[`View`](/developers/api-reference/class-docs/view/).[`once`](/developers/api-reference/class-docs/view/#once)

***

### onClose()

> **onClose**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:464](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L464)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`View`](/developers/api-reference/class-docs/view/).[`onClose`](/developers/api-reference/class-docs/view/#onclose)

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [view.svelte.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L64)

Override this to load your component

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`onload`](/developers/api-reference/class-docs/view/#onload)

***

### onOpen()

> **onOpen**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:460](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L460)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`View`](/developers/api-reference/class-docs/view/).[`onOpen`](/developers/api-reference/class-docs/view/#onopen)

***

### onPaneMenu()

> **onPaneMenu**(`menu`, `source`): `void`

Defined in: [view.svelte.ts:364](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L364)

#### Parameters

##### menu

[`Menu`](/developers/api-reference/class-docs/menu/)

##### source

`string`

#### Returns

`void`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`onPaneMenu`](/developers/api-reference/class-docs/view/#onpanemenu)

***

### onunload()

> `abstract` **onunload**(): `void`

Defined in: [view.svelte.ts:121](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L121)

Override this to unload your component

#### Returns

`void`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`onunload`](/developers/api-reference/class-docs/view/#onunload)

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

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`register`](/developers/api-reference/class-docs/view/#register)

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

##### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`registerDomEvent`](/developers/api-reference/class-docs/view/#registerdomevent)

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

##### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`registerDomEvent`](/developers/api-reference/class-docs/view/#registerdomevent)

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

##### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`registerDomEvent`](/developers/api-reference/class-docs/view/#registerdomevent)

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

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`registerEvent`](/developers/api-reference/class-docs/view/#registerevent)

***

### registerInterval()

> **registerInterval**(`id`): `void`

Defined in: [view.svelte.ts:198](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L198)

#### Parameters

##### id

`Timeout`

#### Returns

`void`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`registerInterval`](/developers/api-reference/class-docs/view/#registerinterval)

***

### removeChild()

> **removeChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:175](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L175)

Removes a child component, unloading it

#### Type Parameters

##### T

`T` *extends* [`Component`](/developers/api-reference/class-docs/component/)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`removeChild`](/developers/api-reference/class-docs/view/#removechild)

***

### setState()

> **setState**(`state`, `result?`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:321](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L321)

#### Parameters

##### state

`Record`\<`string`, `unknown`\>

##### result?

[`ViewStateResult`](/developers/api-reference/interfaces/viewstateresult/)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`View`](/developers/api-reference/class-docs/view/).[`setState`](/developers/api-reference/class-docs/view/#setstate)

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

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

[`View`](/developers/api-reference/class-docs/view/).[`trigger`](/developers/api-reference/class-docs/view/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

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

[`View`](/developers/api-reference/class-docs/view/).[`tryTrigger`](/developers/api-reference/class-docs/view/#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:447](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L447)

Unload this component and its children

#### Returns

`void`

#### Overrides

[`View`](/developers/api-reference/class-docs/view/).[`unload`](/developers/api-reference/class-docs/view/#unload)
