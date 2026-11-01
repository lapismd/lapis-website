[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / VaultSession

# Interface: VaultSession

Defined in: [storage/vault-session.ts:47](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L47)

## Properties

### appDatabase?

> `optional` **appDatabase?**: `AppDatabase`

Defined in: [storage/vault-session.ts:51](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L51)

***

### appDatabaseState

> **appDatabaseState**: `VaultSessionAppDatabaseState`

Defined in: [storage/vault-session.ts:56](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L56)

***

### awaitAppDatabase?

> `optional` **awaitAppDatabase?**: (`options?`) => `Promise`\<`VaultSession`\>

Defined in: [storage/vault-session.ts:57](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L57)

#### Parameters

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`VaultSession`\>

***

### backgroundIndexing?

> `optional` **backgroundIndexing?**: `NativeBackgroundIndexing`

Defined in: [storage/vault-session.ts:52](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L52)

***

### close

> **close**: () => `Promise`\<`void`\>

Defined in: [storage/vault-session.ts:60](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L60)

#### Returns

`Promise`\<`void`\>

***

### nativeEditingIntents?

> `optional` **nativeEditingIntents?**: `NativeEditingIntents`

Defined in: [storage/vault-session.ts:54](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L54)

***

### nativeHistoryIndex?

> `optional` **nativeHistoryIndex?**: `NativeHistoryIndex`

Defined in: [storage/vault-session.ts:53](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L53)

***

### nativeTasks?

> `optional` **nativeTasks?**: `NativeTasks`

Defined in: [storage/vault-session.ts:55](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L55)

***

### profile?

> `optional` **profile?**: [`VaultProfile`](VaultProfile.md)

Defined in: [storage/vault-session.ts:49](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L49)

***

### runtime

> **runtime**: `RuntimeTarget`

Defined in: [storage/vault-session.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L48)

***

### vaultAdapter

> **vaultAdapter**: [`VaultAdapter`](VaultAdapter.md)

Defined in: [storage/vault-session.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault-session.ts#L50)
