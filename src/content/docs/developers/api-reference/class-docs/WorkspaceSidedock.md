---
title: "WorkspaceSidedock"
description: "Source-generated public API reference for WorkspaceSidedock."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [workspace.svelte.ts:674](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L674)

Collapsible split container used for the left and right workspace sidebars.

## Extends

- [`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/)\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>

## Constructors

### Constructor

> **new WorkspaceSidedock**(`options?`): `WorkspaceSidedock`

Defined in: [workspace.svelte.ts:680](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L680)

#### Parameters

##### options?

`Partial`\<`Omit`\<`SidebarStateProps`, `"open"` \| `"setOpen"`\>\> & `object` = `{}`

#### Returns

`WorkspaceSidedock`

#### Overrides

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`constructor`](/developers/api-reference/class-docs/workspacesplit/#constructor)

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`_root`](/developers/api-reference/class-docs/workspacesplit/#_root)

***

### children

> **children**: ([`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/) \| `WorkspaceView`)[]

Defined in: [workspace.svelte.ts:501](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L501)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`children`](/developers/api-reference/class-docs/workspacesplit/#children)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`id`](/developers/api-reference/class-docs/workspacesplit/#id)

***

### parent

> **parent**: `WorkspaceParent`

Defined in: [workspace.svelte.ts:277](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L277)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`parent`](/developers/api-reference/class-docs/workspacesplit/#parent)

***

### sidebar

> **sidebar**: `SidebarState`

Defined in: [workspace.svelte.ts:678](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L678)

***

### sizes

> **sizes**: `number`[]

Defined in: [workspace.svelte.ts:502](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L502)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`sizes`](/developers/api-reference/class-docs/workspacesplit/#sizes)

***

### type

> **type**: `"vertical"` \| `"horizontal"`

Defined in: [workspace.svelte.ts:500](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L500)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`type`](/developers/api-reference/class-docs/workspacesplit/#type)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](/developers/api-reference/class-docs/app/)

Defined in: [workspace.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L304)

Resolve the owning application before using the compatibility alias.

##### Returns

[`App`](/developers/api-reference/class-docs/app/)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`app`](/developers/api-reference/class-docs/workspacesplit/#app)

***

### application

#### Get Signature

> **get** **application**(): [`App`](/developers/api-reference/class-docs/app/) \| `undefined`

Defined in: [workspace.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L299)

The application that owns this item, when it has been attached.

##### Returns

[`App`](/developers/api-reference/class-docs/app/) \| `undefined`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`application`](/developers/api-reference/class-docs/workspacesplit/#application)

***

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [workspace.svelte.ts:737](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L737)

##### Returns

`boolean`

***

### size

#### Get Signature

> **get** **size**(): `string`

Defined in: [workspace.svelte.ts:733](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L733)

##### Returns

`string`

***

### topLeft

#### Get Signature

> **get** **topLeft**(): `void` \| [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/)

Defined in: [workspace.svelte.ts:646](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L646)

##### Returns

`void` \| [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`topLeft`](/developers/api-reference/class-docs/workspacesplit/#topleft)

***

### topRight

#### Get Signature

> **get** **topRight**(): [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/)

Defined in: [workspace.svelte.ts:650](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L650)

##### Returns

[`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/)

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`topRight`](/developers/api-reference/class-docs/workspacesplit/#topright)

***

### workspace

#### Get Signature

> **get** **workspace**(): [`Workspace`](/developers/api-reference/class-docs/workspace/) \| `undefined`

Defined in: [workspace.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L294)

The workspace that owns this item, when it has been attached.

##### Returns

[`Workspace`](/developers/api-reference/class-docs/workspace/) \| `undefined`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`workspace`](/developers/api-reference/class-docs/workspacesplit/#workspace)

## Methods

### addChild()

> **addChild**(`child`, `index?`): `void`

Defined in: [workspace.svelte.ts:556](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L556)

#### Parameters

##### child

[`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/) \| `WorkspaceView`

##### index?

`number`

#### Returns

`void`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`addChild`](/developers/api-reference/class-docs/workspacesplit/#addchild)

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

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`bindWorkspace`](/developers/api-reference/class-docs/workspacesplit/#bindworkspace)

***

### collapse()

> **collapse**(): `void`

Defined in: [workspace.svelte.ts:745](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L745)

#### Returns

`void`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>\[`Extract`\<`T`, `"sidebar-changed"`\>\]

#### Returns

`boolean`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`dispatch`](/developers/api-reference/class-docs/workspacesplit/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>\[`Extract`\<`T`, `"sidebar-changed"`\>\]

#### Returns

`boolean`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`emit`](/developers/api-reference/class-docs/workspacesplit/#emit)

***

### expand()

> **expand**(): `void`

Defined in: [workspace.svelte.ts:749](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L749)

#### Returns

`void`

***

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`getRoot`](/developers/api-reference/class-docs/workspacesplit/#getroot)

***

### iterateAllLeaves()

> **iterateAllLeaves**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:604](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L604)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`leaf`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`iterateAllLeaves`](/developers/api-reference/class-docs/workspacesplit/#iterateallleaves)

***

### iterateAllSplits()

> **iterateAllSplits**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:571](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L571)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`split`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`iterateAllSplits`](/developers/api-reference/class-docs/workspacesplit/#iterateallsplits)

***

### iterateAllTabs()

> **iterateAllTabs**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:588](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L588)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`tab`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`iterateAllTabs`](/developers/api-reference/class-docs/workspacesplit/#iteratealltabs)

***

### loadJson()

> **loadJson**(`layout`, `projectionItems?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:709](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L709)

#### Parameters

##### layout

`WorkspaceSidedockJson`

##### projectionItems?

`WorkspaceProjectionItems`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`loadJson`](/developers/api-reference/class-docs/workspacesplit/#loadjson)

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

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

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`off`](/developers/api-reference/class-docs/workspacesplit/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### ref

`EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`offref`](/developers/api-reference/class-docs/workspacesplit/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`on`](/developers/api-reference/class-docs/workspacesplit/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`once`](/developers/api-reference/class-docs/workspacesplit/#once)

***

### onEmpty()

> **onEmpty**(): `void`

Defined in: [workspace.svelte.ts:731](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L731)

#### Returns

`void`

#### Overrides

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`onEmpty`](/developers/api-reference/class-docs/workspacesplit/#onempty)

***

### removeChild()

> **removeChild**(`index`, `softDelete?`): [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/) \| `WorkspaceView` \| `undefined`

Defined in: [workspace.svelte.ts:617](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L617)

#### Parameters

##### index

`number` \| [`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/) \| [`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/)\<`EventMap`\<`T`\>\>

##### softDelete?

`boolean` = `false`

#### Returns

[`WorkspaceTabs`](/developers/api-reference/class-docs/workspacetabs/) \| `WorkspaceView` \| `undefined`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`removeChild`](/developers/api-reference/class-docs/workspacesplit/#removechild)

***

### toggle()

> **toggle**(): `void`

Defined in: [workspace.svelte.ts:741](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L741)

#### Returns

`void`

***

### toJson()

> **toJson**(): `WorkspaceSidedockJson`

Defined in: [workspace.svelte.ts:724](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/workspace.svelte.ts#L724)

#### Returns

`WorkspaceSidedockJson`

#### Overrides

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`toJson`](/developers/api-reference/class-docs/workspacesplit/#tojson)

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>\[`Extract`\<`T`, `"sidebar-changed"`\>\]

#### Returns

`boolean`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`trigger`](/developers/api-reference/class-docs/workspacesplit/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### evt

`EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>\[`Extract`\<`T`, `"sidebar-changed"`\>\]

#### Returns

`void`

#### Inherited from

[`WorkspaceSplit`](/developers/api-reference/class-docs/workspacesplit/).[`tryTrigger`](/developers/api-reference/class-docs/workspacesplit/#trytrigger)
