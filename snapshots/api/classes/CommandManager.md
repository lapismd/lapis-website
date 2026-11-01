[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / CommandManager

# Class: CommandManager

Defined in: [command.svelte.ts:332](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L332)

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}\>

## Constructors

### Constructor

> **new CommandManager**(`app`): `CommandManager`

Defined in: [command.svelte.ts:353](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L353)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`CommandManager`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [command.svelte.ts:353](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L353)

***

### bindings

> `readonly` **bindings**: `Record`\<`string`, [`Command`](../interfaces/Command.md)[]\>

Defined in: [command.svelte.ts:348](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L348)

***

### commands

> `readonly` **commands**: `Record`\<`string`, [`Command`](../interfaces/Command.md)\>

Defined in: [command.svelte.ts:346](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L346)

***

### editorCommands

> `readonly` **editorCommands**: `Record`\<`string`, [`Command`](../interfaces/Command.md)\>

Defined in: [command.svelte.ts:347](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L347)

***

### hotkeyOverrides

> `readonly` **hotkeyOverrides**: `Record`\<`string`, [`Hotkey`](../interfaces/Hotkey.md)[]\>

Defined in: [command.svelte.ts:349](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L349)

***

### open

> **open**: `boolean`

Defined in: [command.svelte.ts:343](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L343)

***

### openHostId

> **openHostId**: `string`

Defined in: [command.svelte.ts:344](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L344)

## Methods

### addHotkey()

> **addHotkey**(`commandId`, `hotkey`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:574](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L574)

#### Parameters

##### commandId

`string`

##### hotkey

[`Hotkey`](../interfaces/Hotkey.md)

#### Returns

`Promise`\<`void`\>

***

### commandsFor()

> **commandsFor**(`key`): [`Command`](../interfaces/Command.md)[]

Defined in: [command.svelte.ts:814](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L814)

#### Parameters

##### key

[`Hotkey`](../interfaces/Hotkey.md)

#### Returns

[`Command`](../interfaces/Command.md)[]

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

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

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`emit`](EventDispatcher.md#emit)

***

### executeCommand()

> **executeCommand**\<`T`\>(`id`, ...`rest`): `Promise`\<`T`\>

Defined in: [command.svelte.ts:781](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L781)

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

Defined in: [command.svelte.ts:785](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L785)

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

Defined in: [command.svelte.ts:823](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L823)

#### Returns

`CommandMetadata`[]

***

### getAllCommands()

> **getAllCommands**(): [`Command`](../interfaces/Command.md)[]

Defined in: [command.svelte.ts:819](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L819)

#### Returns

[`Command`](../interfaces/Command.md)[]

***

### getAvailableCommandMetadata()

> **getAvailableCommandMetadata**(`hostId?`): `CommandMetadata`[]

Defined in: [command.svelte.ts:721](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L721)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`CommandMetadata`[]

***

### getAvailableCommands()

> **getAvailableCommands**(`hostId?`): [`Command`](../interfaces/Command.md)[]

Defined in: [command.svelte.ts:715](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L715)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

[`Command`](../interfaces/Command.md)[]

***

### getCommand()

> **getCommand**(`id`): [`Command`](../interfaces/Command.md) \| `undefined`

Defined in: [command.svelte.ts:673](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L673)

#### Parameters

##### id

`string`

#### Returns

[`Command`](../interfaces/Command.md) \| `undefined`

***

### getCommandMetadata()

> **getCommandMetadata**(`id`): `CommandMetadata` \| `undefined`

Defined in: [command.svelte.ts:677](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L677)

#### Parameters

##### id

`string`

#### Returns

`CommandMetadata` \| `undefined`

***

### getDefaultHotkeys()

> **getDefaultHotkeys**(`commandId`): [`Hotkey`](../interfaces/Hotkey.md)[]

Defined in: [command.svelte.ts:545](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L545)

#### Parameters

##### commandId

`string`

#### Returns

[`Hotkey`](../interfaces/Hotkey.md)[]

***

### getEffectiveHotkeys()

> **getEffectiveHotkeys**(`commandId`): [`Hotkey`](../interfaces/Hotkey.md)[]

Defined in: [command.svelte.ts:551](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L551)

#### Parameters

##### commandId

`string`

#### Returns

[`Hotkey`](../interfaces/Hotkey.md)[]

***

### getHotkeyAssignments()

> **getHotkeyAssignments**(): [`HotkeyAssignment`](../interfaces/HotkeyAssignment.md)[]

Defined in: [command.svelte.ts:603](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L603)

#### Returns

[`HotkeyAssignment`](../interfaces/HotkeyAssignment.md)[]

***

### getHotkeyConflicts()

> **getHotkeyConflicts**(): [`HotkeyConflict`](../interfaces/HotkeyConflict.md)[]

Defined in: [command.svelte.ts:613](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L613)

#### Returns

[`HotkeyConflict`](../interfaces/HotkeyConflict.md)[]

***

### hide()

> **hide**(`hostId?`): `void`

Defined in: [command.svelte.ts:798](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L798)

#### Parameters

##### hostId?

`string`

#### Returns

`void`

***

### isCommandAvailable()

> **isCommandAvailable**(`id`, `hostId?`): `boolean`

Defined in: [command.svelte.ts:682](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L682)

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

Defined in: [command.svelte.ts:558](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L558)

#### Parameters

##### commandId

`string`

#### Returns

`boolean`

***

### isOpenForHost()

> **isOpenForHost**(`hostId`): `boolean`

Defined in: [command.svelte.ts:364](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L364)

#### Parameters

##### hostId

`string`

#### Returns

`boolean`

***

### loadHotkeys()

> **loadHotkeys**(): `Promise`\<`void`\>

Defined in: [command.svelte.ts:472](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L472)

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

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

[`EventDispatcher`](EventDispatcher.md).[`off`](EventDispatcher.md#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### ref

`EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`offref`](EventDispatcher.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

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

`EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`on`](EventDispatcher.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

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

`EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`once`](EventDispatcher.md#once)

***

### registerCommand()

> **registerCommand**(`command`): `void`

Defined in: [command.svelte.ts:642](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L642)

#### Parameters

##### command

[`Command`](../interfaces/Command.md)

#### Returns

`void`

***

### removeHotkey()

> **removeHotkey**(`commandId`, `hotkey`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L581)

#### Parameters

##### commandId

`string`

##### hotkey

[`Hotkey`](../interfaces/Hotkey.md)

#### Returns

`Promise`\<`void`\>

***

### resetHotkeys()

> **resetHotkeys**(`commandId`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:591](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L591)

#### Parameters

##### commandId

`string`

#### Returns

`Promise`\<`void`\>

***

### saveHotkeys()

> **saveHotkeys**(): `Promise`\<`void`\>

Defined in: [command.svelte.ts:497](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L497)

#### Returns

`Promise`\<`void`\>

***

### setHotkeys()

> **setHotkeys**(`commandId`, `hotkeys`): `Promise`\<`void`\>

Defined in: [command.svelte.ts:562](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L562)

#### Parameters

##### commandId

`string`

##### hotkeys

[`Hotkey`](../interfaces/Hotkey.md)[]

#### Returns

`Promise`\<`void`\>

***

### show()

> **show**(`hostId?`): `void`

Defined in: [command.svelte.ts:793](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L793)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`void`

***

### toggle()

> **toggle**(`hostId?`): `void`

Defined in: [command.svelte.ts:805](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L805)

#### Parameters

##### hostId?

`string` = `...`

#### Returns

`void`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

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

`T` *extends* `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`

#### Parameters

##### evt

`EventRef`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `executed`: \[`command`: [`Command`](../interfaces/Command.md)\]; `hotkeys-updated`: \[`event`: `object`\]; `register`: \[`command`: [`Command`](../interfaces/Command.md)\]; `unregister`: \[`command`: [`Command`](../interfaces/Command.md)\]; \}\>\[`Extract`\<`T`, `"register"` \| `"unregister"` \| `"executed"` \| `"hotkeys-updated"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`tryTrigger`](EventDispatcher.md#trytrigger)

***

### unregisterCommand()

> **unregisterCommand**(`id`): `boolean`

Defined in: [command.svelte.ts:656](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L656)

#### Parameters

##### id

`string`

#### Returns

`boolean`
