---
title: "NotificationProgressToken"
description: "Source-generated public API reference for NotificationProgressToken."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [notifications.ts:88](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L88)

Cancellation token exposed to long-running tasks started through the
notification progress API.

## Properties

### isCancellationRequested

> `readonly` **isCancellationRequested**: `boolean`

Defined in: [notifications.ts:90](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L90)

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: [notifications.ts:89](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L89)

## Methods

### throwIfCancellationRequested()

> **throwIfCancellationRequested**(): `void`

Defined in: [notifications.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/notifications.ts#L91)

#### Returns

`void`
