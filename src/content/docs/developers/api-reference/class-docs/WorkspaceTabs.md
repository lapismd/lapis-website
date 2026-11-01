---
title: "WorkspaceTabs"
description: "Source-generated public API reference for WorkspaceTabs."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [workspace.svelte.ts:1340](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1340)

Tab strip container for root and sidebar workspace leaves.

## Extends

- `WorkspaceParent`

## Constructors

### Constructor

> **new WorkspaceTabs**(`props?`): `WorkspaceTabs`

Defined in: [workspace.svelte.ts:1348](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1348)

#### Parameters

##### props?

`Partial`\<\{ `leaves`: [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/)[]; `stacked`: `boolean`; \}\> = `{}`

#### Returns

`WorkspaceTabs`

#### Overrides

`WorkspaceParent.constructor`

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

`WorkspaceParent._root`

***

### \_selected

> **\_selected**: `string`

Defined in: [workspace.svelte.ts:1343](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1343)

***

### children

> **children**: `WorkspaceTabsChild`[]

Defined in: [workspace.svelte.ts:1346](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1346)

***

### containerEl

> **containerEl**: `HTMLElement` \| `null`

Defined in: [workspace.svelte.ts:1341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1341)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

`WorkspaceParent.id`

***

### parent

> **parent**: [`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/)\<`Record`\<`string`, `any`\>\>

Defined in: [workspace.svelte.ts:1345](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1345)

#### Overrides

`WorkspaceParent.parent`

***

### stacked

> **stacked**: `boolean`

Defined in: [workspace.svelte.ts:1342](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1342)

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

### selected

#### Get Signature

> **get** **selected**(): `string`

Defined in: [workspace.svelte.ts:1409](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1409)

##### Returns

`string`

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [workspace.svelte.ts:1443](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1443)

##### Parameters

###### value

`string` \| `number` \| `WorkspaceTabsChild`

##### Returns

`void`

***

### selectedChild

#### Get Signature

> **get** **selectedChild**(): `WorkspaceTabsChild` \| `undefined`

Defined in: [workspace.svelte.ts:1431](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1431)

##### Returns

`WorkspaceTabsChild` \| `undefined`

***

### selectedIndex

#### Get Signature

> **get** **selectedIndex**(): `number`

Defined in: [workspace.svelte.ts:1427](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1427)

##### Returns

`number`

***

### selectedLeaf

#### Get Signature

> **get** **selectedLeaf**(): [`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `null`

Defined in: [workspace.svelte.ts:1435](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1435)

##### Returns

[`WorkspaceLeaf`](/developers/api-reference/class-docs/workspaceleaf/) \| `null`

***

### sideBar

#### Get Signature

> **get** **sideBar**(): [`WorkspaceSidedock`](/developers/api-reference/class-docs/workspacesidedock/) \| `undefined`

Defined in: [workspace.svelte.ts:1413](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1413)

##### Returns

[`WorkspaceSidedock`](/developers/api-reference/class-docs/workspacesidedock/) \| `undefined`

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

Defined in: [workspace.svelte.ts:1457](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1457)

#### Parameters

##### child

`WorkspaceTabsChild`

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

### closeAll()

> **closeAll**(): `void`

Defined in: [workspace.svelte.ts:1552](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1552)

#### Returns

`void`

***

### detach()

> **detach**(`softDelete?`): `WorkspaceTabs` \| `WorkspaceView` \| `undefined`

Defined in: [workspace.svelte.ts:1453](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1453)

#### Parameters

##### softDelete?

`boolean` = `false`

#### Returns

`WorkspaceTabs` \| `WorkspaceView` \| `undefined`

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

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

`WorkspaceParent.getRoot`

***

### inSideBar()

> **inSideBar**(): `boolean`

Defined in: [workspace.svelte.ts:1423](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1423)

#### Returns

`boolean`

***

### iterateAllLeaves()

> **iterateAllLeaves**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:1484](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1484)

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

Defined in: [workspace.svelte.ts:1360](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1360)

#### Parameters

##### layout

`WorkspaceTabsJson`

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

> **removeChild**(`index`, `softDelete?`): `WorkspaceTabsChild` \| `undefined`

Defined in: [workspace.svelte.ts:1496](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1496)

#### Parameters

##### index

`number` \| `WorkspaceTabsChild`

##### softDelete?

`boolean` = `false`

#### Returns

`WorkspaceTabsChild` \| `undefined`

***

### toJson()

> **toJson**(): `WorkspaceTabsJson`

Defined in: [workspace.svelte.ts:1399](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L1399)

#### Returns

`WorkspaceTabsJson`

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
