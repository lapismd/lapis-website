[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / LanguageServiceProvider

# Interface: LanguageServiceProvider

Defined in: [language-service/types.ts:121](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L121)

## Properties

### metadata

> **metadata**: [`LanguageServiceProviderMetadata`](LanguageServiceProviderMetadata.md)

Defined in: [language-service/types.ts:122](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L122)

## Methods

### applyCommand()?

> `optional` **applyCommand**(`context`, `command`): `void` \| `Promise`\<`void`\>

Defined in: [language-service/types.ts:143](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L143)

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

Defined in: [language-service/types.ts:147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L147)

#### Returns

`void` \| `Promise`\<`void`\>

***

### provideCodeActions()?

> `optional` **provideCodeActions**(`context`, `range`): `Promise`\<`LanguageServiceCodeAction`[]\>

Defined in: [language-service/types.ts:139](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L139)

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

Defined in: [language-service/types.ts:127](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L127)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<`LanguageServiceCompletionList` \| `null`\>

***

### provideDefinition()?

> `optional` **provideDefinition**(`context`, `position`): `Promise`\<[`LanguageServiceLocation`](LanguageServiceLocation.md)[]\>

Defined in: [language-service/types.ts:135](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L135)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceLocation`](LanguageServiceLocation.md)[]\>

***

### provideDiagnostics()?

> `optional` **provideDiagnostics**(`context`): `Promise`\<[`LanguageServiceDiagnostic`](LanguageServiceDiagnostic.md)[]\>

Defined in: [language-service/types.ts:124](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L124)

#### Parameters

##### context

`LanguageServiceRequestContext`

#### Returns

`Promise`\<[`LanguageServiceDiagnostic`](LanguageServiceDiagnostic.md)[]\>

***

### provideHover()?

> `optional` **provideHover**(`context`, `position`): `Promise`\<[`LanguageServiceHover`](LanguageServiceHover.md) \| `null`\>

Defined in: [language-service/types.ts:131](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L131)

#### Parameters

##### context

`LanguageServiceRequestContext`

##### position

`LanguageServicePosition`

#### Returns

`Promise`\<[`LanguageServiceHover`](LanguageServiceHover.md) \| `null`\>

***

### updateDocument()?

> `optional` **updateDocument**(`update`): `void` \| `Promise`\<`void`\>

Defined in: [language-service/types.ts:123](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/language-service/types.ts#L123)

#### Parameters

##### update

`VirtualDocumentUpdate`

#### Returns

`void` \| `Promise`\<`void`\>
