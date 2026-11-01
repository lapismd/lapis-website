[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / Keymap

# Class: Keymap

Defined in: [command.svelte.ts:865](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L865)

## Constructors

### Constructor

> **new Keymap**(`defaultScope?`): `Keymap`

Defined in: [command.svelte.ts:868](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L868)

#### Parameters

##### defaultScope?

[`Scope`](Scope.md)

#### Returns

`Keymap`

## Methods

### handleAdditionalScopes()

> **handleAdditionalScopes**(`event`): `boolean`

Defined in: [command.svelte.ts:884](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L884)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### handleEvent()

> **handleEvent**(`event`): `boolean`

Defined in: [command.svelte.ts:893](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L893)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### popScope()

> **popScope**(`scope`): `void`

Defined in: [command.svelte.ts:880](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L880)

#### Parameters

##### scope

[`Scope`](Scope.md)

#### Returns

`void`

***

### pushScope()

> **pushScope**(`scope`): `void`

Defined in: [command.svelte.ts:874](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L874)

#### Parameters

##### scope

[`Scope`](Scope.md)

#### Returns

`void`

***

### isModEvent()

> `static` **isModEvent**(`evt`): `boolean`

Defined in: [command.svelte.ts:917](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L917)

#### Parameters

##### evt

`MouseEvent` \| `KeyboardEvent`

#### Returns

`boolean`

***

### isModifier()

> `static` **isModifier**(`evt`, `modifier`): `boolean`

Defined in: [command.svelte.ts:902](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/command.svelte.ts#L902)

#### Parameters

##### evt

`KeyboardEvent`

##### modifier

`Modifier`

#### Returns

`boolean`
