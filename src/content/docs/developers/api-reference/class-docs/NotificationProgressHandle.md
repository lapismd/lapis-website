---
title: "NotificationProgressHandle"
description: "Source-generated public API reference for NotificationProgressHandle."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [notifications.ts:130](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L130)

Mutable handle returned for a running progress item.

## Implements

- [`NotificationProgressToken`](/developers/api-reference/interfaces/notificationprogresstoken/)

## Constructors

### Constructor

> **new NotificationProgressHandle**(`manager`, `options`): `NotificationProgressHandle`

Defined in: [notifications.ts:137](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L137)

#### Parameters

##### manager

[`NotificationManager`](/developers/api-reference/class-docs/notificationmanager/)

##### options

[`NotificationProgressOptions`](/developers/api-reference/interfaces/notificationprogressoptions/)

#### Returns

`NotificationProgressHandle`

## Properties

### id

> `readonly` **id**: `string`

Defined in: [notifications.ts:131](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L131)

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: [notifications.ts:132](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L132)

#### Implementation of

[`NotificationProgressToken`](/developers/api-reference/interfaces/notificationprogresstoken/).[`signal`](/developers/api-reference/interfaces/notificationprogresstoken/#signal)

## Accessors

### currentSnapshot

#### Get Signature

> **get** **currentSnapshot**(): [`NotificationProgressSnapshot`](/developers/api-reference/interfaces/notificationprogresssnapshot/)

Defined in: [notifications.ts:164](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L164)

##### Returns

[`NotificationProgressSnapshot`](/developers/api-reference/interfaces/notificationprogresssnapshot/)

***

### isCancellationRequested

#### Get Signature

> **get** **isCancellationRequested**(): `boolean`

Defined in: [notifications.ts:160](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L160)

##### Returns

`boolean`

#### Implementation of

[`NotificationProgressToken`](/developers/api-reference/interfaces/notificationprogresstoken/).[`isCancellationRequested`](/developers/api-reference/interfaces/notificationprogresstoken/#iscancellationrequested)

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [notifications.ts:231](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L231)

Request cancellation for the running progress item.

#### Returns

`void`

***

### cancelled()

> **cancelled**(`message?`): `void`

Defined in: [notifications.ts:271](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L271)

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

Defined in: [notifications.ts:251](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L251)

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

Defined in: [notifications.ts:261](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L261)

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

Defined in: [notifications.ts:174](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L174)

Update the current progress state.

#### Parameters

##### report

[`NotificationProgressReport`](/developers/api-reference/interfaces/notificationprogressreport/)

Partial progress information to merge into the live state.

#### Returns

`void`

***

### throwIfCancellationRequested()

> **throwIfCancellationRequested**(): `void`

Defined in: [notifications.ts:280](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L280)

Throw an abort error when cancellation has been requested.

#### Returns

`void`

#### Implementation of

[`NotificationProgressToken`](/developers/api-reference/interfaces/notificationprogresstoken/).[`throwIfCancellationRequested`](/developers/api-reference/interfaces/notificationprogresstoken/#throwifcancellationrequested)

***

### update()

> **update**(`report`): `void`

Defined in: [notifications.ts:222](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L222)

Alias for [NotificationProgressHandle.report](#report).

#### Parameters

##### report

[`NotificationProgressReport`](/developers/api-reference/interfaces/notificationprogressreport/)

Partial progress information to merge into the live state.

#### Returns

`void`
