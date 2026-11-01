[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / FileView

# Abstract Class: FileView

Defined in: [view.svelte.ts:474](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L474)

Item view base class that is backed by a vault file.

## Extends

- [`ItemView`](ItemView.md)

## Extended by

- [`TextFileView`](TextFileView.md)

## Constructors

### Constructor

> **new FileView**(`leaf?`): `FileView`

Defined in: [view.svelte.ts:477](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L477)

#### Parameters

##### leaf?

[`WorkspaceLeaf`](WorkspaceLeaf.md)

#### Returns

`FileView`

#### Overrides

[`ItemView`](ItemView.md).[`constructor`](ItemView.md#constructor)

## Properties

### actions

> **actions**: `object`[]

Defined in: [view.svelte.ts:432](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L432)

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

[`ItemView`](ItemView.md).[`actions`](ItemView.md#actions)

***

### children

> **children**: [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L31)

#### Inherited from

[`ItemView`](ItemView.md).[`children`](ItemView.md#children)

***

### file

> **file**: [`TFile`](TFile.md) \| `null`

Defined in: [view.svelte.ts:475](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L475)

***

### icon

> **icon**: `string` = `""`

Defined in: [view.svelte.ts:289](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L289)

#### Inherited from

[`ItemView`](ItemView.md).[`icon`](ItemView.md#icon)

***

### leaf

> **leaf**: [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [view.svelte.ts:290](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L290)

#### Inherited from

[`ItemView`](ItemView.md).[`leaf`](ItemView.md#leaf)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L33)

#### Inherited from

[`ItemView`](ItemView.md).[`loaded`](ItemView.md#loaded)

***

### scope

> **scope**: [`Scope`](Scope.md) \| `null` = `null`

Defined in: [view.svelte.ts:291](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L291)

#### Inherited from

[`ItemView`](ItemView.md).[`scope`](ItemView.md#scope)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md)

Defined in: [view.svelte.ts:306](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L306)

##### Returns

[`App`](App.md)

#### Inherited from

[`ItemView`](ItemView.md).[`app`](ItemView.md#app)

***

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:302](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L302)

##### Returns

`HTMLElement`

#### Inherited from

[`ItemView`](ItemView.md).[`containerEl`](ItemView.md#containerel)

***

### contentEl

#### Get Signature

> **get** **contentEl**(): `HTMLElement`

Defined in: [view.svelte.ts:443](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L443)

##### Returns

`HTMLElement`

#### Inherited from

[`ItemView`](ItemView.md).[`contentEl`](ItemView.md#contentel)

## Methods

### addAction()

> **addAction**(`icon`, `title`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:451](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L451)

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

[`ItemView`](ItemView.md).[`addAction`](ItemView.md#addaction)

***

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

[`ItemView`](ItemView.md).[`addChild`](ItemView.md#addchild)

***

### canAcceptExtension()

> `abstract` **canAcceptExtension**(`extension`): `boolean`

Defined in: [view.svelte.ts:491](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L491)

#### Parameters

##### extension

`string`

#### Returns

`boolean`

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

[`ItemView`](ItemView.md).[`dispatch`](ItemView.md#dispatch)

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

[`ItemView`](ItemView.md).[`emit`](ItemView.md#emit)

***

### getBreadcrumbFilePath()

> **getBreadcrumbFilePath**(): `string` \| `null`

Defined in: [view.svelte.ts:481](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L481)

Vault path used for parent-path header breadcrumbs. File views return the
open file; other views MAY return a related path or null.

#### Returns

`string` \| `null`

#### Overrides

[`ItemView`](ItemView.md).[`getBreadcrumbFilePath`](ItemView.md#getbreadcrumbfilepath)

***

### getBreadcrumbs()

> **getBreadcrumbs**(): `ViewBreadcrumb`[]

Defined in: [view.svelte.ts:360](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L360)

Prefix breadcrumbs rendered before parent-path segments.

#### Returns

`ViewBreadcrumb`[]

#### Inherited from

[`ItemView`](ItemView.md).[`getBreadcrumbs`](ItemView.md#getbreadcrumbs)

***

### getClosePersistenceScope()

> **getClosePersistenceScope**(): `"application"` \| `"layout"`

Defined in: [view.svelte.ts:341](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L341)

Layout-only views own no file writers and retain staged state outside their
UI. Every other view keeps the complete application writer close guard.

#### Returns

`"application"` \| `"layout"`

#### Inherited from

[`ItemView`](ItemView.md).[`getClosePersistenceScope`](ItemView.md#getclosepersistencescope)

***

### getDisplayText()

> `abstract` **getDisplayText**(): `string`

Defined in: [view.svelte.ts:333](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L333)

#### Returns

`string`

#### Inherited from

[`ItemView`](ItemView.md).[`getDisplayText`](ItemView.md#getdisplaytext)

***

### getIcon()

> **getIcon**(): `string`

Defined in: [view.svelte.ts:329](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L329)

#### Returns

`string`

#### Inherited from

[`ItemView`](ItemView.md).[`getIcon`](ItemView.md#geticon)

***

### getState()

> **getState**(): `Record`\<`string`, `unknown`\>

Defined in: [view.svelte.ts:317](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L317)

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[`ItemView`](ItemView.md).[`getState`](ItemView.md#getstate)

***

### getViewType()

> `abstract` **getViewType**(): `string`

Defined in: [view.svelte.ts:315](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L315)

#### Returns

`string`

#### Inherited from

[`ItemView`](ItemView.md).[`getViewType`](ItemView.md#getviewtype)

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

#### Inherited from

[`ItemView`](ItemView.md).[`load`](ItemView.md#load)

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

[`ItemView`](ItemView.md).[`off`](ItemView.md#off)

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

[`ItemView`](ItemView.md).[`offref`](ItemView.md#offref)

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

[`ItemView`](ItemView.md).[`on`](ItemView.md#on)

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

[`ItemView`](ItemView.md).[`once`](ItemView.md#once)

***

### onClose()

> **onClose**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:464](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L464)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ItemView`](ItemView.md).[`onClose`](ItemView.md#onclose)

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [view.svelte.ts:64](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L64)

Override this to load your component

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`ItemView`](ItemView.md).[`onload`](ItemView.md#onload)

***

### onLoadFile()

> `abstract` **onLoadFile**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:485](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L485)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`void`\>

***

### onOpen()

> **onOpen**(): `Promise`\<`void`\>

Defined in: [view.svelte.ts:460](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L460)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ItemView`](ItemView.md).[`onOpen`](ItemView.md#onopen)

***

### onPaneMenu()

> **onPaneMenu**(`menu`, `source`): `void`

Defined in: [view.svelte.ts:364](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L364)

#### Parameters

##### menu

[`Menu`](Menu.md)

##### source

`string`

#### Returns

`void`

#### Inherited from

[`ItemView`](ItemView.md).[`onPaneMenu`](ItemView.md#onpanemenu)

***

### onRename()

> `abstract` **onRename**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:489](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L489)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`void`\>

***

### onunload()

> `abstract` **onunload**(): `void`

Defined in: [view.svelte.ts:121](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L121)

Override this to unload your component

#### Returns

`void`

#### Inherited from

[`ItemView`](ItemView.md).[`onunload`](ItemView.md#onunload)

***

### onUnloadFile()

> `abstract` **onUnloadFile**(`file`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:487](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L487)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`void`\>

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

[`ItemView`](ItemView.md).[`register`](ItemView.md#register)

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

[`ItemView`](ItemView.md).[`registerDomEvent`](ItemView.md#registerdomevent)

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

[`ItemView`](ItemView.md).[`registerDomEvent`](ItemView.md#registerdomevent)

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

[`ItemView`](ItemView.md).[`registerDomEvent`](ItemView.md#registerdomevent)

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

[`ItemView`](ItemView.md).[`registerEvent`](ItemView.md#registerevent)

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

[`ItemView`](ItemView.md).[`registerInterval`](ItemView.md#registerinterval)

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

[`ItemView`](ItemView.md).[`removeChild`](ItemView.md#removechild)

***

### setState()

> **setState**(`state`, `result?`): `Promise`\<`void`\>

Defined in: [view.svelte.ts:321](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L321)

#### Parameters

##### state

`Record`\<`string`, `unknown`\>

##### result?

[`ViewStateResult`](../interfaces/ViewStateResult.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ItemView`](ItemView.md).[`setState`](ItemView.md#setstate)

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

[`ItemView`](ItemView.md).[`trigger`](ItemView.md#trigger)

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

[`ItemView`](ItemView.md).[`tryTrigger`](ItemView.md#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:447](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L447)

Unload this component and its children

#### Returns

`void`

#### Inherited from

[`ItemView`](ItemView.md).[`unload`](ItemView.md#unload)
