---
title: "AppUrlService"
description: "Source-generated public API reference for AppUrlService."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [app-url.ts:173](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/app-url.ts#L173)

Parses `lapis://` app URLs and dispatches registered protocol handlers.

## Constructors

### Constructor

> **new AppUrlService**(`app`): `AppUrlService`

Defined in: [app-url.ts:176](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/app-url.ts#L176)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`AppUrlService`

## Methods

### dispatch()

> **dispatch**(`rawUrl`): `Promise`\<`boolean`\>

Defined in: [app-url.ts:270](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/app-url.ts#L270)

Dispatch an app URL through the built-in open handler or a registered
custom action.

#### Parameters

##### rawUrl

`string`

Raw app URL to parse and execute.

#### Returns

`Promise`\<`boolean`\>

`true` when the URL was handled successfully.

***

### parse()

> **parse**(`rawUrl`): `ParsedAppUrl`

Defined in: [app-url.ts:211](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/app-url.ts#L211)

Parse an app URL into its normalized action and parameter map.

#### Parameters

##### rawUrl

`string`

Raw `lapis://`, `lapis-notes://`, or compatible app URL.

#### Returns

`ParsedAppUrl`

The normalized URL request.

***

### registerProtocolHandler()

> **registerProtocolHandler**(`action`, `handler`): () => `void`

Defined in: [app-url.ts:186](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/app-url.ts#L186)

Register a handler for a custom app URL action.

#### Parameters

##### action

`string`

Action name to match after the app URL scheme.

##### handler

`AppUrlHandler`

Callback invoked when a matching URL is dispatched.

#### Returns

A cleanup function that unregisters the handler.

() => `void`
