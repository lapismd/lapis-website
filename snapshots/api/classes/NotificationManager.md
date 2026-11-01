[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / NotificationManager

# Class: NotificationManager

Defined in: [notifications.ts:311](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L311)

Records user-visible notifications and tracks live progress handles.

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<`NotificationEvents`\>

## Constructors

### Constructor

> **new NotificationManager**(`database`): `NotificationManager`

Defined in: [notifications.ts:316](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L316)

#### Parameters

##### database

###### clearAllNotifications

() => `Promise`\<`void`\>

###### clearNotification

(`id`) => `Promise`\<`void`\>

###### listNotifications

() => `Promise`\<`AppDatabaseNotificationRecord`[]\>

###### markNotificationRead

(`id`) => `Promise`\<`void`\>

###### upsertNotification

(`record`) => `Promise`\<`void`\>

#### Returns

`NotificationManager`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### activeProgress

> **activeProgress**: [`NotificationProgressSnapshot`](../interfaces/NotificationProgressSnapshot.md)[] = `[]`

Defined in: [notifications.ts:313](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L313)

***

### records

> **records**: `AppDatabaseNotificationRecord`[] = `[]`

Defined in: [notifications.ts:312](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L312)

## Methods

### cancel()

> **cancel**(`id`): `void`

Defined in: [notifications.ts:448](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L448)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### clear()

> **clear**(`id`): `Promise`\<`void`\>

Defined in: [notifications.ts:462](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L462)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### clearAll()

> **clearAll**(): `Promise`\<`void`\>

Defined in: [notifications.ts:468](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L468)

#### Returns

`Promise`\<`void`\>

***

### createProgress()

> **createProgress**(`options`): [`NotificationProgressHandle`](NotificationProgressHandle.md)

Defined in: [notifications.ts:390](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L390)

Create a mutable progress handle for a long-running task.

#### Parameters

##### options

[`NotificationProgressOptions`](../interfaces/NotificationProgressOptions.md)

Progress metadata shown to the user.

#### Returns

[`NotificationProgressHandle`](NotificationProgressHandle.md)

The new progress handle.

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`NotificationEvents`\>\[`Extract`\<`T`, keyof `NotificationEvents`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatch`](EventDispatcher.md#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`NotificationEvents`\>\[`Extract`\<`T`, keyof `NotificationEvents`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`emit`](EventDispatcher.md#emit)

***

### finishProgress()

> **finishProgress**(`snapshot`): `void`

Defined in: [notifications.ts:482](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L482)

#### Parameters

##### snapshot

[`NotificationProgressSnapshot`](../interfaces/NotificationProgressSnapshot.md)

#### Returns

`void`

***

### list()

> **list**(): `AppDatabaseNotificationRecord`[]

Defined in: [notifications.ts:343](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L343)

Return the current persisted notification history.

#### Returns

`AppDatabaseNotificationRecord`[]

***

### loadPersisted()

> **loadPersisted**(): `Promise`\<`void`\>

Defined in: [notifications.ts:333](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L333)

Load persisted notification history for the current vault.

#### Returns

`Promise`\<`void`\>

***

### markRead()

> **markRead**(`id`): `Promise`\<`void`\>

Defined in: [notifications.ts:452](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L452)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### notify()

> **notify**(`options`): `AppDatabaseNotificationRecord`

Defined in: [notifications.ts:354](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L354)

Record a notification and optionally persist it to history.

#### Parameters

##### options

`string` \| [`NotifyOptions`](../interfaces/NotifyOptions.md)

Notification payload or a shorthand message string.

#### Returns

`AppDatabaseNotificationRecord`

The recorded notification snapshot.

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

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

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### ref

`EventRef`\<`NotificationEvents`, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`offref`](EventDispatcher.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`NotificationEvents`, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`NotificationEvents`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`on`](EventDispatcher.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`NotificationEvents`, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`NotificationEvents`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`once`](EventDispatcher.md#once)

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`NotificationEvents`\>\[`Extract`\<`T`, keyof `NotificationEvents`\>\]

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

`T` *extends* keyof `NotificationEvents`

#### Parameters

##### evt

`EventRef`\<`NotificationEvents`, `T`\>

##### args

...`ArgumentMap`\<`NotificationEvents`\>\[`Extract`\<`T`, keyof `NotificationEvents`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`tryTrigger`](EventDispatcher.md#trytrigger)

***

### updateProgress()

> **updateProgress**(`snapshot`): `void`

Defined in: [notifications.ts:474](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L474)

#### Parameters

##### snapshot

[`NotificationProgressSnapshot`](../interfaces/NotificationProgressSnapshot.md)

#### Returns

`void`

***

### withProgress()

> **withProgress**\<`T`\>(`options`, `task`): `Promise`\<`T`\>

Defined in: [notifications.ts:408](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L408)

Run a task with a managed progress handle.

#### Type Parameters

##### T

`T`

#### Parameters

##### options

[`NotificationProgressOptions`](../interfaces/NotificationProgressOptions.md)

Progress metadata shown to the user.

##### task

(`progress`, `token`) => `T` \| `Promise`\<`T`\>

Task that receives the progress handle and cancellation
  token.

#### Returns

`Promise`\<`T`\>

The task result.
