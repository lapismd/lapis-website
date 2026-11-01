[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / Scope

# Class: Scope

Defined in: [command.svelte.ts:924](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L924)

## Constructors

### Constructor

> **new Scope**(`parent?`, `application?`): `Scope`

Defined in: [command.svelte.ts:930](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L930)

#### Parameters

##### parent?

`Scope`

##### application?

[`App`](App.md)

#### Returns

`Scope`

## Accessors

### keys

#### Get Signature

> **get** **keys**(): `MapIterator`\<`string`\>

Defined in: [command.svelte.ts:940](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L940)

##### Returns

`MapIterator`\<`string`\>

## Methods

### handleEvent()

> **handleEvent**(`event`): `boolean`

Defined in: [command.svelte.ts:993](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L993)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### register()

> **register**(`modifiers`, `key`, `func`): [`KeymapEventHandler`](../interfaces/KeymapEventHandler.md)

Defined in: [command.svelte.ts:956](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L956)

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

[`KeymapEventHandler`](../interfaces/KeymapEventHandler.md)

***

### unregister()

> **unregister**(`handler`): `void`

Defined in: [command.svelte.ts:979](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L979)

Remove an existing keymap event handler.

#### Parameters

##### handler

[`KeymapEventHandler`](../interfaces/KeymapEventHandler.md)

#### Returns

`void`
