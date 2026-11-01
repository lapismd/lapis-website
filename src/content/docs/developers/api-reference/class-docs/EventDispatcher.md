---
title: "EventDispatcher<EventTypes, Context>"
description: "Source-generated public API reference for EventDispatcher<EventTypes, Context>."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [events.ts:42](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L42)

## Extended by

- [`PluginManager`](/developers/api-reference/class-docs/pluginmanager/)
- [`CommandManager`](/developers/api-reference/class-docs/commandmanager/)
- [`Component`](/developers/api-reference/class-docs/component/)
- [`Workspace`](/developers/api-reference/class-docs/workspace/)
- [`Editor`](/developers/api-reference/class-docs/editor/)
- [`MetadataCache`](/developers/api-reference/class-docs/metadatacache/)
- [`Vault`](/developers/api-reference/class-docs/vault/)
- [`NotificationManager`](/developers/api-reference/class-docs/notificationmanager/)

## Type Parameters

### EventTypes

`EventTypes` *extends* `ValidEventTypes` = `string` \| `symbol`

### Context

`Context` = `any`

## Constructors

### Constructor

> **new EventDispatcher**\<`EventTypes`, `Context`\>(): `EventDispatcher`\<`EventTypes`, `Context`\>

#### Returns

`EventDispatcher`\<`EventTypes`, `Context`\>

## Methods

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`EventTypes`, `T`\>

##### context?

`Context`

##### once?

`boolean`

#### Returns

`void`

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### ref

`EventRef`\<`EventTypes`, `T`\>

#### Returns

`void`

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`EventTypes`, `T`, `Context`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`EventRef`\<`EventTypes`, `T`, `Context`\>

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`EventTypes`, `T`, `Context`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### listener

`EventListener`\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`EventRef`\<`EventTypes`, `T`, `Context`\>

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### eventName

`T`

##### args

...`Parameters`\<`EventListener`\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string` \| `symbol`

#### Parameters

##### evt

`EventRef`\<`EventTypes`, `T`\>

##### args

...`Parameters`\<`EventListener`\<`EventTypes`, `T`\>\>

#### Returns

`void`
