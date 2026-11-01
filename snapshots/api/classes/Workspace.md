[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / Workspace

# Class: Workspace

Defined in: [workspace.svelte.ts:2018](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2018)

Owns the workspace layout tree, leaf registry, and view-type routing.

`Workspace` coordinates default file navigation, sidebar placement, layout
persistence, and the active editor/leaf state that plugins interact with.

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}\>

## Constructors

### Constructor

> **new Workspace**(`app`): `Workspace`

Defined in: [workspace.svelte.ts:3030](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3030)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`Workspace`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### \_activeLeaf

> **\_activeLeaf**: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:2065](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2065)

***

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [workspace.svelte.ts:3030](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3030)

***

### bottomPanel

> **bottomPanel**: `WorkspaceBottomPanel`

Defined in: [workspace.svelte.ts:2080](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2080)

***

### containerEl

> **containerEl**: `HTMLElement`

Defined in: [workspace.svelte.ts:2107](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2107)

***

### diagnostics

> `readonly` **diagnostics**: `DiagnosticsManager`

Defined in: [workspace.svelte.ts:2089](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2089)

***

### displayMode

> **displayMode**: `WorkspaceDisplayMode`

Defined in: [workspace.svelte.ts:2064](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2064)

***

### editorViews

> `readonly` **editorViews**: `EditorViewRegistry`

Defined in: [workspace.svelte.ts:2058](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2058)

***

### floating

> **floating**: `WorkspaceFloating`

Defined in: [workspace.svelte.ts:2081](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2081)

***

### focusedHostId

> **focusedHostId**: `string`

Defined in: [workspace.svelte.ts:2070](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2070)

***

### focusMode

> **focusMode**: `WorkspaceFocusModeState` \| `null`

Defined in: [workspace.svelte.ts:2069](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2069)

***

### layoutReady

> **layoutReady**: `boolean`

Defined in: [workspace.svelte.ts:2082](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2082)

***

### leftRibbon

> **leftRibbon**: `WorkspaceRibbon`

Defined in: [workspace.svelte.ts:2105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2105)

***

### leftSplit

> **leftSplit**: [`WorkspaceSidedock`](WorkspaceSidedock.md)

Defined in: [workspace.svelte.ts:2071](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2071)

***

### rightRibbon

> **rightRibbon**: `WorkspaceRibbon`

Defined in: [workspace.svelte.ts:2106](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2106)

***

### rightSplit

> **rightSplit**: [`WorkspaceSidedock`](WorkspaceSidedock.md)

Defined in: [workspace.svelte.ts:2075](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2075)

***

### rootContainer

> **rootContainer**: `WorkspaceRoot`

Defined in: [workspace.svelte.ts:2062](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2062)

***

### rootSplit

> **rootSplit**: `WorkspaceView`

Defined in: [workspace.svelte.ts:2063](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2063)

***

### statusCompatEl

> **statusCompatEl**: `HTMLElement`

Defined in: [workspace.svelte.ts:2104](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2104)

***

### statusEl

> **statusEl**: `HTMLElement`

Defined in: [workspace.svelte.ts:2103](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2103)

## Accessors

### activeEditor

#### Get Signature

> **get** **activeEditor**(): [`MarkdownFileInfo`](../interfaces/MarkdownFileInfo.md) \| `null`

Defined in: [workspace.svelte.ts:2667](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2667)

##### Returns

[`MarkdownFileInfo`](../interfaces/MarkdownFileInfo.md) \| `null`

***

### activeLeaf

#### Get Signature

> **get** **activeLeaf**(): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:2641](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2641)

##### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

#### Set Signature

> **set** **activeLeaf**(`leaf`): `void`

Defined in: [workspace.svelte.ts:2663](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2663)

##### Parameters

###### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

##### Returns

`void`

***

### activeRootLeaf

#### Get Signature

> **get** **activeRootLeaf**(): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:2652](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2652)

##### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### bottomPanelAlignment

#### Get Signature

> **get** **bottomPanelAlignment**(): `WorkspaceBottomPanelAlignment`

Defined in: [workspace.svelte.ts:5329](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5329)

Configured desktop span of the bottom panel.

##### Returns

`WorkspaceBottomPanelAlignment`

***

### isMobileMode

#### Get Signature

> **get** **isMobileMode**(): `boolean`

Defined in: [workspace.svelte.ts:2682](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2682)

##### Returns

`boolean`

## Methods

### activateLeaf()

> **activateLeaf**(`leaf`, `options?`): `boolean`

Defined in: [workspace.svelte.ts:4537](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4537)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

##### options?

`WorkspaceActivateLeafOptions` = `{}`

#### Returns

`boolean`

***

### changeLayout()

> **changeLayout**(`workspace`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:3814](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3814)

#### Parameters

##### workspace

`any`

#### Returns

`Promise`\<`void`\>

***

### clearFocusModeForLeaf()

> **clearFocusModeForLeaf**(`leaf`): `boolean`

Defined in: [workspace.svelte.ts:2732](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2732)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

#### Returns

`boolean`

***

### closeFloatingWindow()

> **closeFloatingWindow**(`window`, `options?`): `void`

Defined in: [workspace.svelte.ts:5179](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5179)

#### Parameters

##### window

`WorkspaceWindow`

##### options?

###### closeHost?

`boolean`

###### operation?

`string`

#### Returns

`void`

***

### closeLeafAndSelectFallback()

> **closeLeafAndSelectFallback**(`leaf`, `options?`): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:4587](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4587)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### options?

`WorkspaceCloseLeafAndSelectFallbackOptions` = `{}`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### collapseFloatingWindow()

> **collapseFloatingWindow**(`window`): `void`

Defined in: [workspace.svelte.ts:5131](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5131)

#### Parameters

##### window

`WorkspaceWindow`

#### Returns

`void`

***

### commitFloatingWindowBounds()

> **commitFloatingWindowBounds**(`window`, `bounds`, `operation?`): `void`

Defined in: [workspace.svelte.ts:5170](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5170)

#### Parameters

##### window

`WorkspaceWindow`

##### bounds

`Partial`\<`Record`\<`"x"` \| `"y"` \| `"width"` \| `"height"`, `number`\>\>

##### operation?

`string` = `"resize-floating-pane"`

#### Returns

`void`

***

### convertSidebarGroupToLeaves()

> **convertSidebarGroupToLeaves**(`group`): [`WorkspaceLeaf`](WorkspaceLeaf.md)[]

Defined in: [workspace.svelte.ts:4814](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4814)

#### Parameters

##### group

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)[]

***

### convertSidebarLeavesToGroup()

> **convertSidebarLeavesToGroup**(`side`, `leaves`, `options?`): [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

Defined in: [workspace.svelte.ts:4770](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4770)

#### Parameters

##### side

`SidebarSide`

##### leaves

[`WorkspaceLeaf`](WorkspaceLeaf.md)[]

##### options?

`SidebarGroupOptions` & `object` = `{}`

#### Returns

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

***

### createLeafBySplit()

> **createLeafBySplit**(`leaf`, `direction?`, `before?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4635](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4635)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### direction?

`SplitDirection` = `"vertical"`

##### before?

`boolean` = `false`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### createLeafInParent()

> **createLeafInParent**(`parent`, `index`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4629](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4629)

#### Parameters

##### parent

[`WorkspaceSplit`](WorkspaceSplit.md)

##### index

`number`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### createOnDemandPluginInstallView()

> **createOnDemandPluginInstallView**(`leaf`, `file`, `options?`): `Promise`\<`OnDemandPluginInstallView` \| `null`\>

Defined in: [workspace.svelte.ts:4227](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4227)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### file

[`TFile`](TFile.md)

##### options?

###### confirm?

`boolean`

#### Returns

`Promise`\<`OnDemandPluginInstallView` \| `null`\>

***

### detachLeavesOfType()

> **detachLeavesOfType**(`viewType`): `void`

Defined in: [workspace.svelte.ts:4520](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4520)

Remove all leaves of the given type.

#### Parameters

##### viewType

`string`

#### Returns

`void`

***

### determineViewType()

> **determineViewType**(`type`): `string` \| `undefined`

Defined in: [workspace.svelte.ts:4210](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4210)

#### Parameters

##### type

`string`

#### Returns

`string` \| `undefined`

***

### determineViewTypeForPath()

> **determineViewTypeForPath**(`path`): `string` \| `undefined`

Defined in: [workspace.svelte.ts:4220](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4220)

#### Parameters

##### path

`string`

#### Returns

`string` \| `undefined`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}\>\[`Extract`\<`T`, `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatch`](EventDispatcher.md#dispatch)

***

### disposeWorkspaceHost()

> **disposeWorkspaceHost**(): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:3312](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3312)

Dispose the API-owned shell controller and its compatibility bridges.

#### Returns

`Promise`\<`void`\>

***

### dropWorkspaceItemOnTabs()

> **dropWorkspaceItemOnTabs**(`parent`, `options`): `Promise`\<`boolean`\>

Defined in: [workspace.svelte.ts:2318](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2318)

#### Parameters

##### parent

[`WorkspaceTabs`](WorkspaceTabs.md) \| [`WorkspaceSplit`](WorkspaceSplit.md)\<`EventMap`\<`T`\>\>

##### options

###### file?

[`TFile`](TFile.md)

###### item?

[`WorkspaceLeaf`](WorkspaceLeaf.md)

###### operation?

`string`

###### position

`WorkspaceLayoutDropPosition`

###### source?

`WorkspaceLayoutDropSource`

#### Returns

`Promise`\<`boolean`\>

***

### duplicateLeaf()

> **duplicateLeaf**(`leaf`, `leafType`, `direction?`): `Promise`\<[`WorkspaceLeaf`](WorkspaceLeaf.md)\>

Defined in: [workspace.svelte.ts:5344](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5344)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### leafType

`boolean` \| `PaneType`

##### direction?

`SplitDirection` = `"vertical"`

#### Returns

`Promise`\<[`WorkspaceLeaf`](WorkspaceLeaf.md)\>

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}\>\[`Extract`\<`T`, `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`emit`](EventDispatcher.md#emit)

***

### endLayoutDrag()

> **endLayoutDrag**(`options`): `WorkspaceLayoutDropEvent`

Defined in: [workspace.svelte.ts:2242](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2242)

#### Parameters

##### options

`Omit`\<`WorkspaceLayoutDropEvent`, `"defaultPrevented"` \| `"preventDefault"`\>

#### Returns

`WorkspaceLayoutDropEvent`

***

### ensureSideLeaf()

> **ensureSideLeaf**(`type`, `sideOrOptions?`, `options?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4879](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4879)

#### Parameters

##### type

`string`

##### sideOrOptions?

`SidebarSide` \| `EnsureSideLeafOptions` = `"right"`

##### options?

`EnsureSideLeafOptions` = `{}`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### enterFocusMode()

> **enterFocusMode**(`leaf?`): `boolean`

Defined in: [workspace.svelte.ts:2712](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2712)

#### Parameters

##### leaf?

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null` = `...`

#### Returns

`boolean`

***

### exitFocusMode()

> **exitFocusMode**(): `boolean`

Defined in: [workspace.svelte.ts:2728](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2728)

#### Returns

`boolean`

***

### flushLayout()

> **flushLayout**(): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2137](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2137)

Drain the single layout writer before a host closes, reloads or switches.

#### Returns

`Promise`\<`void`\>

***

### flushPluginChanges()

> **flushPluginChanges**(): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2132](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2132)

Await admitted App Shell transitions before the owning host tears down.

#### Returns

`Promise`\<`void`\>

***

### focusFloatingWindow()

> **focusFloatingWindow**(`window`): `void`

Defined in: [workspace.svelte.ts:5098](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5098)

#### Parameters

##### window

`WorkspaceWindow`

#### Returns

`void`

***

### focusRootHost()

> **focusRootHost**(): `void`

Defined in: [workspace.svelte.ts:2637](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2637)

#### Returns

`void`

***

### getActiveFile()

> **getActiveFile**(): [`TFile`](TFile.md) \| `null`

Defined in: [workspace.svelte.ts:4380](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4380)

Returns the file for the current view if it's a `FileView`. Otherwise, it
will return the most recently active file.

#### Returns

[`TFile`](TFile.md) \| `null`

***

### getActiveViewOfType()

> **getActiveViewOfType**\<`T`\>(`type`): `T` \| `null`

Defined in: [workspace.svelte.ts:4357](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4357)

Get the currently active view of a given type.

#### Type Parameters

##### T

`T` *extends* [`View`](View.md)

#### Parameters

##### type

`Constructor`\<`T`\>

#### Returns

`T` \| `null`

***

### getBottomLeaf()

> **getBottomLeaf**(): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:5287](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5287)

Create and activate a new leaf in the bottom panel.

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### getCommandHostDocument()

> **getCommandHostDocument**(`hostId?`): `Document`

Defined in: [workspace.svelte.ts:2612](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2612)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`Document`

***

### getCommandHostIdForLeaf()

> **getCommandHostIdForLeaf**(`target`): `string`

Defined in: [workspace.svelte.ts:2599](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2599)

#### Parameters

##### target

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

#### Returns

`string`

***

### getCommandHostLeaf()

> **getCommandHostLeaf**(`hostId`): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:2603](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2603)

#### Parameters

##### hostId

`string`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### getEditorAssociationForPath()

> **getEditorAssociationForPath**(`path`): \{ `editorViewId`: `string`; `pattern`: `string`; `view?`: `RegisteredEditorViewContribution`; \} \| `undefined`

Defined in: [workspace.svelte.ts:4041](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4041)

#### Parameters

##### path

`string`

#### Returns

\{ `editorViewId`: `string`; `pattern`: `string`; `view?`: `RegisteredEditorViewContribution`; \} \| `undefined`

***

### getFileIconForPath()

> **getFileIconForPath**(`path`): `string` \| `undefined`

Defined in: [workspace.svelte.ts:4092](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4092)

Resolve presentation metadata without activating plugins or creating views.

#### Parameters

##### path

`string`

#### Returns

`string` \| `undefined`

***

### getFocusedCommandHostId()

> **getFocusedCommandHostId**(): `string`

Defined in: [workspace.svelte.ts:2625](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2625)

#### Returns

`string`

***

### getGroupLeaves()

> **getGroupLeaves**(`group`): [`WorkspaceLeaf`](WorkspaceLeaf.md)[]

Defined in: [workspace.svelte.ts:4673](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4673)

#### Parameters

##### group

`string`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)[]

***

### getLastOpenFiles()

> **getLastOpenFiles**(): `string`[]

Defined in: [workspace.svelte.ts:4830](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4830)

#### Returns

`string`[]

***

### getLayout()

> **getLayout**(): `Record`\<`string`, `unknown`\>

Defined in: [workspace.svelte.ts:3828](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3828)

#### Returns

`Record`\<`string`, `unknown`\>

***

### getLeaf()

> **getLeaf**(`newLeaf?`, `direction?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:5423](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5423)

If newLeaf is false (or not set) then an existing leaf which can be
navigated is returned, or a new leaf will be created if there was no leaf
available.

If newLeaf is `'tab'` or `true` then a new leaf will be created in the
preferred location within the root split and returned.

If newLeaf is `'split'` then a new leaf will be created adjacent to the
currently active leaf.

If newLeaf is `'window'` then a popout window will be created with a new
leaf inside.

#### Parameters

##### newLeaf?

`boolean` \| `PaneType`

##### direction?

`SplitDirection`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### getLeafById()

> **getLeafById**(`id`): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:4344](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4344)

Retrieve a leaf by its id.

#### Parameters

##### id

`string`

Id of the leaf to retrieve.

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### getLeavesOfType()

> **getLeavesOfType**(`viewType`): [`WorkspaceLeaf`](WorkspaceLeaf.md)[]

Defined in: [workspace.svelte.ts:4526](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4526)

#### Parameters

##### viewType

`string`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)[]

***

### getLeftLeaf()

> **getLeftLeaf**(`split`): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:5277](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5277)

Create a new leaf inside the left sidebar.

#### Parameters

##### split

`boolean`

Should the existing split be split up?

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### getMostRecentLeaf()

> **getMostRecentLeaf**(): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:3760](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3760)

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### getOpenLeafEntries()

> **getOpenLeafEntries**(`options?`): `WorkspaceOpenLeafEntry`[]

Defined in: [workspace.svelte.ts:4417](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4417)

#### Parameters

##### options?

`WorkspaceOpenLeafEntryOptions` = `{}`

#### Returns

`WorkspaceOpenLeafEntry`[]

***

### getOrCreateSidebarGroup()

> **getOrCreateSidebarGroup**(`side`, `group`, `options?`): [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

Defined in: [workspace.svelte.ts:4741](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4741)

#### Parameters

##### side

`SidebarSide`

##### group

`string`

##### options?

`SidebarGroupOptions` = `{}`

#### Returns

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

***

### getRecentFiles()

> **getRecentFiles**(): [`TFile`](TFile.md)[]

Defined in: [workspace.svelte.ts:4841](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4841)

#### Returns

[`TFile`](TFile.md)[]

***

### getRightLeaf()

> **getRightLeaf**(`split`): [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

Defined in: [workspace.svelte.ts:5262](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5262)

Create a new leaf inside the right sidebar.

#### Parameters

##### split

`boolean`

Should the existing split be split up?

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`

***

### getSidebarGroup()

> **getSidebarGroup**(`side`, `group`): [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md) \| `null`

Defined in: [workspace.svelte.ts:4729](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4729)

#### Parameters

##### side

`SidebarSide`

##### group

`string`

#### Returns

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md) \| `null`

***

### getSidebarGroupLeaves()

> **getSidebarGroupLeaves**(`side`, `group`): [`WorkspaceLeaf`](WorkspaceLeaf.md)[]

Defined in: [workspace.svelte.ts:4766](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4766)

#### Parameters

##### side

`SidebarSide`

##### group

`string`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)[]

***

### getSidebarGroups()

> **getSidebarGroups**(`side?`): [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)[]

Defined in: [workspace.svelte.ts:4712](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4712)

#### Parameters

##### side?

`SidebarSide`

#### Returns

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)[]

***

### getUnpinnedLeaf()

> **getUnpinnedLeaf**(): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4669](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4669)

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### getVisibleHintTargets()

> **getVisibleHintTargets**(): [`WorkspaceHintTarget`](../interfaces/WorkspaceHintTarget.md)[]

Defined in: [workspace.svelte.ts:3764](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3764)

#### Returns

[`WorkspaceHintTarget`](../interfaces/WorkspaceHintTarget.md)[]

***

### handleLinkContextMenu()

> **handleLinkContextMenu**(`menu`, `linktext`, `sourcePath`, `event?`): `void`

Defined in: [workspace.svelte.ts:4924](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4924)

#### Parameters

##### menu

[`Menu`](Menu.md)

##### linktext

`string`

##### sourcePath

`string`

##### event?

`MouseEvent`

#### Returns

`void`

***

### isFocusModeForTabs()

> **isFocusModeForTabs**(`tabs`): `boolean`

Defined in: [workspace.svelte.ts:2740](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2740)

#### Parameters

##### tabs

[`WorkspaceTabs`](WorkspaceTabs.md)

#### Returns

`boolean`

***

### iterateAllLeaves()

> **iterateAllLeaves**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:4401](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4401)

Iterate through all leaves, including main area leaves, floating leaves,
and sidebar leaves.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`leaf`) => `T`

#### Returns

`void` \| `T`

***

### iterateRootLeaves()

> **iterateRootLeaves**(`callback`): `void`

Defined in: [workspace.svelte.ts:4370](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4370)

Iterate through all leaves in the main area of the workspace.

#### Parameters

##### callback

(`leaf`) => `any`

#### Returns

`void`

***

### listNamedLayouts()

> **listNamedLayouts**(): `Promise`\<`string`[]\>

Defined in: [workspace.svelte.ts:2894](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2894)

#### Returns

`Promise`\<`string`[]\>

***

### loadLayout()

> **loadLayout**(`file?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2817](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2817)

#### Parameters

##### file?

`string` = `"workspace.json"`

#### Returns

`Promise`\<`void`\>

***

### loadNamedLayout()

> **loadNamedLayout**(`name`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2912](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2912)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### maximizeFloatingWindow()

> **maximizeFloatingWindow**(`window`): `void`

Defined in: [workspace.svelte.ts:5147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5147)

#### Parameters

##### window

`WorkspaceWindow`

#### Returns

`void`

***

### minimizeFloatingWindow()

> **minimizeFloatingWindow**(`window`): `void`

Defined in: [workspace.svelte.ts:5139](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5139)

#### Parameters

##### window

`WorkspaceWindow`

#### Returns

`void`

***

### moveLeafToPopout()

> **moveLeafToPopout**(`leaf`, `data?`): `WorkspaceWindow`

Defined in: [workspace.svelte.ts:4937](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4937)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### data?

`WorkspaceWindowInitData`

#### Returns

`WorkspaceWindow`

***

### moveLeafToSidebarGroup()

> **moveLeafToSidebarGroup**(`leaf`, `group`, `options?`): `boolean`

Defined in: [workspace.svelte.ts:2518](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2518)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### group

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

##### options?

###### operation?

`string`

###### source?

`WorkspaceLayoutDropSource`

#### Returns

`boolean`

***

### moveLeafToSidebarGroupIndex()

> **moveLeafToSidebarGroupIndex**(`leaf`, `group`, `index`, `options`): `boolean`

Defined in: [workspace.svelte.ts:2467](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2467)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### group

[`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

##### index

`number`

##### options

###### operation?

`string`

###### position

`"bottom"` \| `"top"`

###### source?

`WorkspaceLayoutDropSource`

#### Returns

`boolean`

***

### moveWorkspaceChildToFloating()

> **moveWorkspaceChildToFloating**(`item`, `data?`, `options?`): `WorkspaceWindow`

Defined in: [workspace.svelte.ts:4993](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4993)

#### Parameters

##### item

`WorkspaceTabsChild`

##### data?

`WorkspaceWindowInitData`

##### options?

###### operation?

`string`

###### source?

`WorkspaceLayoutDropSource`

#### Returns

`WorkspaceWindow`

***

### moveWorkspaceChildToPopout()

> **moveWorkspaceChildToPopout**(`item`, `data?`): `WorkspaceWindow`

Defined in: [workspace.svelte.ts:4948](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4948)

#### Parameters

##### item

`WorkspaceTabsChild`

##### data?

`WorkspaceWindowInitData`

#### Returns

`WorkspaceWindow`

***

### moveWorkspaceChildToTabIndex()

> **moveWorkspaceChildToTabIndex**(`item`, `target`, `index`, `options`): `boolean`

Defined in: [workspace.svelte.ts:2251](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2251)

#### Parameters

##### item

[`WorkspaceLeaf`](WorkspaceLeaf.md) \| [`WorkspaceSidebarGroup`](WorkspaceSidebarGroup.md)

##### target

[`WorkspaceTabs`](WorkspaceTabs.md)

##### index

`number`

##### options

###### operation?

`string`

###### position

`"right"` \| `"left"`

###### source?

`WorkspaceLayoutDropSource`

#### Returns

`boolean`

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

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

[`EventDispatcher`](EventDispatcher.md).[`off`](EventDispatcher.md#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### ref

`EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`offref`](EventDispatcher.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`on`](EventDispatcher.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`once`](EventDispatcher.md#once)

***

### onFileIconsChanged()

> **onFileIconsChanged**(`listener`): () => `void`

Defined in: [workspace.svelte.ts:4103](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4103)

#### Parameters

##### listener

() => `void`

#### Returns

() => `void`

***

### onLayoutReady()

> **onLayoutReady**(`callback`): `void`

Defined in: [workspace.svelte.ts:3022](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3022)

Runs the callback function right away if layout is already ready, or push
it to a queue to be called later when layout is ready.

#### Parameters

##### callback

() => `any`

#### Returns

`void`

***

### openFloatingLeaf()

> **openFloatingLeaf**(`data?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4976](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4976)

#### Parameters

##### data?

`WorkspaceWindowInitData`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### openLinkText()

> **openLinkText**(`linktext`, `sourcePath`, `newLeaf?`, `openState?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:4854](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4854)

#### Parameters

##### linktext

`string`

##### sourcePath

`string`

##### newLeaf?

`boolean` \| `PaneType`

##### openState?

[`OpenViewState`](../interfaces/OpenViewState.md)

#### Returns

`Promise`\<`void`\>

***

### openPopoutLeaf()

> **openPopoutLeaf**(`data?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4959](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4959)

#### Parameters

##### data?

`WorkspaceWindowInitData`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### projectCompatibilityRibbonItem()

> **projectCompatibilityRibbonItem**(`item`, `side`): () => `void`

Defined in: [workspace.svelte.ts:2180](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2180)

#### Parameters

##### item

`WorkspaceRibbonItem`

##### side

`"right"` \| `"left"`

#### Returns

() => `void`

***

### reconcileFileReference()

> **reconcileFileReference**(`oldPath`, `file`): `void`

Defined in: [workspace.svelte.ts:4390](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4390)

Reconcile the remembered file through its workspace owner.

#### Parameters

##### oldPath

`string`

##### file

[`TFile`](TFile.md) \| `null`

#### Returns

`void`

***

### registerDiagnosticOpener()

> **registerDiagnosticOpener**(`opener`): () => `void`

Defined in: [workspace.svelte.ts:3160](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3160)

Register an owned opener for application-specific diagnostic resources.

#### Parameters

##### opener

(`location`) => `boolean` \| `Promise`\<`boolean`\>

#### Returns

() => `void`

***

### registerEditorView()

> **registerEditorView**(`contribution`): () => `void`

Defined in: [workspace.svelte.ts:3883](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3883)

#### Parameters

##### contribution

`EditorViewContribution`

#### Returns

() => `void`

***

### registerExtensions()

> **registerExtensions**(`extensions`, `viewType`, `options?`): () => `void`

Defined in: [workspace.svelte.ts:4116](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4116)

#### Parameters

##### extensions

`string`[]

##### viewType

`string`

##### options?

`ExtensionRegistrationOptions`

#### Returns

() => `void`

***

### registerHoverLinkSource()

> **registerHoverLinkSource**(`id`, `info`): `void`

Defined in: [workspace.svelte.ts:3913](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3913)

Registers a view with the 'Page preview' core plugin as an emitter of the
'hover-link' event.

#### Parameters

##### id

`string`

##### info

`HoverLinkSource`

#### Returns

`void`

***

### registerSidebarView()

> **registerSidebarView**(`type`, `options?`): `void`

Defined in: [workspace.svelte.ts:3896](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3896)

#### Parameters

##### type

`string`

##### options?

`SidebarViewPlacementOptions` = `{}`

#### Returns

`void`

***

### registerView()

> **registerView**(`type`, `viewCreator`): `void`

Defined in: [workspace.svelte.ts:3877](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3877)

#### Parameters

##### type

`string`

##### viewCreator

`ViewCreator`

#### Returns

`void`

***

### requestSaveLayout()

> **requestSaveLayout**(`event?`): `void`

Defined in: [workspace.svelte.ts:2144](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2144)

#### Parameters

##### event?

`WorkspaceLayoutChangeEvent` = `...`

#### Returns

`void`

***

### resetLayoutToDefault()

> **resetLayoutToDefault**(): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2928](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2928)

#### Returns

`Promise`\<`void`\>

***

### restoreFloatingWindow()

> **restoreFloatingWindow**(`window`): `void`

Defined in: [workspace.svelte.ts:5155](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5155)

#### Parameters

##### window

`WorkspaceWindow`

#### Returns

`void`

***

### revealLeaf()

> **revealLeaf**(`leaf`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:3839](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3839)

Bring a given leaf to the foreground. If the leaf is in a sidebar, the
sidebar will be uncollapsed. `await` this function to ensure your view has
been fully loaded and is not deferred.

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

#### Returns

`Promise`\<`void`\>

***

### saveNamedLayout()

> **saveNamedLayout**(`name`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:2901](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2901)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### setActiveLeaf()

> **setActiveLeaf**(`leaf`, `params?`): `void`

Defined in: [workspace.svelte.ts:4327](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4327)

#### Parameters

##### leaf

[`WorkspaceLeaf`](WorkspaceLeaf.md)

##### params?

###### focus?

`boolean`

#### Returns

`void`

***

### setBottomPanelAlignment()

> **setBottomPanelAlignment**(`alignment`): `boolean`

Defined in: [workspace.svelte.ts:5336](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5336)

Update the live design-core shell setting without writing workspace JSON.

#### Parameters

##### alignment

`WorkspaceBottomPanelAlignment`

#### Returns

`boolean`

***

### setBottomPanelOpen()

> **setBottomPanelOpen**(`open`): `void`

Defined in: [workspace.svelte.ts:5302](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5302)

Open or close the bottom panel without changing its last size.

#### Parameters

##### open

`boolean`

#### Returns

`void`

***

### setBottomPanelSize()

> **setBottomPanelSize**(`size`): `void`

Defined in: [workspace.svelte.ts:5312](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5312)

Resize the bottom panel using design-core's supported range.

#### Parameters

##### size

`number`

#### Returns

`void`

***

### setDisplayMode()

> **setDisplayMode**(`mode`, `reason?`): `void`

Defined in: [workspace.svelte.ts:2687](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2687)

#### Parameters

##### mode

`WorkspaceDisplayMode`

##### reason?

`WorkspaceDisplayModeReason` = `"manual"`

#### Returns

`void`

***

### setFloatingWindowBounds()

> **setFloatingWindowBounds**(`window`, `bounds`): `void`

Defined in: [workspace.svelte.ts:5163](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5163)

#### Parameters

##### window

`WorkspaceWindow`

##### bounds

`Partial`\<`Record`\<`"x"` \| `"y"` \| `"width"` \| `"height"`, `number`\>\>

#### Returns

`void`

***

### setFloatingWindowDisplayState()

> **setFloatingWindowDisplayState**(`window`, `displayState`, `operation?`): `void`

Defined in: [workspace.svelte.ts:5117](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5117)

#### Parameters

##### window

`WorkspaceWindow`

##### displayState

`WorkspaceWindowDisplayState`

##### operation?

`string` = `...`

#### Returns

`void`

***

### splitActiveLeaf()

> **splitActiveLeaf**(`direction?`): [`WorkspaceLeaf`](WorkspaceLeaf.md)

Defined in: [workspace.svelte.ts:4665](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4665)

#### Parameters

##### direction?

`SplitDirection`

#### Returns

[`WorkspaceLeaf`](WorkspaceLeaf.md)

***

### startLayoutDrag()

> **startLayoutDrag**(`options`): `WorkspaceLayoutDropEvent`

Defined in: [workspace.svelte.ts:2233](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2233)

#### Parameters

##### options

`Omit`\<`WorkspaceLayoutDropEvent`, `"defaultPrevented"` \| `"preventDefault"`\>

#### Returns

`WorkspaceLayoutDropEvent`

***

### supportsPopoutWindows()

> **supportsPopoutWindows**(): `boolean`

Defined in: [workspace.svelte.ts:5007](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5007)

#### Returns

`boolean`

***

### toggleBottomPanel()

> **toggleBottomPanel**(): `void`

Defined in: [workspace.svelte.ts:5324](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L5324)

Toggle the bottom panel while retaining its last expanded size.

#### Returns

`void`

***

### toJson()

> **toJson**(): `WorkspaceJson`

Defined in: [workspace.svelte.ts:2744](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2744)

#### Returns

`WorkspaceJson`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}\>\[`Extract`\<`T`, `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`trigger`](EventDispatcher.md#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`

#### Parameters

##### evt

`EventRef`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `active-leaf-change`: \[`leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md) \| `null`\]; `display-mode-change`: \[`event`: `WorkspaceDisplayModeChangeEvent`\]; `editor-menu`: \[`menu`: [`Menu`](Menu.md), `editor`: [`Editor`](Editor.md)\]; `editor-updated`: \[`editor`: [`Editor`](Editor.md), `transactions`: readonly `TransactionSpec`[]\]; `file-change`: \[`file`: [`TFile`](TFile.md), `event`: `string`\]; `file-menu`: \[`menu`: [`Menu`](Menu.md), `file`: [`TAbstractFile`](TAbstractFile.md), `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `file-open`: \[`file`: [`TFile`](TFile.md) \| `null`\]; `files-menu`: \[`menu`: [`Menu`](Menu.md), `files`: [`TAbstractFile`](TAbstractFile.md)[], `source`: `string`, `leaf?`: [`WorkspaceLeaf`](WorkspaceLeaf.md)\]; `focus-mode-change`: \[`state`: `WorkspaceFocusModeState` \| `null`\]; `layout-change`: \[`event`: `WorkspaceLayoutChangeEvent`\]; `layout-did-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-end`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-drag-start`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-ready`: \[\]; `layout-will-drop`: \[`event`: `WorkspaceLayoutDropEvent`\]; `layout-will-show-overlay`: \[`event`: `WorkspaceLayoutDropEvent`\]; `quick-preview`: \[`file`: [`TFile`](TFile.md), `string`\]; `resize`: \[`any`\]; \}\>\[`Extract`\<`T`, `"resize"` \| `"editor-updated"` \| `"active-leaf-change"` \| `"display-mode-change"` \| `"focus-mode-change"` \| `"layout-ready"` \| `"layout-change"` \| `"layout-drag-start"` \| `"layout-drag-end"` \| `"layout-will-show-overlay"` \| `"layout-will-drop"` \| `"layout-did-drop"` \| `"quick-preview"` \| `"file-open"` \| `"file-change"` \| `"file-menu"` \| `"files-menu"` \| `"editor-menu"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`tryTrigger`](EventDispatcher.md#trytrigger)

***

### unregisterExtensions()

> **unregisterExtensions**(`extensions`, `viewType`): `void`

Defined in: [workspace.svelte.ts:4182](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4182)

#### Parameters

##### extensions

`string`[]

##### viewType

`string`

#### Returns

`void`

***

### unregisterHoverLinkSource()

> **unregisterHoverLinkSource**(`id`): `void`

Defined in: [workspace.svelte.ts:3917](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3917)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### unregisterSidebarView()

> **unregisterSidebarView**(`type`): `void`

Defined in: [workspace.svelte.ts:3903](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3903)

#### Parameters

##### type

`string`

#### Returns

`void`

***

### unregisterView()

> **unregisterView**(`type`): `boolean`

Defined in: [workspace.svelte.ts:3939](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3939)

#### Parameters

##### type

`string`

#### Returns

`boolean`

***

### updateOptions()

> **updateOptions**(): `void`

Defined in: [workspace.svelte.ts:3921](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L3921)

#### Returns

`void`

***

### viewCreator()

> **viewCreator**(`type`): `ViewCreator` \| `undefined`

Defined in: [workspace.svelte.ts:4311](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L4311)

#### Parameters

##### type

`string` \| [`TFile`](TFile.md)

#### Returns

`ViewCreator` \| `undefined`

***

### willShowLayoutDropOverlay()

> **willShowLayoutDropOverlay**(`options`): `WorkspaceLayoutDropEvent`

Defined in: [workspace.svelte.ts:2224](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L2224)

#### Parameters

##### options

`Omit`\<`WorkspaceLayoutDropEvent`, `"defaultPrevented"` \| `"preventDefault"`\>

#### Returns

`WorkspaceLayoutDropEvent`
