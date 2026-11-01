[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / LanguageServiceManager

# Class: LanguageServiceManager

Defined in: [language-service/manager.ts:75](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L75)

## Constructors

### Constructor

> **new LanguageServiceManager**(`options?`): `LanguageServiceManager`

Defined in: [language-service/manager.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L98)

#### Parameters

##### options?

###### onBeforeResolve?

(`languageId`) => `void` \| `Promise`\<`void`\>

#### Returns

`LanguageServiceManager`

## Methods

### applyCommand()

> **applyCommand**(`document`, `command`): `Promise`\<`void`\>

Defined in: [language-service/manager.ts:385](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L385)

#### Parameters

##### document

`VirtualDocument`

##### command

`LanguageServiceCodeActionCommand`

#### Returns

`Promise`\<`void`\>

***

### bindDiagnostics()

> **bindDiagnostics**(`binding`): () => `void`

Defined in: [language-service/manager.ts:147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L147)

#### Parameters

##### binding

`LanguageServiceDiagnosticsBinding`

#### Returns

() => `void`

***

### buildDiagnosticItemMenu()

> **buildDiagnosticItemMenu**(`menu`, `entry`): `void`

Defined in: [language-service/manager.ts:209](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L209)

#### Parameters

##### menu

[`Menu`](Menu.md)

##### entry

`WorkspaceDiagnosticEntry`

#### Returns

`void`

***

### cachedCodeActionsFor()

> **cachedCodeActionsFor**(`uri`, `diagnostic`): readonly `LanguageServiceCodeAction`[]

Defined in: [language-service/manager.ts:432](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L432)

#### Parameters

##### uri

`string`

##### diagnostic

`Pick`\<`WorkspaceDiagnostic`, `"message"` \| `"range"` \| `"code"`\>

#### Returns

readonly `LanguageServiceCodeAction`[]

***

### clearProviderFailure()

> **clearProviderFailure**(`id`): `void`

Defined in: [language-service/manager.ts:166](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L166)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### codeActions()

> **codeActions**(`document`, `range`, `skipProviderIds?`): `Promise`\<`LanguageServiceCodeAction`[]\>

Defined in: [language-service/manager.ts:405](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L405)

#### Parameters

##### document

`VirtualDocument`

##### range

`LanguageServiceRange`

##### skipProviderIds?

`ReadonlySet`\<`string`\>

#### Returns

`Promise`\<`LanguageServiceCodeAction`[]\>

***

### completions()

> **completions**(`document`, `position`): `Promise`\<`LanguageServiceCompletionList` \| `null`\>

Defined in: [language-service/manager.ts:310](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L310)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<`LanguageServiceCompletionList` \| `null`\>

***

### definition()

> **definition**(`document`, `position`): `Promise`\<[`LanguageServiceLocation`](../interfaces/LanguageServiceLocation.md)[]\>

Defined in: [language-service/manager.ts:359](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L359)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceLocation`](../interfaces/LanguageServiceLocation.md)[]\>

***

### diagnostics()

> **diagnostics**(`document`): `Promise`\<[`LanguageServiceDiagnostic`](../interfaces/LanguageServiceDiagnostic.md)[]\>

Defined in: [language-service/manager.ts:269](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L269)

#### Parameters

##### document

`VirtualDocument`

#### Returns

`Promise`\<[`LanguageServiceDiagnostic`](../interfaces/LanguageServiceDiagnostic.md)[]\>

***

### getDocument()

> **getDocument**(`uri`): `VirtualDocument` \| `null`

Defined in: [language-service/manager.ts:259](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L259)

#### Parameters

##### uri

`string`

#### Returns

`VirtualDocument` \| `null`

***

### getGlobalDeclarations()

> **getGlobalDeclarations**(): `LanguageServiceGlobalDeclaration`[]

Defined in: [language-service/manager.ts:263](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L263)

#### Returns

`LanguageServiceGlobalDeclaration`[]

***

### hover()

> **hover**(`document`, `position`): `Promise`\<[`LanguageServiceHover`](../interfaces/LanguageServiceHover.md) \| `null`\>

Defined in: [language-service/manager.ts:336](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L336)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceHover`](../interfaces/LanguageServiceHover.md) \| `null`\>

***

### invalidateDiagnostics()

> **invalidateDiagnostics**(`providerId`): `boolean`

Defined in: [language-service/manager.ts:133](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L133)

#### Parameters

##### providerId

`string`

#### Returns

`boolean`

***

### onDiagnosticsInvalidated()

> **onDiagnosticsInvalidated**(`listener`): () => `void`

Defined in: [language-service/manager.ts:124](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L124)

#### Parameters

##### listener

(`languages`) => `void`

#### Returns

() => `void`

***

### registerGlobalDeclaration()

> **registerGlobalDeclaration**(`declaration`): () => `void`

Defined in: [language-service/manager.ts:229](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L229)

#### Parameters

##### declaration

`LanguageServiceGlobalDeclaration`

#### Returns

() => `void`

***

### registerProvider()

> **registerProvider**(`provider`): () => `void`

Defined in: [language-service/manager.ts:106](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L106)

#### Parameters

##### provider

[`LanguageServiceProvider`](../interfaces/LanguageServiceProvider.md)

#### Returns

() => `void`

***

### reportProviderFailure()

> **reportProviderFailure**(`id`, `error`): `void`

Defined in: [language-service/manager.ts:156](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L156)

#### Parameters

##### id

`string`

##### error

`unknown`

#### Returns

`void`

***

### retainDocument()

> **retainDocument**(`uri`): () => `void`

Defined in: [language-service/manager.ts:176](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L176)

#### Parameters

##### uri

`string`

#### Returns

() => `void`

***

### unbindDiagnostics()

> **unbindDiagnostics**(): `void`

Defined in: [language-service/manager.ts:171](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L171)

#### Returns

`void`

***

### updateDocument()

> **updateDocument**(`document`): `void`

Defined in: [language-service/manager.ts:241](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/manager.ts#L241)

#### Parameters

##### document

`VirtualDocument`

#### Returns

`void`
