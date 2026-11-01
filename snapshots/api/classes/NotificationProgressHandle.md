[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / NotificationProgressHandle

# Class: NotificationProgressHandle

Defined in: [notifications.ts:130](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L130)

Mutable handle returned for a running progress item.

## Implements

- [`NotificationProgressToken`](../interfaces/NotificationProgressToken.md)

## Constructors

### Constructor

> **new NotificationProgressHandle**(`manager`, `options`): `NotificationProgressHandle`

Defined in: [notifications.ts:137](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L137)

#### Parameters

##### manager

[`NotificationManager`](NotificationManager.md)

##### options

[`NotificationProgressOptions`](../interfaces/NotificationProgressOptions.md)

#### Returns

`NotificationProgressHandle`

## Properties

### id

> `readonly` **id**: `string`

Defined in: [notifications.ts:131](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L131)

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: [notifications.ts:132](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L132)

#### Implementation of

[`NotificationProgressToken`](../interfaces/NotificationProgressToken.md).[`signal`](../interfaces/NotificationProgressToken.md#signal)

## Accessors

### currentSnapshot

#### Get Signature

> **get** **currentSnapshot**(): [`NotificationProgressSnapshot`](../interfaces/NotificationProgressSnapshot.md)

Defined in: [notifications.ts:164](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L164)

##### Returns

[`NotificationProgressSnapshot`](../interfaces/NotificationProgressSnapshot.md)

***

### isCancellationRequested

#### Get Signature

> **get** **isCancellationRequested**(): `boolean`

Defined in: [notifications.ts:160](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L160)

##### Returns

`boolean`

#### Implementation of

[`NotificationProgressToken`](../interfaces/NotificationProgressToken.md).[`isCancellationRequested`](../interfaces/NotificationProgressToken.md#iscancellationrequested)

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [notifications.ts:231](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L231)

Request cancellation for the running progress item.

#### Returns

`void`

***

### cancelled()

> **cancelled**(`message?`): `void`

Defined in: [notifications.ts:271](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L271)

Mark the progress item as cancelled.

#### Parameters

##### message?

`string` = `"Cancelled"`

Optional terminal message shown after cancellation.

#### Returns

`void`

***

### complete()

> **complete**(`message?`): `void`

Defined in: [notifications.ts:251](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L251)

Mark the progress item as completed.

#### Parameters

##### message?

`string`

Optional terminal message shown to the user.

#### Returns

`void`

***

### fail()

> **fail**(`error`): `void`

Defined in: [notifications.ts:261](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L261)

Mark the progress item as failed.

#### Parameters

##### error

`unknown`

Failure value to surface in the final progress state.

#### Returns

`void`

***

### report()

> **report**(`report`): `void`

Defined in: [notifications.ts:174](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L174)

Update the current progress state.

#### Parameters

##### report

[`NotificationProgressReport`](../interfaces/NotificationProgressReport.md)

Partial progress information to merge into the live state.

#### Returns

`void`

***

### throwIfCancellationRequested()

> **throwIfCancellationRequested**(): `void`

Defined in: [notifications.ts:280](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L280)

Throw an abort error when cancellation has been requested.

#### Returns

`void`

#### Implementation of

[`NotificationProgressToken`](../interfaces/NotificationProgressToken.md).[`throwIfCancellationRequested`](../interfaces/NotificationProgressToken.md#throwifcancellationrequested)

***

### update()

> **update**(`report`): `void`

Defined in: [notifications.ts:222](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L222)

Alias for [NotificationProgressHandle.report](#report).

#### Parameters

##### report

[`NotificationProgressReport`](../interfaces/NotificationProgressReport.md)

Partial progress information to merge into the live state.

#### Returns

`void`
