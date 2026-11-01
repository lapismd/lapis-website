---
title: "Scope"
description: "Source-generated public API reference for Scope."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [command.svelte.ts:916](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L916)

## Constructors

### Constructor

> **new Scope**(`parent?`, `application?`): `Scope`

Defined in: [command.svelte.ts:922](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L922)

#### Parameters

##### parent?

`Scope`

##### application?

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`Scope`

## Accessors

### keys

#### Get Signature

> **get** **keys**(): `MapIterator`\<`string`\>

Defined in: [command.svelte.ts:932](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L932)

##### Returns

`MapIterator`\<`string`\>

## Methods

### handleEvent()

> **handleEvent**(`event`): `boolean`

Defined in: [command.svelte.ts:985](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L985)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### register()

> **register**(`modifiers`, `key`, `func`): [`KeymapEventHandler`](/developers/api-reference/interfaces/keymapeventhandler/)

Defined in: [command.svelte.ts:948](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L948)

Add a keymap event handler to this scope.

#### Parameters

##### modifiers

`Modifier`[] \| `null`

`Mod`, `Ctrl`, `Meta`, `Shift`, or `Alt`. `Mod`
  translates to `Meta` on macOS and `Ctrl` otherwise. Pass `null` to
  capture all events matching the `key`, regardless of modifiers.

##### key

`string` \| `null`

Keycode from
  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key%5FValues

##### func

`KeymapEventListener`

The callback that will be called when a user triggers the
  keybind.

#### Returns

[`KeymapEventHandler`](/developers/api-reference/interfaces/keymapeventhandler/)

***

### unregister()

> **unregister**(`handler`): `void`

Defined in: [command.svelte.ts:971](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L971)

Remove an existing keymap event handler.

#### Parameters

##### handler

[`KeymapEventHandler`](/developers/api-reference/interfaces/keymapeventhandler/)

#### Returns

`void`
