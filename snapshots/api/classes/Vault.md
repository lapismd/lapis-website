[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / Vault

# Class: Vault

Defined in: [storage/vault.svelte.ts:65](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L65)

High-level file-system facade for the active vault.

`Vault` wraps a [DataAdapter](../interfaces/DataAdapter.md), maintains the in-memory file tree used by
the workspace, and emits Obsidian-style file lifecycle events.

## Extends

- [`EventDispatcher`](EventDispatcher.md)\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}\>

## Constructors

### Constructor

> **new Vault**(`adapter`, `operations?`, `options?`): `Vault`

Defined in: [storage/vault.svelte.ts:109](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L109)

#### Parameters

##### adapter

[`DataAdapter`](../interfaces/DataAdapter.md)

##### operations?

`Pick`\<`FileEditingSessionRegistry`, `"track"`\>

##### options?

`VaultListingOptions` = `{}`

#### Returns

`Vault`

#### Overrides

[`EventDispatcher`](EventDispatcher.md).[`constructor`](EventDispatcher.md#constructor)

## Properties

### adapter

> `readonly` **adapter**: [`DataAdapter`](../interfaces/DataAdapter.md)

Defined in: [storage/vault.svelte.ts:110](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L110)

***

### cache

> `readonly` **cache**: `FileCache`

Defined in: [storage/vault.svelte.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L105)

***

### configDir

> **configDir**: `string` = `DEFAULT_APP_STATE_DIRECTORY`

Defined in: [storage/vault.svelte.ts:104](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L104)

## Accessors

### supportsConditionalTextWrites

#### Get Signature

> **get** **supportsConditionalTextWrites**(): `boolean`

Defined in: [storage/vault.svelte.ts:750](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L750)

##### Returns

`boolean`

***

### supportsExclusiveCreate

#### Get Signature

> **get** **supportsExclusiveCreate**(): `boolean`

Defined in: [storage/vault.svelte.ts:342](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L342)

##### Returns

`boolean`

## Methods

### append()

> **append**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:884](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L884)

#### Parameters

##### file

[`TFile`](TFile.md)

##### data

`string`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### appendBinary()

> **appendBinary**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:907](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L907)

#### Parameters

##### file

[`TFile`](TFile.md)

##### data

`ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### atomicWrite()

> **atomicWrite**(`path`, `source`, `options?`): `Promise`\<[`TFile`](TFile.md)\>

Defined in: [storage/vault.svelte.ts:635](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L635)

Stream a file into the adapter's atomic or strongest safe replacement path.

#### Parameters

##### path

`string`

##### source

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### options?

`AtomicDataWriteOptions` = `{}`

#### Returns

`Promise`\<[`TFile`](TFile.md)\>

***

### cachedRead()

> **cachedRead**(`file`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:583](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L583)

Read the content of a plaintext file stored inside the vault Use this if
you only want to display the content to the user. If you want to modify the
file content afterward use [Vault.read](#read)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`string`\>

***

### copy()

> **copy**\<`T`\>(`file`, `newPath`): `Promise`\<`T`\>

Defined in: [storage/vault.svelte.ts:936](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L936)

#### Type Parameters

##### T

`T` *extends* [`TAbstractFile`](TAbstractFile.md)

#### Parameters

##### file

`T`

##### newPath

`string`

#### Returns

`Promise`\<`T`\>

***

### create()

> **create**(`path`, `data`, `options?`): `Promise`\<[`TFile`](TFile.md)\>

Defined in: [storage/vault.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L308)

Create a new plaintext file inside the vault.

#### Parameters

##### path

`string`

Vault absolute path for the new file, with extension.

##### data

`string`

Text content for the new file.

##### options?

`Partial`\<`FileProperties`\>

(Optional)

#### Returns

`Promise`\<[`TFile`](TFile.md)\>

***

### createBinary()

> **createBinary**(`path`, `data`, `options?`): `Promise`\<[`TFile`](TFile.md)\>

Defined in: [storage/vault.svelte.ts:397](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L397)

Create a new binary file inside the vault.

#### Parameters

##### path

`string`

Vault absolute path for the new file, with extension.

##### data

`ArrayBuffer`

Content for the new file.

##### options?

`Partial`\<`FileProperties`\>

(Optional)

#### Returns

`Promise`\<[`TFile`](TFile.md)\>

#### Throws

Error if file already exists

***

### createExclusive()

> **createExclusive**(`path`, `data`, `options?`): `Promise`\<[`TFile`](TFile.md)\>

Defined in: [storage/vault.svelte.ts:351](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L351)

Create new bytes without replacing a cached or newly arriving file.

#### Parameters

##### path

`string`

##### data

`string` \| `ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<[`TFile`](TFile.md)\>

***

### createFolder()

> **createFolder**(`path`): `Promise`\<[`TFolder`](TFolder.md)\>

Defined in: [storage/vault.svelte.ts:434](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L434)

Create a new folder inside the vault.

#### Parameters

##### path

`string`

Vault absolute path for the new folder.

#### Returns

`Promise`\<[`TFolder`](TFolder.md)\>

#### Throws

Error if folder already exists

***

### delete()

> **delete**(`file`, `force?`, `context?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:506](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L506)

Deletes the file completely.

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

The file or folder to be deleted

##### force?

`boolean`

Should attempt to delete folder even if it has hidden
  children

##### context?

###### operationOrigin?

`string`

#### Returns

`Promise`\<`void`\>

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`dispatch`](EventDispatcher.md#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`emit`](EventDispatcher.md#emit)

***

### exists()

> **exists**(`path`, `sensitive?`): `Promise`\<`boolean`\>

Defined in: [storage/vault.svelte.ts:133](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L133)

#### Parameters

##### path

`string`

##### sensitive?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### getAbstractFileByPath()

> **getAbstractFileByPath**(`path`): [`TAbstractFile`](TAbstractFile.md) \| `null`

Defined in: [storage/vault.svelte.ts:996](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L996)

Get a file or folder inside the vault at the given path. To check if the
return type is a file, use `instanceof TFile`. To check if it is a folder,
use `instanceof TFolder`.

#### Parameters

##### path

`string`

Vault absolute path to the folder or file, with extension,
  case sensitive.

#### Returns

[`TAbstractFile`](TAbstractFile.md) \| `null`

The abstract file, if it's found.

***

### getAllFolders()

> **getAllFolders**(`includeRoot?`): [`TFolder`](TFolder.md)[]

Defined in: [storage/vault.svelte.ts:1038](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1038)

Get all folders in the vault.

#### Parameters

##### includeRoot?

`boolean`

Should the root folder (`/`) be returned

#### Returns

[`TFolder`](TFolder.md)[]

***

### getAllLoadedFiles()

> **getAllLoadedFiles**(): [`TAbstractFile`](TAbstractFile.md)[]

Defined in: [storage/vault.svelte.ts:1027](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1027)

#### Returns

[`TAbstractFile`](TAbstractFile.md)[]

***

### getFileByPath()

> **getFileByPath**(`path`): [`TFile`](TFile.md) \| `null`

Defined in: [storage/vault.svelte.ts:961](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L961)

Get a file inside the vault at the given path. Returns `null` if the file
does not exist.

#### Parameters

##### path

`string`

#### Returns

[`TFile`](TFile.md) \| `null`

***

### getFiles()

> **getFiles**(): [`TFile`](TFile.md)[]

Defined in: [storage/vault.svelte.ts:1053](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1053)

Get all files in the vault.

#### Returns

[`TFile`](TFile.md)[]

***

### getFilesByGlob()

> **getFilesByGlob**(`pattern`, `options?`): [`TFile`](TFile.md)[]

Defined in: [storage/vault.svelte.ts:1092](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1092)

Get all files matching a shared editor-association glob.

Filename-only patterns match files in every folder. Patterns containing a
slash match normalized vault-relative paths. Invalid patterns return no
files.

#### Parameters

##### pattern

`string`

##### options?

`VaultGlobOptions` = `{}`

#### Returns

[`TFile`](TFile.md)[]

***

### getFolderByPath()

> **getFolderByPath**(`path`): [`TFolder`](TFolder.md) \| `null`

Defined in: [storage/vault.svelte.ts:977](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L977)

Get a folder inside the vault at the given path. Returns `null` if the
folder does not exist.

#### Parameters

##### path

`string`

#### Returns

[`TFolder`](TFolder.md) \| `null`

***

### getMarkdownFiles()

> **getMarkdownFiles**(): [`TFile`](TFile.md)[]

Defined in: [storage/vault.svelte.ts:1133](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1133)

#### Returns

[`TFile`](TFile.md)[]

***

### getName()

> **getName**(): `string`

Defined in: [storage/vault.svelte.ts:129](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L129)

#### Returns

`string`

***

### getResourcePath()

> **getResourcePath**(`file`): `string`

Defined in: [storage/vault.svelte.ts:1010](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1010)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`string`

***

### getResourceUrl()

> **getResourceUrl**(`file`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:1014](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1014)

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`string`\>

***

### getRoot()

> **getRoot**(): [`TFolder`](TFolder.md)

Defined in: [storage/vault.svelte.ts:1006](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1006)

Get the root folder of the current vault.

#### Returns

[`TFolder`](TFolder.md)

***

### iterateFiles()

> **iterateFiles**(): `IterableIterator`\<[`TFile`](TFile.md)\>

Defined in: [storage/vault.svelte.ts:1067](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1067)

Iterate loaded files without allocating a second vault-sized collection.
The traversal follows the existing folder tree and only retains iterator
state proportional to folder depth.

#### Returns

`IterableIterator`\<[`TFile`](TFile.md)\>

***

### list()

> **list**(`path?`): `Promise`\<\{ `files`: `string`[]; `folders`: `string`[]; \}\>

Defined in: [storage/vault.svelte.ts:141](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L141)

#### Parameters

##### path?

`string` = `"/"`

#### Returns

`Promise`\<\{ `files`: `string`[]; `folders`: `string`[]; \}\>

***

### load()

> **load**(`options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:154](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L154)

Retry only failed discovery; concurrent and completed loads remain shared.

#### Parameters

##### options?

###### retry?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### loadPath()

> **loadPath**(`basePath?`, `sourceFiles?`): `Promise`\<`Record`\<`string`, [`TAbstractFile`](TAbstractFile.md)\>\>

Defined in: [storage/vault.svelte.ts:253](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L253)

#### Parameters

##### basePath?

`string` = `"/"`

##### sourceFiles?

`Record`\<`string`, [`TAbstractFile`](TAbstractFile.md)\> = `...`

#### Returns

`Promise`\<`Record`\<`string`, [`TAbstractFile`](TAbstractFile.md)\>\>

***

### mkpath()

> **mkpath**(`path`): `Promise`\<[`TFolder`](TFolder.md)\>

Defined in: [storage/vault.svelte.ts:470](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L470)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`TFolder`](TFolder.md)\>

***

### modify()

> **modify**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:732](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L732)

Modify the contents of a plaintext file.

#### Parameters

##### file

[`TFile`](TFile.md)

The file

##### data

`string`

The new file content

##### options?

`Partial`\<`FileProperties`\>

(Optional)

#### Returns

`Promise`\<`void`\>

***

### modifyBinary()

> **modifyBinary**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:814](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L814)

Modify the contents of a binary file.

#### Parameters

##### file

[`TFile`](TFile.md)

The file

##### data

`ArrayBuffer`

The new file content

##### options?

`Partial`\<`FileProperties`\>

(Optional)

#### Returns

`Promise`\<`void`\>

***

### modifyIfUnchanged()

> **modifyIfUnchanged**(`file`, `data`, `expected`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:759](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L759)

Persist only the caller's captured text version; never fall back to write.

#### Parameters

##### file

[`TFile`](TFile.md)

##### data

`string`

##### expected

`string` \| `null`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

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

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### ref

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`offref`](EventDispatcher.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`on`](EventDispatcher.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`once`](EventDispatcher.md#once)

***

### openRead()

> **openRead**(`file`): `Promise`\<`VaultReadHandle`\>

Defined in: [storage/vault.svelte.ts:600](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L600)

Open a stable streamed snapshot of a file when the adapter supports it.

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`VaultReadHandle`\>

***

### process()

> **process**(`file`, `fn`, `options?`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:865](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L865)

Atomically read, modify, and save the contents of a note.

#### Parameters

##### file

[`TFile`](TFile.md)

The file to be read and modified.

##### fn

(`data`) => `string`

A callback function which returns the new content of the note
  synchronously.

##### options?

`Partial`\<`FileProperties`\>

Write options.

#### Returns

`Promise`\<`string`\>

String - the text value of the note that was written.

#### Remarks

Example:

  ```ts
  app.vault.process(file, (data) => {
    return data.replace("Hello", "World");
  });
  ```

***

### read()

> **read**(`file`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:569](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L569)

Read a plaintext file that is stored inside the vault, directly from disk.
Use this if you intend to modify the file content afterwards. Use
[Vault.cachedRead](#cachedread) otherwise for better performance.

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`string`\>

***

### readBinary()

> **readBinary**(`file`): `Promise`\<`ArrayBuffer`\>

Defined in: [storage/vault.svelte.ts:595](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L595)

Read the content of a binary file stored inside the vault.

#### Parameters

##### file

[`TFile`](TFile.md)

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### reconcile()

> **reconcile**(`hints?`, `current?`, `context?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:185](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L185)

Reconcile a complete disk snapshot without replacing live resources.

#### Parameters

##### hints?

readonly `ChangeEvent`[] = `[]`

##### current?

() => `boolean`

##### context?

`Record`\<`string`, `unknown`\> = `{}`

#### Returns

`Promise`\<`void`\>

***

### reload()

> **reload**(): `Promise`\<[`TFolder`](TFolder.md)\>

Defined in: [storage/vault.svelte.ts:176](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L176)

#### Returns

`Promise`\<[`TFolder`](TFolder.md)\>

***

### rename()

> **rename**(`file`, `newPath`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:704](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L704)

Rename or move a file. To ensure links are automatically renamed, use
[FileManager.renameFile](FileManager.md#renamefile) instead.

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

The file to rename/move

##### newPath

`string`

Vault absolute path to move file to.

#### Returns

`Promise`\<`void`\>

***

### revokeResourceUrl()

> **revokeResourceUrl**(`url`): `void`

Defined in: [storage/vault.svelte.ts:1022](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1022)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### stat()

> **stat**(`path`): `Promise`\<`Stat` \| `null`\>

Defined in: [storage/vault.svelte.ts:137](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L137)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`Stat` \| `null`\>

***

### trash()

> **trash**(`file`, `system?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:548](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L548)

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

##### system?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

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

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### evt

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](TAbstractFile.md), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `delete`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](TAbstractFile.md)\]; `rename`: \[`file`: [`TAbstractFile`](TAbstractFile.md), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](EventDispatcher.md).[`tryTrigger`](EventDispatcher.md#trytrigger)

***

### recurseChildren()

> `static` **recurseChildren**(`root`, `cb`): `void`

Defined in: [storage/vault.svelte.ts:1139](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/storage/vault.svelte.ts#L1139)

#### Parameters

##### root

[`TFolder`](TFolder.md)

##### cb

(`file`) => `any`

#### Returns

`void`
