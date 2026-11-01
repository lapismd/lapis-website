---
title: "SecretStorage"
description: "Source-generated public API reference for SecretStorage."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [context.svelte.ts:250](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L250)

In-memory secret store used by runtime services and plugins.

Hosts may replace or mirror this with stronger persisted storage, but the API
surface intentionally stays small and synchronous for plugin code.

## Constructors

### Constructor

> **new SecretStorage**(): `SecretStorage`

#### Returns

`SecretStorage`

## Methods

### getSecret()

> **getSecret**(`id`): `string` \| `null`

Defined in: [context.svelte.ts:274](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L274)

Look up a secret by id.

#### Parameters

##### id

`string`

Stable identifier for the secret.

#### Returns

`string` \| `null`

The stored secret value, or `null` if no secret exists.

***

### listSecrets()

> **listSecrets**(): `string`[]

Defined in: [context.svelte.ts:283](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L283)

List the ids of all stored secrets.

#### Returns

`string`[]

***

### setSecret()

> **setSecret**(`id`, `secret`): `void`

Defined in: [context.svelte.ts:260](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L260)

Store or replace a secret value.

#### Parameters

##### id

`string`

Stable identifier for the secret.

##### secret

`string`

Raw secret value to store.

#### Returns

`void`
