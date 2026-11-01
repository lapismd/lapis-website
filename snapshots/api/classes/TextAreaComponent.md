[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / TextAreaComponent

# Class: TextAreaComponent

Defined in: [settings.svelte.ts:736](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L736)

## Extends

- `AbstractTextComponent`\<`HTMLTextAreaElement`\>

## Constructors

### Constructor

> **new TextAreaComponent**(`containerEl`): `TextAreaComponent`

Defined in: [settings.svelte.ts:738](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L738)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`TextAreaComponent`

#### Overrides

`AbstractTextComponent<HTMLTextAreaElement>.constructor`

## Properties

### metadata

> **metadata**: `Record`\<`string`, `any`\> = `{}`

Defined in: [settings.svelte.ts:68](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L68)

#### Inherited from

`AbstractTextComponent.metadata`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [settings.svelte.ts:677](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L677)

##### Returns

`boolean`

#### Inherited from

`AbstractTextComponent.disabled`

***

### inputEl

#### Get Signature

> **get** **inputEl**(): `T`

Defined in: [settings.svelte.ts:673](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L673)

##### Returns

`T`

#### Inherited from

`AbstractTextComponent.inputEl`

## Methods

### getValue()

> **getValue**(): `string`

Defined in: [settings.svelte.ts:688](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L688)

#### Returns

`string`

#### Inherited from

`AbstractTextComponent.getValue`

***

### onChange()

> **onChange**(`callback`): `this`

Defined in: [settings.svelte.ts:706](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L706)

#### Parameters

##### callback

(`value`) => `any`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.onChange`

***

### onChanged()

> **onChanged**(): `void`

Defined in: [settings.svelte.ts:703](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L703)

#### Returns

`void`

#### Inherited from

`AbstractTextComponent.onChanged`

***

### registerOptionListener()

> **registerOptionListener**(`listeners`, `key`): `this`

Defined in: [settings.svelte.ts:71](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L71)

#### Parameters

##### listeners

`Record`\<`string`, (`value?`) => `T`\>

##### key

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.registerOptionListener`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:682](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L682)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setDisabled`

***

### setMetadata()

> **setMetadata**(`key`, `value`): `this`

Defined in: [settings.svelte.ts:82](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L82)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setMetadata`

***

### setPlaceholder()

> **setPlaceholder**(`placeholder`): `this`

Defined in: [settings.svelte.ts:698](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L698)

#### Parameters

##### placeholder

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setPlaceholder`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [settings.svelte.ts:693](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L693)

#### Parameters

##### value

`string`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.setValue`

***

### then()

> **then**(`cb`): `this`

Defined in: [settings.svelte.ts:59](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L59)

Facilitates chaining

#### Parameters

##### cb

(`component`) => `any`

#### Returns

`this`

#### Inherited from

`AbstractTextComponent.then`
