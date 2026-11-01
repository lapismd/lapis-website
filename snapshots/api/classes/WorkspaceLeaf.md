[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / WorkspaceLeaf

# Class: WorkspaceLeaf

Defined in: [workspace.svelte.ts:5826](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5826)

Single navigable pane in the workspace that hosts one [View](View.md) at a time.

## Extends

- `WorkspaceItem`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}\>

## Constructors

### Constructor

> **new WorkspaceLeaf**(`view?`): `WorkspaceLeaf`

Defined in: [workspace.svelte.ts:5865](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5865)

#### Parameters

##### view?

[`View`](View.md)

#### Returns

`WorkspaceLeaf`

#### Overrides

`WorkspaceItem<{ "pinned-change": [pinned: boolean]; "group-change": [pinned: boolean]; }>.constructor`

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

[`WorkspaceSidedock`](WorkspaceSidedock.md).[`_root`](WorkspaceSidedock.md#_root)

***

### containerEl

> **containerEl**: `HTMLElement`

Defined in: [workspace.svelte.ts:5837](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5837)

***

### contentEl

> **contentEl**: `HTMLElement`

Defined in: [workspace.svelte.ts:5836](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5836)

***

### currentState

> **currentState**: [`ViewState`](../interfaces/ViewState.md)

Defined in: [workspace.svelte.ts:5842](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5842)

***

### group

> **group**: `string` \| `null`

Defined in: [workspace.svelte.ts:5833](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5833)

***

### history

> **history**: `HistoryManager`\<[`ViewState`](../interfaces/ViewState.md)\>

Defined in: [workspace.svelte.ts:5839](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5839)

***

### hoverPopover

> **hoverPopover**: `null` = `null`

Defined in: [workspace.svelte.ts:5831](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5831)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

[`WorkspaceSidedock`](WorkspaceSidedock.md).[`id`](WorkspaceSidedock.md#id)

***

### parent

> **parent**: [`WorkspaceTabs`](WorkspaceTabs.md) \| [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

Defined in: [workspace.svelte.ts:5841](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5841)

#### Overrides

[`WorkspaceSidedock`](WorkspaceSidedock.md).[`parent`](WorkspaceSidedock.md#parent)

***

### pinned

> **pinned**: `boolean`

Defined in: [workspace.svelte.ts:5832](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5832)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md)

Defined in: [workspace.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L304)

Resolve the owning application before using the compatibility alias.

##### Returns

[`App`](App.md)

#### Inherited from

`WorkspaceItem.app`

***

### application

#### Get Signature

> **get** **application**(): [`App`](App.md) \| `undefined`

Defined in: [workspace.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L299)

The application that owns this item, when it has been attached.

##### Returns

[`App`](App.md) \| `undefined`

#### Inherited from

`WorkspaceItem.application`

***

### isDeferred

#### Get Signature

> **get** **isDeferred**(): `boolean`

Defined in: [workspace.svelte.ts:6222](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6222)

##### Returns

`boolean`

***

### state

#### Get Signature

> **get** **state**(): [`ViewState`](../interfaces/ViewState.md)

Defined in: [workspace.svelte.ts:5851](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5851)

##### Returns

[`ViewState`](../interfaces/ViewState.md)

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [workspace.svelte.ts:5858](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5858)

##### Parameters

###### value

[`ViewState`](../interfaces/ViewState.md)

##### Returns

`void`

***

### view

#### Get Signature

> **get** **view**(): [`View`](View.md)

Defined in: [workspace.svelte.ts:5935](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5935)

##### Returns

[`View`](View.md)

#### Set Signature

> **set** **view**(`view`): `void`

Defined in: [workspace.svelte.ts:5939](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5939)

##### Parameters

###### view

[`View`](View.md)

##### Returns

`void`

***

### workspace

#### Get Signature

> **get** **workspace**(): [`Workspace`](Workspace.md) \| `undefined`

Defined in: [workspace.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L294)

The workspace that owns this item, when it has been attached.

##### Returns

[`Workspace`](Workspace.md) \| `undefined`

#### Inherited from

[`WorkspaceSidedock`](WorkspaceSidedock.md).[`workspace`](WorkspaceSidedock.md#workspace)

## Methods

### bindWorkspace()

> **bindWorkspace**(`workspace`): `this`

Defined in: [workspace.svelte.ts:287](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L287)

Bind a root workspace item to its owning workspace.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

#### Returns

`this`

#### Inherited from

`WorkspaceItem.bindWorkspace`

***

### captureCurrentViewState()

> **captureCurrentViewState**(): [`ViewState`](../interfaces/ViewState.md)

Defined in: [workspace.svelte.ts:5900](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5900)

#### Returns

[`ViewState`](../interfaces/ViewState.md)

***

### close()

> **close**(): `void`

Defined in: [workspace.svelte.ts:6273](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6273)

#### Returns

`void`

***

### detach()

> **detach**(`softDelete?`): `WorkspaceTabsChild` \| `undefined`

Defined in: [workspace.svelte.ts:5847](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5847)

#### Parameters

##### softDelete?

`boolean` = `false`

#### Returns

`WorkspaceTabsChild` \| `undefined`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}\>\[`Extract`\<`T`, `"pinned-change"` \| `"group-change"`\>\]

#### Returns

`boolean`

#### Inherited from

`WorkspaceItem.dispatch`

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}\>\[`Extract`\<`T`, `"pinned-change"` \| `"group-change"`\>\]

#### Returns

`boolean`

#### Inherited from

`WorkspaceItem.emit`

***

### getContainer()

> **getContainer**(): `WorkspaceContainer`

Defined in: [workspace.svelte.ts:6267](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6267)

#### Returns

`WorkspaceContainer`

***

### getDisplayText()

> **getDisplayText**(): `string`

Defined in: [workspace.svelte.ts:6263](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6263)

#### Returns

`string`

***

### getEphemeralState()

> **getEphemeralState**(): `any`

Defined in: [workspace.svelte.ts:6230](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6230)

#### Returns

`any`

***

### getIcon()

> **getIcon**(): `string`

Defined in: [workspace.svelte.ts:6259](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6259)

#### Returns

`string`

***

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

`WorkspaceItem.getRoot`

***

### getViewState()

> **getViewState**(): [`ViewState`](../interfaces/ViewState.md)

Defined in: [workspace.svelte.ts:6218](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6218)

#### Returns

[`ViewState`](../interfaces/ViewState.md)

***

### loadIfDeferred()

> **loadIfDeferred**(): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:6226](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6226)

#### Returns

`Promise`\<`void`\>

***

### loadJson()

> **loadJson**(`layout`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:6277](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6277)

#### Parameters

##### layout

`WorkspaceLeafJson`

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

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

`WorkspaceItem.off`

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### ref

`EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

`WorkspaceItem.offref`

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`, `any`\>

#### Inherited from

`WorkspaceItem.on`

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`, `any`\>

#### Inherited from

`WorkspaceItem.once`

***

### onResize()

> **onResize**(): `void`

Defined in: [workspace.svelte.ts:6271](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6271)

#### Returns

`void`

***

### open()

> **open**(`view`, `result?`, `state?`): `Promise`\<[`View`](View.md)\>

Defined in: [workspace.svelte.ts:5958](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5958)

#### Parameters

##### view

[`View`](View.md)

##### result?

[`ViewStateResult`](../interfaces/ViewStateResult.md) = `...`

##### state?

[`ViewState`](../interfaces/ViewState.md)

#### Returns

`Promise`\<[`View`](View.md)\>

***

### openFile()

> **openFile**(`file`, `__namedParameters?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:6000](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6000)

#### Parameters

##### file

[`TFile`](TFile.md)

##### \_\_namedParameters?

###### result?

[`ViewStateResult`](../interfaces/ViewStateResult.md)

###### state?

[`ViewState`](../interfaces/ViewState.md)

###### view?

[`View`](View.md)

#### Returns

`Promise`\<`void`\>

***

### reload()

> **reload**(): `void`

Defined in: [workspace.svelte.ts:6281](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6281)

#### Returns

`void`

***

### setEphemeralState()

> **setEphemeralState**(`state`): `void`

Defined in: [workspace.svelte.ts:6234](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6234)

#### Parameters

##### state

`any`

#### Returns

`void`

***

### setGroup()

> **setGroup**(`group`): `void`

Defined in: [workspace.svelte.ts:6254](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6254)

#### Parameters

##### group

`string`

#### Returns

`void`

***

### setGroupMember()

> **setGroupMember**(`other`): `void`

Defined in: [workspace.svelte.ts:6248](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6248)

#### Parameters

##### other

`WorkspaceLeaf`

#### Returns

`void`

***

### setPinned()

> **setPinned**(`pinned`): `void`

Defined in: [workspace.svelte.ts:6242](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6242)

#### Parameters

##### pinned

`boolean`

#### Returns

`void`

***

### setViewState()

> **setViewState**(`viewState`, `eState?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:6089](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6089)

#### Parameters

##### viewState

[`ViewState`](../interfaces/ViewState.md)

##### eState?

`any`

#### Returns

`Promise`\<`void`\>

***

### togglePinned()

> **togglePinned**(): `void`

Defined in: [workspace.svelte.ts:6238](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6238)

#### Returns

`void`

***

### toJson()

> **toJson**(): `WorkspaceLeafJson`

Defined in: [workspace.svelte.ts:6285](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L6285)

#### Returns

`WorkspaceLeafJson`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}\>\[`Extract`\<`T`, `"pinned-change"` \| `"group-change"`\>\]

#### Returns

`boolean`

#### Inherited from

`WorkspaceItem.trigger`

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `"pinned-change"` \| `"group-change"`

#### Parameters

##### evt

`EventRef`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `group-change`: \[`pinned`: `boolean`\]; `pinned-change`: \[`pinned`: `boolean`\]; \}\>\[`Extract`\<`T`, `"pinned-change"` \| `"group-change"`\>\]

#### Returns

`void`

#### Inherited from

`WorkspaceItem.tryTrigger`

***

### updateHistory()

> **updateHistory**(`state`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:5881](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5881)

#### Parameters

##### state

[`ViewState`](../interfaces/ViewState.md)

#### Returns

`Promise`\<`void`\>
