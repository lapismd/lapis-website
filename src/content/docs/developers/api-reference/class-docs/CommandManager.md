---
title: "CommandManager"
description: "Source-generated public API reference for CommandManager."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [command.svelte.ts:324](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L324)

## Extends

- [`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/)\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}\>

## Constructors

### Constructor

> **new CommandManager**(`app`): `CommandManager`

Defined in: [command.svelte.ts:345](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L345)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`CommandManager`

#### Overrides

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`constructor`](/developers/api-reference/class-docs/eventdispatcher/#constructor)

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [command.svelte.ts:345](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L345)

***

### bindings

> `readonly` **bindings**: `Record`\<`string`, [`Command`](/developers/api-reference/interfaces/command/)[]\>

Defined in: [command.svelte.ts:340](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L340)

***

### commands

> `readonly` **commands**: `Record`\<`string`, [`Command`](/developers/api-reference/interfaces/command/)\>

Defined in: [command.svelte.ts:338](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L338)

***

### editorCommands

> `readonly` **editorCommands**: `Record`\<`string`, [`Command`](/developers/api-reference/interfaces/command/)\>

Defined in: [command.svelte.ts:339](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L339)

***

### hotkeyOverrides

> `readonly` **hotkeyOverrides**: `Record`\<`string`, [`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]\>

Defined in: [command.svelte.ts:341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L341)

***

### open

> **open**: `boolean`

Defined in: [command.svelte.ts:335](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L335)

***

### openHostId

> **openHostId**: `string`

Defined in: [command.svelte.ts:336](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L336)

## Methods

### addHotkey()

> **addHotkey**(`commandId`, `hotkey`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:566](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L566)

#### Parameters

##### commandId

`string`

##### hotkey

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)

#### Returns

`Promise`\<`void`\>

***

### commandsFor()

> **commandsFor**(`key`): [`Command`](/developers/api-reference/interfaces/command/)[]

Defined in: [command.svelte.ts:806](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L806)

#### Parameters

##### key

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)

#### Returns

[`Command`](/developers/api-reference/interfaces/command/)[]

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`dispatch`](/developers/api-reference/class-docs/eventdispatcher/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`emit`](/developers/api-reference/class-docs/eventdispatcher/#emit)

***

### executeCommand()

> **executeCommand**\<`T`\>(`id`, ...`rest`): `Promise`\<`T`\>

Defined in: [command.svelte.ts:773](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L773)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### rest

...`any`[]

#### Returns

`Promise`\<`T`\>

***

### executeCommandForHost()

> **executeCommandForHost**\<`T`\>(`id`, `hostId`, ...`rest`): `Promise`\<`T`\>

Defined in: [command.svelte.ts:777](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L777)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### hostId

`string`

##### rest

...`any`[]

#### Returns

`Promise`\<`T`\>

***

### getAllCommandMetadata()

> **getAllCommandMetadata**(): `CommandMetadata`[]

Defined in: [command.svelte.ts:815](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L815)

#### Returns

`CommandMetadata`[]

***

### getAllCommands()

> **getAllCommands**(): [`Command`](/developers/api-reference/interfaces/command/)[]

Defined in: [command.svelte.ts:811](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L811)

#### Returns

[`Command`](/developers/api-reference/interfaces/command/)[]

***

### getAvailableCommandMetadata()

> **getAvailableCommandMetadata**(`hostId?`): `CommandMetadata`[]

Defined in: [command.svelte.ts:713](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L713)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`CommandMetadata`[]

***

### getAvailableCommands()

> **getAvailableCommands**(`hostId?`): [`Command`](/developers/api-reference/interfaces/command/)[]

Defined in: [command.svelte.ts:707](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L707)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

[`Command`](/developers/api-reference/interfaces/command/)[]

***

### getCommand()

> **getCommand**(`id`): [`Command`](/developers/api-reference/interfaces/command/) \| `undefined`

Defined in: [command.svelte.ts:665](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L665)

#### Parameters

##### id

`string`

#### Returns

[`Command`](/developers/api-reference/interfaces/command/) \| `undefined`

***

### getCommandMetadata()

> **getCommandMetadata**(`id`): `CommandMetadata` \| `undefined`

Defined in: [command.svelte.ts:669](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L669)

#### Parameters

##### id

`string`

#### Returns

`CommandMetadata` \| `undefined`

***

### getDefaultHotkeys()

> **getDefaultHotkeys**(`commandId`): [`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

Defined in: [command.svelte.ts:537](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L537)

#### Parameters

##### commandId

`string`

#### Returns

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

***

### getEffectiveHotkeys()

> **getEffectiveHotkeys**(`commandId`): [`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

Defined in: [command.svelte.ts:543](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L543)

#### Parameters

##### commandId

`string`

#### Returns

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

***

### getHotkeyAssignments()

> **getHotkeyAssignments**(): [`HotkeyAssignment`](/developers/api-reference/interfaces/hotkeyassignment/)[]

Defined in: [command.svelte.ts:595](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L595)

#### Returns

[`HotkeyAssignment`](/developers/api-reference/interfaces/hotkeyassignment/)[]

***

### getHotkeyConflicts()

> **getHotkeyConflicts**(): [`HotkeyConflict`](/developers/api-reference/interfaces/hotkeyconflict/)[]

Defined in: [command.svelte.ts:605](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L605)

#### Returns

[`HotkeyConflict`](/developers/api-reference/interfaces/hotkeyconflict/)[]

***

### hide()

> **hide**(`hostId?`): `void`

Defined in: [command.svelte.ts:790](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L790)

#### Parameters

##### hostId?

`string`

#### Returns

`void`

***

### isCommandAvailable()

> **isCommandAvailable**(`id`, `hostId?`): `boolean`

Defined in: [command.svelte.ts:674](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L674)

#### Parameters

##### id

`string`

##### hostId?

`string` = `...`

#### Returns

`boolean`

***

### isHotkeyCustomized()

> **isHotkeyCustomized**(`commandId`): `boolean`

Defined in: [command.svelte.ts:550](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L550)

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

***

### isOpenForHost()

> **isOpenForHost**(`hostId`): `boolean`

Defined in: [command.svelte.ts:356](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L356)

#### Parameters

##### hostId

`string`

#### Returns

`boolean`

***

### loadHotkeys()

> **loadHotkeys**(): `Promise`\<`void`\>

Defined in: [command.svelte.ts:464](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L464)

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

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

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`off`](/developers/api-reference/class-docs/eventdispatcher/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### ref

`EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`offref`](/developers/api-reference/class-docs/eventdispatcher/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`on`](/developers/api-reference/class-docs/eventdispatcher/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`once`](/developers/api-reference/class-docs/eventdispatcher/#once)

***

### registerCommand()

> **registerCommand**(`command`): `void`

Defined in: [command.svelte.ts:634](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L634)

#### Parameters

##### command

[`Command`](/developers/api-reference/interfaces/command/)

#### Returns

`void`

***

### removeHotkey()

> **removeHotkey**(`commandId`, `hotkey`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:573](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L573)

#### Parameters

##### commandId

`string`

##### hotkey

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)

#### Returns

`Promise`\<`void`\>

***

### resetHotkeys()

> **resetHotkeys**(`commandId`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:583](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L583)

#### Parameters

##### commandId

`string`

#### Returns

`Promise`\<`void`\>

***

### saveHotkeys()

> **saveHotkeys**(): `Promise`\<`void`\>

Defined in: [command.svelte.ts:489](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L489)

#### Returns

`Promise`\<`void`\>

***

### setHotkeys()

> **setHotkeys**(`commandId`, `hotkeys`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:554](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L554)

#### Parameters

##### commandId

`string`

##### hotkeys

[`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

#### Returns

`Promise`\<`void`\>

***

### show()

> **show**(`hostId?`): `void`

Defined in: [command.svelte.ts:785](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L785)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`void`

***

### toggle()

> **toggle**(`hostId?`): `void`

Defined in: [command.svelte.ts:797](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L797)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`void`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`trigger`](/developers/api-reference/class-docs/eventdispatcher/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### evt

`EventRef`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; `unregister`: \[`command`: [`Command`](/developers/api-reference/interfaces/command/)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`tryTrigger`](/developers/api-reference/class-docs/eventdispatcher/#trytrigger)

***

### unregisterCommand()

> **unregisterCommand**(`id`): `boolean`

Defined in: [command.svelte.ts:648](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L648)

#### Parameters

##### id

`string`

#### Returns

`boolean`
