[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / WorkspaceSplit

# Abstract Class: WorkspaceSplit\<T\>

Defined in: [workspace.svelte.ts:497](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L497)

## Extends

- `WorkspaceParent`\<`T`\>

## Extended by

- [`WorkspaceSidedock`](WorkspaceSidedock.md)

## Type Parameters

### T

`T` *extends* `EventMap`\<`T`\> = `EventMap`\<`any`\>

## Constructors

### Constructor

> **new WorkspaceSplit**\<`T`\>(`type?`): `WorkspaceSplit`\<`T`\>

Defined in: [workspace.svelte.ts:504](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L504)

#### Parameters

##### type?

`"vertical"` \| `"horizontal"` = `"vertical"`

#### Returns

`WorkspaceSplit`\<`T`\>

#### Overrides

`WorkspaceParent<T>.constructor`

## Properties

### \_root

> **\_root**: `WorkspaceItem`\<`EventMap`\<`T`\>\> \| `undefined` = `undefined`

Defined in: [workspace.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L308)

#### Inherited from

`WorkspaceParent._root`

***

### children

> **children**: ([`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView`)[]

Defined in: [workspace.svelte.ts:501](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L501)

***

### id

> **id**: `string`

Defined in: [workspace.svelte.ts:280](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L280)

#### Inherited from

`WorkspaceParent.id`

***

### parent

> **parent**: `WorkspaceParent`

Defined in: [workspace.svelte.ts:277](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L277)

#### Inherited from

`WorkspaceParent.parent`

***

### sizes

> **sizes**: `number`[]

Defined in: [workspace.svelte.ts:502](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L502)

***

### type

> **type**: `"vertical"` \| `"horizontal"`

Defined in: [workspace.svelte.ts:500](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L500)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](App.md)

Defined in: [workspace.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L304)

Resolve the owning application before using the compatibility alias.

##### Returns

[`App`](App.md)

#### Inherited from

`WorkspaceParent.app`

***

### application

#### Get Signature

> **get** **application**(): [`App`](App.md) \| `undefined`

Defined in: [workspace.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L299)

The application that owns this item, when it has been attached.

##### Returns

[`App`](App.md) \| `undefined`

#### Inherited from

`WorkspaceParent.application`

***

### topLeft

#### Get Signature

> **get** **topLeft**(): `void` \| [`WorkspaceTabs`](WorkspaceTabs.md)

Defined in: [workspace.svelte.ts:646](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L646)

##### Returns

`void` \| [`WorkspaceTabs`](WorkspaceTabs.md)

***

### topRight

#### Get Signature

> **get** **topRight**(): [`WorkspaceTabs`](WorkspaceTabs.md)

Defined in: [workspace.svelte.ts:650](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L650)

##### Returns

[`WorkspaceTabs`](WorkspaceTabs.md)

***

### workspace

#### Get Signature

> **get** **workspace**(): [`Workspace`](Workspace.md) \| `undefined`

Defined in: [workspace.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L294)

The workspace that owns this item, when it has been attached.

##### Returns

[`Workspace`](Workspace.md) \| `undefined`

#### Inherited from

`WorkspaceParent.workspace`

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

`WorkspaceParent.bindWorkspace`

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

...`Parameters`\<`EventListener`\<`T`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

`WorkspaceParent.dispatch`

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

...`Parameters`\<`EventListener`\<`T`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

`WorkspaceParent.emit`

***

### getRoot()

> **getRoot**(): `WorkspaceItem`

Defined in: [workspace.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L309)

#### Returns

`WorkspaceItem`

#### Inherited from

`WorkspaceParent.getRoot`

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

***

### loadJson()

> **loadJson**(`layout`, `projectionItems?`): `Promise`\<`void`\>

Defined in: [workspace.svelte.ts:509](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L509)

#### Parameters

##### layout

`WorkspaceSplitJson`

##### projectionItems?

`WorkspaceProjectionItems`

#### Returns

`Promise`\<`void`\>

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

`EventListener`\<`T`, `T`\>

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

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### ref

`EventRef`\<`T`, `T`\>

#### Returns

`void`

#### Inherited from

`WorkspaceParent.offref`

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`T`, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`T`, `T`\>

##### context?

`any`

#### Returns

`EventRef`\<`T`, `T`, `any`\>

#### Inherited from

`WorkspaceParent.on`

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`T`, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`T`, `T`\>

##### context?

`any`

#### Returns

`EventRef`\<`T`, `T`, `any`\>

#### Inherited from

`WorkspaceParent.once`

***

### onEmpty()

> **onEmpty**(): `void`

Defined in: [workspace.svelte.ts:613](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L613)

#### Returns

`void`

***

### removeChild()

> **removeChild**(`index`, `softDelete?`): [`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView` \| `undefined`

Defined in: [workspace.svelte.ts:617](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L617)

#### Parameters

##### index

`number` \| [`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceSplit`\<`EventMap`\<`T`\>\>

##### softDelete?

`boolean` = `false`

#### Returns

[`WorkspaceTabs`](WorkspaceTabs.md) \| `WorkspaceView` \| `undefined`

***

### toJson()

> **toJson**(): `WorkspaceSplitJson`

Defined in: [workspace.svelte.ts:546](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/workspace.svelte.ts#L546)

#### Returns

`WorkspaceSplitJson`

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

...`Parameters`\<`EventListener`\<`T`, `T`\>\>

#### Returns

`boolean`

#### Inherited from

`WorkspaceParent.trigger`

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### evt

`EventRef`\<`T`, `T`\>

##### args

...`Parameters`\<`EventListener`\<`T`, `T`\>\>

#### Returns

`void`

#### Inherited from

`WorkspaceParent.tryTrigger`
