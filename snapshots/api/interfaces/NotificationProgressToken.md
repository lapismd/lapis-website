[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / NotificationProgressToken

# Interface: NotificationProgressToken

Defined in: [notifications.ts:88](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L88)

Cancellation token exposed to long-running tasks started through the
notification progress API.

## Properties

### isCancellationRequested

> `readonly` **isCancellationRequested**: `boolean`

Defined in: [notifications.ts:90](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L90)

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: [notifications.ts:89](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L89)

## Methods

### throwIfCancellationRequested()

> **throwIfCancellationRequested**(): `void`

Defined in: [notifications.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/notifications.ts#L91)

#### Returns

`void`
