---
title: "Keymap"
description: "Source-generated public API reference for Keymap."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [command.svelte.ts:857](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L857)

## Constructors

### Constructor

> **new Keymap**(`defaultScope?`): `Keymap`

Defined in: [command.svelte.ts:860](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L860)

#### Parameters

##### defaultScope?

[`Scope`](/developers/api-reference/class-docs/scope/)

#### Returns

`Keymap`

## Methods

### handleAdditionalScopes()

> **handleAdditionalScopes**(`event`): `boolean`

Defined in: [command.svelte.ts:876](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L876)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### handleEvent()

> **handleEvent**(`event`): `boolean`

Defined in: [command.svelte.ts:885](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L885)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### popScope()

> **popScope**(`scope`): `void`

Defined in: [command.svelte.ts:872](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L872)

#### Parameters

##### scope

[`Scope`](/developers/api-reference/class-docs/scope/)

#### Returns

`void`

***

### pushScope()

> **pushScope**(`scope`): `void`

Defined in: [command.svelte.ts:866](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L866)

#### Parameters

##### scope

[`Scope`](/developers/api-reference/class-docs/scope/)

#### Returns

`void`

***

### isModEvent()

> `static` **isModEvent**(`evt`): `boolean`

Defined in: [command.svelte.ts:909](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L909)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`boolean`

***

### isModifier()

> `static` **isModifier**(`evt`, `modifier`): `boolean`

Defined in: [command.svelte.ts:894](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L894)

#### Parameters

##### evt

`KeyboardEvent`

##### modifier

`Modifier`

#### Returns

`boolean`
