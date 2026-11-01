---
title: "LanguageServiceManager"
description: "Source-generated public API reference for LanguageServiceManager."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [language-service/manager.ts:75](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L75)

## Constructors

### Constructor

> **new LanguageServiceManager**(`options?`): `LanguageServiceManager`

Defined in: [language-service/manager.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L98)

#### Parameters

##### options?

###### onBeforeResolve?

(`languageId`) => `void` \| `Promise`\<`void`\>

#### Returns

`LanguageServiceManager`

## Methods

### applyCommand()

> **applyCommand**(`document`, `command`): `Promise`\<`void`\>

Defined in: [language-service/manager.ts:385](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L385)

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

Defined in: [language-service/manager.ts:147](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L147)

#### Parameters

##### binding

`LanguageServiceDiagnosticsBinding`

#### Returns

() => `void`

***

### buildDiagnosticItemMenu()

> **buildDiagnosticItemMenu**(`menu`, `entry`): `void`

Defined in: [language-service/manager.ts:209](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L209)

#### Parameters

##### menu

[`Menu`](/developers/api-reference/class-docs/menu/)

##### entry

`WorkspaceDiagnosticEntry`

#### Returns

`void`

***

### cachedCodeActionsFor()

> **cachedCodeActionsFor**(`uri`, `diagnostic`): readonly `LanguageServiceCodeAction`[]

Defined in: [language-service/manager.ts:432](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L432)

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

Defined in: [language-service/manager.ts:166](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L166)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### codeActions()

> **codeActions**(`document`, `range`, `skipProviderIds?`): `Promise`\<`LanguageServiceCodeAction`[]\>

Defined in: [language-service/manager.ts:405](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L405)

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

Defined in: [language-service/manager.ts:310](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L310)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<`LanguageServiceCompletionList` \| `null`\>

***

### definition()

> **definition**(`document`, `position`): `Promise`\<[`LanguageServiceLocation`](/developers/api-reference/interfaces/languageservicelocation/)[]\>

Defined in: [language-service/manager.ts:359](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L359)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceLocation`](/developers/api-reference/interfaces/languageservicelocation/)[]\>

***

### diagnostics()

> **diagnostics**(`document`): `Promise`\<[`LanguageServiceDiagnostic`](/developers/api-reference/interfaces/languageservicediagnostic/)[]\>

Defined in: [language-service/manager.ts:269](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L269)

#### Parameters

##### document

`VirtualDocument`

#### Returns

`Promise`\<[`LanguageServiceDiagnostic`](/developers/api-reference/interfaces/languageservicediagnostic/)[]\>

***

### getDocument()

> **getDocument**(`uri`): `VirtualDocument` \| `null`

Defined in: [language-service/manager.ts:259](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L259)

#### Parameters

##### uri

`string`

#### Returns

`VirtualDocument` \| `null`

***

### getGlobalDeclarations()

> **getGlobalDeclarations**(): `LanguageServiceGlobalDeclaration`[]

Defined in: [language-service/manager.ts:263](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L263)

#### Returns

`LanguageServiceGlobalDeclaration`[]

***

### hover()

> **hover**(`document`, `position`): `Promise`\<[`LanguageServiceHover`](/developers/api-reference/interfaces/languageservicehover/) \| `null`\>

Defined in: [language-service/manager.ts:336](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L336)

#### Parameters

##### document

`VirtualDocument`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceHover`](/developers/api-reference/interfaces/languageservicehover/) \| `null`\>

***

### invalidateDiagnostics()

> **invalidateDiagnostics**(`providerId`): `boolean`

Defined in: [language-service/manager.ts:133](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L133)

#### Parameters

##### providerId

`string`

#### Returns

`boolean`

***

### onDiagnosticsInvalidated()

> **onDiagnosticsInvalidated**(`listener`): () => `void`

Defined in: [language-service/manager.ts:124](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L124)

#### Parameters

##### listener

(`languages`) => `void`

#### Returns

() => `void`

***

### registerGlobalDeclaration()

> **registerGlobalDeclaration**(`declaration`): () => `void`

Defined in: [language-service/manager.ts:229](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L229)

#### Parameters

##### declaration

`LanguageServiceGlobalDeclaration`

#### Returns

() => `void`

***

### registerProvider()

> **registerProvider**(`provider`): () => `void`

Defined in: [language-service/manager.ts:106](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L106)

#### Parameters

##### provider

[`LanguageServiceProvider`](/developers/api-reference/interfaces/languageserviceprovider/)

#### Returns

() => `void`

***

### reportProviderFailure()

> **reportProviderFailure**(`id`, `error`): `void`

Defined in: [language-service/manager.ts:156](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L156)

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

Defined in: [language-service/manager.ts:176](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L176)

#### Parameters

##### uri

`string`

#### Returns

() => `void`

***

### unbindDiagnostics()

> **unbindDiagnostics**(): `void`

Defined in: [language-service/manager.ts:171](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L171)

#### Returns

`void`

***

### updateDocument()

> **updateDocument**(`document`): `void`

Defined in: [language-service/manager.ts:241](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/manager.ts#L241)

#### Parameters

##### document

`VirtualDocument`

#### Returns

`void`
