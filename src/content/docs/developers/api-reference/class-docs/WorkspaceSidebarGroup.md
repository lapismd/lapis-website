---
title: "WorkspaceSidebarGroup"
description: "Source-generated public API reference for WorkspaceSidebarGroup."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [workspace.svelte.ts:1119](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1119)

Sidebar-only container that groups leaves into a named view container.

## Extends

- `WorkspaceParent`

## Constructors

### Constructor

> **new WorkspaceSidebarGroup**(`options?`): `WorkspaceSidebarGroup`

Defined in: [workspace.svelte.ts:1130](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1130)

#### Parameters

##### options?

`SidebarGroupOptions` = `{}`

#### Returns

`WorkspaceSidebarGroup`

#### Overrides

`WorkspaceParent.constructor`

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

`WorkspaceParent._root`

***

### children

> **children**: [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)[]

Defined in: [workspace.svelte.ts:1128](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1128)

***

### collapsed

> **collapsed**: `Record`\<`string`, `boolean`\>

Defined in: [workspace.svelte.ts:1125](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1125)

***

### hiddenLeafIds

> **hiddenLeafIds**: `string`[]

Defined in: [workspace.svelte.ts:1124](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1124)

***

### icon

> **icon**: `string` \| `undefined`

Defined in: [workspace.svelte.ts:1123](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1123)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

`WorkspaceParent.id`

***

### name

> **name**: `string`

Defined in: [workspace.svelte.ts:1122](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1122)

***

### panelSizes

> **panelSizes**: `Record`\<`string`, `number`\>

Defined in: [workspace.svelte.ts:1126](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1126)

***

### parent

> **parent**: [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/)

Defined in: [workspace.svelte.ts:1120](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1120)

#### Overrides

`WorkspaceParent.parent`

***

### selectedLeafId

> **selectedLeafId**: `string` \| `undefined`

Defined in: [workspace.svelte.ts:1127](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1127)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](/developers/api-reference/class-docs/app/)

Defined in: [workspace.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L304)

Resolve the owning application before using the compatibility alias.

##### Returns

[`App`](/developers/api-reference/class-docs/app/)

#### Inherited from

`WorkspaceParent.app`

***

### application

#### Get Signature

> **get** **application**(): [`App`](/developers/api-reference/class-docs/app/) \| `undefined`

Defined in: [workspace.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L299)

The application that owns this item, when it has been attached.

##### Returns

[`App`](/developers/api-reference/class-docs/app/) \| `undefined`

#### Inherited from

`WorkspaceParent.application`

***

### workspace

#### Get Signature

> **get** **workspace**(): [`Workspace`](/developers/api-reference/class-docs/workspace/) \| `undefined`

Defined in: [workspace.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L294)

The workspace that owns this item, when it has been attached.

##### Returns

[`Workspace`](/developers/api-reference/class-docs/workspace/) \| `undefined`

#### Inherited from

`WorkspaceParent.workspace`

## Methods

### addChild()

> **addChild**(`child`, `index?`): `void`

Defined in: [workspace.svelte.ts:1146](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1146)

#### Parameters

##### child

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

##### index?

`number`

#### Returns

`void`

***

### bindWorkspace()

> **bindWorkspace**(`workspace`): `this`

Defined in: [workspace.svelte.ts:287](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L287)

Bind a root workspace item to its owning workspace.

#### Parameters

##### workspace

[`Workspace`](/developers/api-reference/class-docs/workspace/)

#### Returns

`this`

#### Inherited from

`WorkspaceParent.bindWorkspace`

***

### detach()

> **detach**(`softDelete?`): `WorkspaceTabsChild` \| `undefined`

Defined in: [workspace.svelte.ts:1142](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1142)

#### Parameters

##### softDelete?

`boolean` = `false`

#### Returns

`WorkspaceTabsChild` \| `undefined`

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

`WorkspaceParent.dispatch`

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

`WorkspaceParent.emit`

***

### getLeafPanelSize()

> **getLeafPanelSize**(`leaf`): `number` \| `undefined`

Defined in: [workspace.svelte.ts:1253](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1253)

#### Parameters

##### leaf

`string` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`number` \| `undefined`

***

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

`WorkspaceParent.getRoot`

***

### getSelectedLeaf()

> **getSelectedLeaf**(): [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `null`

Defined in: [workspace.svelte.ts:1195](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1195)

#### Returns

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `null`

***

### isLeafCollapsed()

> **isLeafCollapsed**(`leaf`): `boolean`

Defined in: [workspace.svelte.ts:1242](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1242)

#### Parameters

##### leaf

`string` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`boolean`

***

### isLeafHidden()

> **isLeafHidden**(`leaf`): `boolean`

Defined in: [workspace.svelte.ts:1225](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1225)

#### Parameters

##### leaf

`string` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`boolean`

***

### iterateAllLeaves()

> **iterateAllLeaves**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:1216](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1216)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`leaf`) => `T`

#### Returns

`void` \| `T`

***

### loadJson()

> **loadJson**(`layout`, `projectionItems?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:1279](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1279)

#### Parameters

##### layout

`WorkspaceSidebarGroupJson`

##### projectionItems?

`WorkspaceProjectionItems`

#### Returns

`Promise`\<`void`\>

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

`WorkspaceParent.off`

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### ref

`EventRef`\<`EventMap`\<`T`\>, `T`\>

#### Returns

`void`

#### Inherited from

`WorkspaceParent.offref`

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`EventMap`\<`T`\>, `T`, `any`\>

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

`EventRef`\<`EventMap`\<`T`\>, `T`, `any`\>

#### Inherited from

`WorkspaceParent.on`

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`EventMap`\<`T`\>, `T`, `any`\>

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

`EventRef`\<`EventMap`\<`T`\>, `T`, `any`\>

#### Inherited from

`WorkspaceParent.once`

***

### removeChild()

> **removeChild**(`index`, `softDelete?`): [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `undefined`

Defined in: [workspace.svelte.ts:1163](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1163)

#### Parameters

##### index

`number` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

##### softDelete?

`boolean` = `false`

#### Returns

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `undefined`

***

### selectLeaf()

> **selectLeaf**(`leaf`): `void`

Defined in: [workspace.svelte.ts:1206](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1206)

#### Parameters

##### leaf

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

#### Returns

`void`

***

### setLeafCollapsed()

> **setLeafCollapsed**(`leaf`, `collapsed`): `void`

Defined in: [workspace.svelte.ts:1247](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1247)

#### Parameters

##### leaf

`string` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

##### collapsed

`boolean`

#### Returns

`void`

***

### setLeafHidden()

> **setLeafHidden**(`leaf`, `hidden`): `void`

Defined in: [workspace.svelte.ts:1230](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1230)

#### Parameters

##### leaf

`string` \| [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)

##### hidden

`boolean`

#### Returns

`void`

***

### setPanelSizes()

> **setPanelSizes**(`leaves`, `sizes`): `void`

Defined in: [workspace.svelte.ts:1258](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1258)

#### Parameters

##### leaves

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)[]

##### sizes

`number`[]

#### Returns

`void`

***

### toJson()

> **toJson**(): `WorkspaceSidebarGroupJson`

Defined in: [workspace.svelte.ts:1314](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1314)

#### Returns

`WorkspaceSidebarGroupJson`

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

`WorkspaceParent.trigger`

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### evt

`EventRef`\<`EventMap`\<`T`\>, `T`\>

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

`WorkspaceParent.tryTrigger`
