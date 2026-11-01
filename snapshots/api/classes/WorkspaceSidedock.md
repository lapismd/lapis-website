[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / WorkspaceSidedock

# Class: WorkspaceSidedock

Defined in: [workspace.svelte.ts:674](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L674)

Collapsible split container used for the left and right workspace sidebars.

## Extends

- [`WorkspaceSplit`](WorkspaceSplit.md)\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}\>

## Constructors

### Constructor

> **new WorkspaceSidedock**(`options?`): `WorkspaceSidedock`

Defined in: [workspace.svelte.ts:680](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L680)

#### Parameters

##### options?

`Partial`\<`Omit`\<`SidebarStateProps`, `"open"` \| `"setOpen"`\>\> & `object` = `{}`

#### Returns

`WorkspaceSidedock`

#### Overrides

[`WorkspaceSplit`](WorkspaceSplit.md).[`constructor`](WorkspaceSplit.md#constructor)

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`_root`](WorkspaceSplit.md#_root)

***

### children

> **children**: ([`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView`)[]

Defined in: [workspace.svelte.ts:501](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L501)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`children`](WorkspaceSplit.md#children)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`id`](WorkspaceSplit.md#id)

***

### parent

> **parent**: `WorkspaceParent`

Defined in: [workspace.svelte.ts:277](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L277)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`parent`](WorkspaceSplit.md#parent)

***

### sidebar

> **sidebar**: `SidebarState`

Defined in: [workspace.svelte.ts:678](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L678)

***

### sizes

> **sizes**: `number`[]

Defined in: [workspace.svelte.ts:502](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L502)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`sizes`](WorkspaceSplit.md#sizes)

***

### type

> **type**: `"vertical"` \| `"horizontal"`

Defined in: [workspace.svelte.ts:500](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L500)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`type`](WorkspaceSplit.md#type)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md)

Defined in: [workspace.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L304)

Resolve the owning application before using the compatibility alias.

##### Returns

[`App`](App.md)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`app`](WorkspaceSplit.md#app)

***

### application

#### Get Signature

> **get** **application**(): [`App`](App.md) \| `undefined`

Defined in: [workspace.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L299)

The application that owns this item, when it has been attached.

##### Returns

[`App`](App.md) \| `undefined`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`application`](WorkspaceSplit.md#application)

***

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [workspace.svelte.ts:737](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L737)

##### Returns

`boolean`

***

### size

#### Get Signature

> **get** **size**(): `string`

Defined in: [workspace.svelte.ts:733](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L733)

##### Returns

`string`

***

### topLeft

#### Get Signature

> **get** **topLeft**(): `void` \| [`WorkspaceTabs`](WorkspaceTabs.md)

Defined in: [workspace.svelte.ts:646](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L646)

##### Returns

`void` \| [`WorkspaceTabs`](WorkspaceTabs.md)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`topLeft`](WorkspaceSplit.md#topleft)

***

### topRight

#### Get Signature

> **get** **topRight**(): [`WorkspaceTabs`](WorkspaceTabs.md)

Defined in: [workspace.svelte.ts:650](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L650)

##### Returns

[`WorkspaceTabs`](WorkspaceTabs.md)

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`topRight`](WorkspaceSplit.md#topright)

***

### workspace

#### Get Signature

> **get** **workspace**(): [`Workspace`](Workspace.md) \| `undefined`

Defined in: [workspace.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L294)

The workspace that owns this item, when it has been attached.

##### Returns

[`Workspace`](Workspace.md) \| `undefined`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`workspace`](WorkspaceSplit.md#workspace)

## Methods

### addChild()

> **addChild**(`child`, `index?`): `void`

Defined in: [workspace.svelte.ts:556](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L556)

#### Parameters

##### child

[`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView`

##### index?

`number`

#### Returns

`void`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`addChild`](WorkspaceSplit.md#addchild)

***

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`bindWorkspace`](WorkspaceSplit.md#bindworkspace)

***

### collapse()

> **collapse**(): `void`

Defined in: [workspace.svelte.ts:745](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L745)

#### Returns

`void`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`dispatch`](WorkspaceSplit.md#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`emit`](WorkspaceSplit.md#emit)

***

### expand()

> **expand**(): `void`

Defined in: [workspace.svelte.ts:749](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L749)

#### Returns

`void`

***

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`getRoot`](WorkspaceSplit.md#getroot)

***

### iterateAllLeaves()

> **iterateAllLeaves**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:604](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L604)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`leaf`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`iterateAllLeaves`](WorkspaceSplit.md#iterateallleaves)

***

### iterateAllSplits()

> **iterateAllSplits**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:571](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L571)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`split`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`iterateAllSplits`](WorkspaceSplit.md#iterateallsplits)

***

### iterateAllTabs()

> **iterateAllTabs**\<`T`\>(`callback`): `void` \| `T`

Defined in: [workspace.svelte.ts:588](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L588)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### callback

(`tab`) => `T`

#### Returns

`void` \| `T`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`iterateAllTabs`](WorkspaceSplit.md#iteratealltabs)

***

### loadJson()

> **loadJson**(`layout`, `projectionItems?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:709](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L709)

#### Parameters

##### layout

`WorkspaceSidedockJson`

##### projectionItems?

`WorkspaceProjectionItems`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`WorkspaceSplit`](WorkspaceSplit.md).[`loadJson`](WorkspaceSplit.md#loadjson)

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`off`](WorkspaceSplit.md#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"sidebar-changed"`

#### Parameters

##### ref

`EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`offref`](WorkspaceSplit.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`on`](WorkspaceSplit.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `sidebar-changed`: \[`id`: `string`, `open`: `boolean`, `width`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`once`](WorkspaceSplit.md#once)

***

### onEmpty()

> **onEmpty**(): `void`

Defined in: [workspace.svelte.ts:731](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L731)

#### Returns

`void`

#### Overrides

[`WorkspaceSplit`](WorkspaceSplit.md).[`onEmpty`](WorkspaceSplit.md#onempty)

***

### removeChild()

> **removeChild**(`index`, `softDelete?`): [`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView` \| `undefined`

Defined in: [workspace.svelte.ts:617](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L617)

#### Parameters

##### index

`number` \| [`WorkspaceTabs`](WorkspaceTabs.md) \| [`WorkspaceSplit`](WorkspaceSplit.md)\<`EventMap`\<`T`\>\>

##### softDelete?

`boolean` = `false`

#### Returns

[`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView` \| `undefined`

#### Inherited from

[`WorkspaceSplit`](WorkspaceSplit.md).[`removeChild`](WorkspaceSplit.md#removechild)

***

### toggle()

> **toggle**(): `void`

Defined in: [workspace.svelte.ts:741](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L741)

#### Returns

`void`

***

### toJson()

> **toJson**(): `WorkspaceSidedockJson`

Defined in: [workspace.svelte.ts:724](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L724)

#### Returns

`WorkspaceSidedockJson`

#### Overrides

[`WorkspaceSplit`](WorkspaceSplit.md).[`toJson`](WorkspaceSplit.md#tojson)

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`trigger`](WorkspaceSplit.md#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

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

[`WorkspaceSplit`](WorkspaceSplit.md).[`tryTrigger`](WorkspaceSplit.md#trytrigger)
