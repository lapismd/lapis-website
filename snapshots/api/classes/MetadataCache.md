[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MetadataCache

# Class: MetadataCache

Defined in: [cache.svelte.ts:600](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L600)

Indexes parsed markdown metadata, tags, headings, and resolved links for the
active vault.

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}\>

## Constructors

### Constructor

> **new MetadataCache**(`app`): `MetadataCache`

Defined in: [cache.svelte.ts:665](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L665)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`MetadataCache`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [cache.svelte.ts:665](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L665)

***

### logger

> `readonly` **logger**: `Logger`

Defined in: [cache.svelte.ts:632](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L632)

***

### processors

> **processors**: `Map`\<`string`, `Set`\<`MetadataProcessor`\>\>

Defined in: [cache.svelte.ts:624](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L624)

***

### projectionContributors

> **projectionContributors**: `Set`\<`IndexedProjectionContributor`\>

Defined in: [cache.svelte.ts:625](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L625)

## Accessors

### backgroundIndexing

#### Get Signature

> **get** **backgroundIndexing**(): `NativeBackgroundIndexingObserver` \| `undefined`

Defined in: [cache.svelte.ts:678](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L678)

##### Returns

`NativeBackgroundIndexingObserver` \| `undefined`

***

### fileCache

#### Get Signature

> **get** **fileCache**(): `Record`\<`string`, \{ `hash`: `string`; `mtime`: `number`; `size`: `number`; \}\>

Defined in: [cache.svelte.ts:694](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L694)

##### Returns

`Record`\<`string`, \{ `hash`: `string`; `mtime`: `number`; `size`: `number`; \}\>

***

### initialized

#### Get Signature

> **get** **initialized**(): `boolean`

Defined in: [cache.svelte.ts:698](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L698)

##### Returns

`boolean`

***

### metadataCache

#### Get Signature

> **get** **metadataCache**(): `Record`\<`string`, [`CachedMetadata`](../interfaces/CachedMetadata.md)\>

Defined in: [cache.svelte.ts:682](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L682)

##### Returns

`Record`\<`string`, [`CachedMetadata`](../interfaces/CachedMetadata.md)\>

***

### nativeContributionStatuses

#### Get Signature

> **get** **nativeContributionStatuses**(): `ContributionStatus`[]

Defined in: [cache.svelte.ts:1527](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1527)

##### Returns

`ContributionStatus`[]

***

### resolvedLinks

#### Get Signature

> **get** **resolvedLinks**(): `Record`\<`string`, `Record`\<`string`, `number`\>\>

Defined in: [cache.svelte.ts:686](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L686)

##### Returns

`Record`\<`string`, `Record`\<`string`, `number`\>\>

***

### unresolvedLinks

#### Get Signature

> **get** **unresolvedLinks**(): `Record`\<`string`, `Record`\<`string`, `number`\>\>

Defined in: [cache.svelte.ts:690](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L690)

##### Returns

`Record`\<`string`, `Record`\<`string`, `number`\>\>

## Methods

### acquireMetadataSnapshotLease()

> **acquireMetadataSnapshotLease**(): `Promise`\<`MetadataCacheSnapshotLease`\>

Defined in: [cache.svelte.ts:1273](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1273)

#### Returns

`Promise`\<`MetadataCacheSnapshotLease`\>

***

### addIndexedProjectionContributor()

> **addIndexedProjectionContributor**(`contributor`): `void`

Defined in: [cache.svelte.ts:1584](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1584)

#### Parameters

##### contributor

`IndexedProjectionContributor`

#### Returns

`void`

***

### addProcessor()

> **addProcessor**(`ext`, `processor`, `owner?`): `void`

Defined in: [cache.svelte.ts:1531](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1531)

#### Parameters

##### ext

`string`

##### processor

`MetadataProcessor`

##### owner?

`string`

#### Returns

`void`

***

### disableNativeContributions()

> **disableNativeContributions**(`owner`): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:1523](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1523)

#### Parameters

##### owner

`string`

#### Returns

`Promise`\<`void`\>

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}\>\[`Extract`\<`T`, `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatch`](EventDispatcher.md#dispatch)

***

### dispose()

> **dispose**(`options?`): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:725](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L725)

#### Parameters

##### options?

###### persist?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}\>\[`Extract`\<`T`, `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`emit`](EventDispatcher.md#emit)

***

### fileToLinktext()

> **fileToLinktext**(`file`, `sourcePath`, `omitMdExtension?`): `string`

Defined in: [cache.svelte.ts:1417](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1417)

#### Parameters

##### file

[`TFile`](TFile.md)

##### sourcePath

`string`

##### omitMdExtension?

`boolean`

#### Returns

`string`

***

### finishNativeContributions()

> **finishNativeContributions**(`owner`): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:1519](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1519)

#### Parameters

##### owner

`string`

#### Returns

`Promise`\<`void`\>

***

### flushSnapshotSave()

> **flushSnapshotSave**(): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:720](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L720)

#### Returns

`Promise`\<`void`\>

***

### getAllItems()

> **getAllItems**(): `Map`\<[`TFile`](TFile.md), [`CachedMetadata`](../interfaces/CachedMetadata.md)\>

Defined in: [cache.svelte.ts:702](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L702)

#### Returns

`Map`\<[`TFile`](TFile.md), [`CachedMetadata`](../interfaces/CachedMetadata.md)\>

***

### getCache()

> **getCache**(`path`): [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`

Defined in: [cache.svelte.ts:1187](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1187)

#### Parameters

##### path

`string`

#### Returns

[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`

***

### getDirectReferencePaths()

> **getDirectReferencePaths**(`sourcePath`): `string`[]

Defined in: [cache.svelte.ts:1306](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1306)

#### Parameters

##### sourcePath

`string`

#### Returns

`string`[]

***

### getDirectReferencingPaths()

> **getDirectReferencingPaths**(`targetPath`): `string`[]

Defined in: [cache.svelte.ts:1331](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1331)

#### Parameters

##### targetPath

`string`

#### Returns

`string`[]

***

### getFileCache()

> **getFileCache**(`file`): [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`

Defined in: [cache.svelte.ts:1183](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1183)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`

***

### getFileCacheAsync()

> **getFileCacheAsync**(`file`): `Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

Defined in: [cache.svelte.ts:1194](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1194)

#### Parameters

##### file

`string` \| [`TFile`](TFile.md)

#### Returns

`Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

***

### getFirstLinkpathDest()

> **getFirstLinkpathDest**(`linkpath`, `sourcePath`): [`TFile`](TFile.md) \| `null`

Defined in: [cache.svelte.ts:1361](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1361)

#### Parameters

##### linkpath

`string`

##### sourcePath

`string`

#### Returns

[`TFile`](TFile.md) \| `null`

***

### getReconciliationFingerprint()

> **getReconciliationFingerprint**(`acceptsFile?`): `string`

Defined in: [cache.svelte.ts:1072](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1072)

Return the current vault/parser manifest fingerprint used to validate the
durable metadata index and disposable indexed-consumer snapshots. Consumers
may restrict the fingerprint to their accepted metadata files.

#### Parameters

##### acceptsFile?

(`file`) => `boolean`

#### Returns

`string`

***

### isDirectlyAffectedByPathChange()

> **isDirectlyAffectedByPathChange**(`watchedPath`, `changedPath`): `boolean`

Defined in: [cache.svelte.ts:1346](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1346)

#### Parameters

##### watchedPath

`string` \| `null` \| `undefined`

##### changedPath

`string` \| `null` \| `undefined`

#### Returns

`boolean`

***

### load()

> **load**(): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:783](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L783)

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

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

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### ref

`EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`offref`](EventDispatcher.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`on`](EventDispatcher.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`once`](EventDispatcher.md#once)

***

### pathDirectlyReferences()

> **pathDirectlyReferences**(`sourcePath`, `targetPath`): `boolean`

Defined in: [cache.svelte.ts:1323](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1323)

#### Parameters

##### sourcePath

`string`

##### targetPath

`string`

#### Returns

`boolean`

***

### processFileCache()

> **processFileCache**(`file`): `Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

Defined in: [cache.svelte.ts:2097](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L2097)

#### Parameters

##### file

`string` \| [`TFile`](TFile.md) \| `null`

#### Returns

`Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

***

### queryFacets()

> **queryFacets**(`query`): `Promise`\<`AppDatabaseMetadataFacetRow`[]\>

Defined in: [cache.svelte.ts:1217](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1217)

#### Parameters

##### query

`AppDatabaseMetadataFacetQuery`

#### Returns

`Promise`\<`AppDatabaseMetadataFacetRow`[]\>

***

### queryLinks()

> **queryLinks**(`query`): `Promise`\<`AppDatabaseLinkRecord`[]\>

Defined in: [cache.svelte.ts:1223](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1223)

#### Parameters

##### query

`AppDatabaseMetadataLinkQuery`

#### Returns

`Promise`\<`AppDatabaseLinkRecord`[]\>

***

### queryMetadata()

> **queryMetadata**(`query?`): `Promise`\<`AppDatabaseIndexedMetadataRow`[]\>

Defined in: [cache.svelte.ts:1211](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1211)

#### Parameters

##### query?

`AppDatabaseIndexedMetadataQuery` = `{}`

#### Returns

`Promise`\<`AppDatabaseIndexedMetadataRow`[]\>

***

### queryMetadataPage()

> **queryMetadataPage**(`query?`): `Promise`\<`AppDatabaseIndexedMetadataPage`\>

Defined in: [cache.svelte.ts:1205](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1205)

#### Parameters

##### query?

`AppDatabaseIndexedMetadataPageQuery` = `{}`

#### Returns

`Promise`\<`AppDatabaseIndexedMetadataPage`\>

***

### read()

> **read**(`content`, `file`): `Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

Defined in: [cache.svelte.ts:2107](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L2107)

#### Parameters

##### content

`string`

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<[`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\>

***

### rebuild()

> **rebuild**(`progress?`): `Promise`\<`void`\> \| `Promise`\<`IndexingStatus`\>

Defined in: [cache.svelte.ts:1443](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1443)

#### Parameters

##### progress?

[`NotificationProgressHandle`](NotificationProgressHandle.md)

#### Returns

`Promise`\<`void`\> \| `Promise`\<`IndexingStatus`\>

***

### registerNativeProjection()

> **registerNativeProjection**(`owner`, `id`, `registration`): `void`

Defined in: [cache.svelte.ts:1511](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1511)

#### Parameters

##### owner

`string`

##### id

`string`

##### registration

`IndexProjectionRegistration`

#### Returns

`void`

***

### removeIndexedProjectionContributor()

> **removeIndexedProjectionContributor**(`contributor`): `boolean`

Defined in: [cache.svelte.ts:1588](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1588)

#### Parameters

##### contributor

`IndexedProjectionContributor`

#### Returns

`boolean`

***

### removeProcessor()

> **removeProcessor**(`ext`, `processor`): `boolean`

Defined in: [cache.svelte.ts:1541](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1541)

#### Parameters

##### ext

`string`

##### processor

`MetadataProcessor`

#### Returns

`boolean`

***

### saveSnapshotNow()

> **saveSnapshotNow**(`_options?`): `Promise`\<`void`\>

Defined in: [cache.svelte.ts:749](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L749)

#### Parameters

##### \_options?

###### forceBackup?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### scheduleSnapshotSave()

> **scheduleSnapshotSave**(): `void`

Defined in: [cache.svelte.ts:714](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L714)

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [cache.svelte.ts:762](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L762)

#### Returns

`object`

##### fileCache

> **fileCache**: `object`

###### Index Signature

\[`key`: `string`\]: `object`

##### metadataCache

> **metadataCache**: `object`

###### Index Signature

\[`key`: `string`\]: `object`

##### resolvedLinks

> **resolvedLinks**: `object`

###### Index Signature

\[`key`: `string`\]: `object`

##### unresolvedLinks

> **unresolvedLinks**: `object`

###### Index Signature

\[`key`: `string`\]: `object`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}\>\[`Extract`\<`T`, `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`\>\]

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

`T` *extends* `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`

#### Parameters

##### evt

`EventRef`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `changed`: \[`file`: [`TFile`](TFile.md), `data`: `string`, `cache`: [`CachedMetadata`](../interfaces/CachedMetadata.md)\]; `deleted`: \[`file`: [`TFile`](TFile.md), `prevCache`: [`CachedMetadata`](../interfaces/CachedMetadata.md) \| `null`\]; `index-changed`: \[`change`: `AppDatabaseChangeSet`\]; `loaded`: \[\]; \}\>\[`Extract`\<`T`, `"changed"` \| `"deleted"` \| `"loaded"` \| `"index-changed"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`tryTrigger`](EventDispatcher.md#trytrigger)

***

### watchQuery()

> **watchQuery**(`query`, `listener`, `onError?`): `MetadataCacheQueryWatch`\<`AppDatabaseIndexedMetadataPage`\>

Defined in: [cache.svelte.ts:1229](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L1229)

#### Parameters

##### query

`AppDatabaseIndexedMetadataPageQuery`

##### listener

(`page`) => `void`

##### onError?

(`error`) => `void`

#### Returns

`MetadataCacheQueryWatch`\<`AppDatabaseIndexedMetadataPage`\>

***

### writeFrontmatter()

> **writeFrontmatter**(`file`, `data`): `string`

Defined in: [cache.svelte.ts:2124](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/cache.svelte.ts#L2124)

#### Parameters

##### file

[`TFile`](TFile.md)

##### data

`FrontMatterCache`

#### Returns

`string`
