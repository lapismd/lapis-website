[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / SliderComponent

# Class: SliderComponent

Defined in: [settings.svelte.ts:461](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L461)

## Extends

- `ValueComponent`\<`number` \| `number`[]\>

## Constructors

### Constructor

> **new SliderComponent**(`containerEl`): `SliderComponent`

Defined in: [settings.svelte.ts:465](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L465)

#### Parameters

##### containerEl

`HTMLElement`

#### Returns

`SliderComponent`

#### Overrides

ValueComponent\<number \| number\[\]\>.constructor

## Properties

### containerEl

> `readonly` **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:465](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L465)

***

### metadata

> **metadata**: `Record`\<`string`, `any`\> = `{}`

Defined in: [settings.svelte.ts:68](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L68)

#### Inherited from

`ValueComponent.metadata`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [settings.svelte.ts:481](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L481)

##### Returns

`boolean`

#### Overrides

`ValueComponent.disabled`

***

### sliderEl

#### Get Signature

> **get** **sliderEl**(): `HTMLElement`

Defined in: [settings.svelte.ts:477](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L477)

##### Returns

`HTMLElement`

## Methods

### getValue()

> **getValue**(): `number` \| `number`[]

Defined in: [settings.svelte.ts:508](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L508)

#### Returns

`number` \| `number`[]

#### Overrides

`ValueComponent.getValue`

***

### onChange()

> **onChange**(`callback`): `this`

Defined in: [settings.svelte.ts:521](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L521)

#### Parameters

##### callback

(`value`) => `any`

#### Returns

`this`

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

`ValueComponent.registerOptionListener`

***

### setDisabled()

> **setDisabled**(`disabled`): `this`

Defined in: [settings.svelte.ts:486](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L486)

#### Parameters

##### disabled

`boolean`

#### Returns

`this`

#### Overrides

`ValueComponent.setDisabled`

***

### setDynamicTooltip()

> **setDynamicTooltip**(): `this`

Defined in: [settings.svelte.ts:491](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L491)

#### Returns

`this`

***

### setLimits()

> **setLimits**(`min`, `max`, `step`): `this`

Defined in: [settings.svelte.ts:495](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L495)

#### Parameters

##### min

`number`

##### max

`number`

##### step

`number`

#### Returns

`this`

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

`ValueComponent.setMetadata`

***

### setType()

> **setType**(`type`): `this`

Defined in: [settings.svelte.ts:502](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L502)

#### Parameters

##### type

`"multiple"` \| `"single"`

#### Returns

`this`

***

### setValue()

> **setValue**(`value`): `this`

Defined in: [settings.svelte.ts:516](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L516)

#### Parameters

##### value

`number` \| `number`[]

#### Returns

`this`

#### Overrides

`ValueComponent.setValue`

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

`ValueComponent.then`
