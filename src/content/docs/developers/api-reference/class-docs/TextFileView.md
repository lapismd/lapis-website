---
title: "TextFileView"
description: "Source-generated public API reference for TextFileView."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [view.svelte.ts:499](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L499)

File view base class for text-backed editors.

## Extends

- [`FileView`](/developers/api-reference/class-docs/fileview/)

## Constructors

### Constructor

> **new TextFileView**(`leaf?`): `TextFileView`

Defined in: [view.svelte.ts:503](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L503)

#### Parameters

##### leaf?

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`TextFileView`

#### Overrides

[`FileView`](/developers/api-reference/class-docs/fileview/).[`constructor`](/developers/api-reference/class-docs/fileview/#constructor)

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

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`actions`](/developers/api-reference/class-docs/fileview/#actions)

***

### children

> **children**: [`Component`](/developers/api-reference/class-docs/component/)\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L31)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`children`](/developers/api-reference/class-docs/fileview/#children)

***

### data

> **data**: `string`

Defined in: [view.svelte.ts:501](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L501)

***

### editor

> **editor**: [`Editor`](/developers/api-reference/class-docs/editor/)

Defined in: [view.svelte.ts:500](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L500)

***

### file

> **file**: [`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

Defined in: [view.svelte.ts:475](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L475)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`file`](/developers/api-reference/class-docs/fileview/#file)

***

### icon

> **icon**: `string` = `""`

Defined in: [view.svelte.ts:289](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L289)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`icon`](/developers/api-reference/class-docs/fileview/#icon)

***

### leaf

> **leaf**: [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

Defined in: [view.svelte.ts:290](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L290)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`leaf`](/developers/api-reference/class-docs/fileview/#leaf)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L33)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`loaded`](/developers/api-reference/class-docs/fileview/#loaded)

***

### scope

> **scope**: [`Scope`](/developers/api-reference/class-docs/scope/) \| `null` = `null`

Defined in: [view.svelte.ts:291](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L291)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`scope`](/developers/api-reference/class-docs/fileview/#scope)

## Accessors

### adapter

#### Get Signature

> **get** **adapter**(): [`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

Defined in: [view.svelte.ts:508](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L508)

##### Returns

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

***

### app

#### Get Signature

> **get** **app**(): [`App`](/developers/api-reference/class-docs/app/)

Defined in: [view.svelte.ts:306](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L306)

##### Returns

[`App`](/developers/api-reference/class-docs/app/)

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`app`](/developers/api-reference/class-docs/fileview/#app)

***

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:302](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L302)

##### Returns

`HTMLElement`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`containerEl`](/developers/api-reference/class-docs/fileview/#containerel)

***

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [view.svelte.ts:443](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L443)

##### Returns

`HTMLElement`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`contentEl`](/developers/api-reference/class-docs/fileview/#contentel)

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

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`addAction`](/developers/api-reference/class-docs/fileview/#addaction)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`addChild`](/developers/api-reference/class-docs/fileview/#addchild)

***

### canAcceptExtension()

> `abstract` **canAcceptExtension**(`extension`): `boolean`

Defined in: [view.svelte.ts:491](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L491)

#### Parameters

##### extension

`string`

#### Returns

`boolean`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`canAcceptExtension`](/developers/api-reference/class-docs/fileview/#canacceptextension)

***

### clear()

> `abstract` **clear**(): `void`

Defined in: [view.svelte.ts:514](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L514)

#### Returns

`void`

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`dispatch`](/developers/api-reference/class-docs/fileview/#dispatch)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`emit`](/developers/api-reference/class-docs/fileview/#emit)

***

### getBreadcrumbFilePath()

> **getBreadcrumbFilePath**(): `string` \| `null`

Defined in: [view.svelte.ts:481](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L481)

Vault path used for parent-path header breadcrumbs. File views return the
open file; other views MAY return a related path or null.

#### Returns

`string` \| `null`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getBreadcrumbFilePath`](/developers/api-reference/class-docs/fileview/#getbreadcrumbfilepath)

***

### getBreadcrumbs()

> **getBreadcrumbs**(): `ViewBreadcrumb`[]

Defined in: [view.svelte.ts:360](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L360)

Prefix breadcrumbs rendered before parent-path segments.

#### Returns

`ViewBreadcrumb`[]

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getBreadcrumbs`](/developers/api-reference/class-docs/fileview/#getbreadcrumbs)

***

### getClosePersistenceScope()

> **getClosePersistenceScope**(): `"application"` \| `"layout"`

Defined in: [view.svelte.ts:341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L341)

Layout-only views own no file writers and retain staged state outside their
UI. Every other view keeps the complete application writer close guard.

#### Returns

`"application"` \| `"layout"`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getClosePersistenceScope`](/developers/api-reference/class-docs/fileview/#getclosepersistencescope)

***

### getDisplayText()

> `abstract` **getDisplayText**(): `string`

Defined in: [view.svelte.ts:333](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L333)

#### Returns

`string`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getDisplayText`](/developers/api-reference/class-docs/fileview/#getdisplaytext)

***

### getIcon()

> **getIcon**(): `string`

Defined in: [view.svelte.ts:570](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L570)

#### Returns

`string`

#### Overrides

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getIcon`](/developers/api-reference/class-docs/fileview/#geticon)

***

### getState()

> **getState**(): `Record`\<`string`, `unknown`\>

Defined in: [view.svelte.ts:317](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L317)

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getState`](/developers/api-reference/class-docs/fileview/#getstate)

***

### getViewData()

> `abstract` **getViewData**(): `string`

Defined in: [view.svelte.ts:512](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L512)

#### Returns

`string`

***

### getViewType()

> `abstract` **getViewType**(): `string`

Defined in: [view.svelte.ts:315](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L315)

#### Returns

`string`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`getViewType`](/developers/api-reference/class-docs/fileview/#getviewtype)

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`load`](/developers/api-reference/class-docs/fileview/#load)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`off`](/developers/api-reference/class-docs/fileview/#off)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`offref`](/developers/api-reference/class-docs/fileview/#offref)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`on`](/developers/api-reference/class-docs/fileview/#on)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`once`](/developers/api-reference/class-docs/fileview/#once)

***

### onClose()

> **onClose**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:464](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L464)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onClose`](/developers/api-reference/class-docs/fileview/#onclose)

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [view.svelte.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L64)

Override this to load your component

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onload`](/developers/api-reference/class-docs/fileview/#onload)

***

### onLoadFile()

> **onLoadFile**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:516](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L516)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onLoadFile`](/developers/api-reference/class-docs/fileview/#onloadfile)

***

### onOpen()

> **onOpen**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:460](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L460)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onOpen`](/developers/api-reference/class-docs/fileview/#onopen)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onPaneMenu`](/developers/api-reference/class-docs/fileview/#onpanemenu)

***

### onRename()

> **onRename**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:574](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L574)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onRename`](/developers/api-reference/class-docs/fileview/#onrename)

***

### onunload()

> `abstract` **onunload**(): `void`

Defined in: [view.svelte.ts:121](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L121)

Override this to unload your component

#### Returns

`void`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onunload`](/developers/api-reference/class-docs/fileview/#onunload)

***

### onUnloadFile()

> **onUnloadFile**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L581)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`FileView`](/developers/api-reference/class-docs/fileview/).[`onUnloadFile`](/developers/api-reference/class-docs/fileview/#onunloadfile)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`register`](/developers/api-reference/class-docs/fileview/#register)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`registerDomEvent`](/developers/api-reference/class-docs/fileview/#registerdomevent)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`registerDomEvent`](/developers/api-reference/class-docs/fileview/#registerdomevent)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`registerDomEvent`](/developers/api-reference/class-docs/fileview/#registerdomevent)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`registerEvent`](/developers/api-reference/class-docs/fileview/#registerevent)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`registerInterval`](/developers/api-reference/class-docs/fileview/#registerinterval)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`removeChild`](/developers/api-reference/class-docs/fileview/#removechild)

***

### save()

> **save**(`clear?`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:587](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L587)

#### Parameters

##### clear?

`boolean`

#### Returns

`Promise`\<`void`\>

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`setState`](/developers/api-reference/class-docs/fileview/#setstate)

***

### setViewData()

> `abstract` **setViewData**(`data`, `clear?`): `void`

Defined in: [view.svelte.ts:513](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L513)

#### Parameters

##### data

`string`

##### clear?

`boolean`

#### Returns

`void`

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`trigger`](/developers/api-reference/class-docs/fileview/#trigger)

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

[`FileView`](/developers/api-reference/class-docs/fileview/).[`tryTrigger`](/developers/api-reference/class-docs/fileview/#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:447](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/view.svelte.ts#L447)

Unload this component and its children

#### Returns

`void`

#### Inherited from

[`FileView`](/developers/api-reference/class-docs/fileview/).[`unload`](/developers/api-reference/class-docs/fileview/#unload)
