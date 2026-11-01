[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / EventDispatcher

# Class: EventDispatcher\<EventTypes, Context\>

Defined in: [events.ts:42](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L42)

## Extended by

- [`PluginManager`](PluginManager.md)
- [`CommandManager`](CommandManager.md)
- [`Component`](Component.md)
- [`Workspace`](Workspace.md)
- [`Editor`](Editor.md)
- [`MetadataCache`](MetadataCache.md)
- [`Vault`](Vault.md)
- [`NotificationManager`](NotificationManager.md)

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

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

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

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

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

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

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

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

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

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

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

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

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

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

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

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

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
