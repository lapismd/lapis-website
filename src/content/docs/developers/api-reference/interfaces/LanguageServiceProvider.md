---
title: "LanguageServiceProvider"
description: "Source-generated public API reference for LanguageServiceProvider."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [language-service/types.ts:121](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L121)

## Properties

### metadata

> **metadata**: [`LanguageServiceProviderMetadata`](/developers/api-reference/interfaces/languageserviceprovidermetadata/)

Defined in: [language-service/types.ts:122](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L122)

## Methods

### applyCommand()?

> `optional` **applyCommand**(`context`, `command`): `void` \| `Promise`\<`void`\>

Defined in: [language-service/types.ts:143](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L143)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### command

`LanguageServiceCodeActionCommand`

#### Returns

`void` \| `Promise`\<`void`\>

***

### dispose()?

> `optional` **dispose**(): `void` \| `Promise`\<`void`\>

Defined in: [language-service/types.ts:147](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L147)

#### Returns

`void` \| `Promise`\<`void`\>

***

### provideCodeActions()?

> `optional` **provideCodeActions**(`context`, `range`): `Promise`\<`LanguageServiceCodeAction`[]\>

Defined in: [language-service/types.ts:139](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L139)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### range

`LanguageServiceRange`

#### Returns

`Promise`\<`LanguageServiceCodeAction`[]\>

***

### provideCompletions()?

> `optional` **provideCompletions**(`context`, `position`): `Promise`\<`LanguageServiceCompletionList` \| `null`\>

Defined in: [language-service/types.ts:127](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L127)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<`LanguageServiceCompletionList` \| `null`\>

***

### provideDefinition()?

> `optional` **provideDefinition**(`context`, `position`): `Promise`\<[`LanguageServiceLocation`](/developers/api-reference/interfaces/languageservicelocation/)[]\>

Defined in: [language-service/types.ts:135](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L135)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceLocation`](/developers/api-reference/interfaces/languageservicelocation/)[]\>

***

### provideDiagnostics()?

> `optional` **provideDiagnostics**(`context`): `Promise`\<[`LanguageServiceDiagnostic`](/developers/api-reference/interfaces/languageservicediagnostic/)[]\>

Defined in: [language-service/types.ts:124](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L124)

#### Parameters

##### context

`LanguageServiceRequestContext`

#### Returns

`Promise`\<[`LanguageServiceDiagnostic`](/developers/api-reference/interfaces/languageservicediagnostic/)[]\>

***

### provideHover()?

> `optional` **provideHover**(`context`, `position`): `Promise`\<[`LanguageServiceHover`](/developers/api-reference/interfaces/languageservicehover/) \| `null`\>

Defined in: [language-service/types.ts:131](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L131)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceHover`](/developers/api-reference/interfaces/languageservicehover/) \| `null`\>

***

### updateDocument()?

> `optional` **updateDocument**(`update`): `void` \| `Promise`\<`void`\>

Defined in: [language-service/types.ts:123](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/language-service/types.ts#L123)

#### Parameters

##### update

`VirtualDocumentUpdate`

#### Returns

`void` \| `Promise`\<`void`\>
