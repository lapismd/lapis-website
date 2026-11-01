---
title: "Vault"
description: "Source-generated public API reference for Vault."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [storage/vault.svelte.ts:65](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L65)

High-level file-system facade for the active vault.

`Vault` wraps a [DataAdapter](/developers/api-reference/interfaces/dataadapter/), maintains the in-memory file tree used by
the workspace, and emits Obsidian-style file lifecycle events.

## Extends

- [`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/)\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}\>

## Constructors

### Constructor

> **new Vault**(`adapter`, `operations?`, `options?`): `Vault`

Defined in: [storage/vault.svelte.ts:109](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L109)

#### Parameters

##### adapter

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

##### operations?

`Pick`\<`FileEditingSessionRegistry`, `"track"`\>

##### options?

`VaultListingOptions` = `{}`

#### Returns

`Vault`

#### Overrides

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`constructor`](/developers/api-reference/class-docs/eventdispatcher/#constructor)

## Properties

### adapter

> `readonly` **adapter**: [`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

Defined in: [storage/vault.svelte.ts:110](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L110)

***

### cache

> `readonly` **cache**: `FileCache`

Defined in: [storage/vault.svelte.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L105)

***

### configDir

> **configDir**: `string` = `DEFAULT_APP_STATE_DIRECTORY`

Defined in: [storage/vault.svelte.ts:104](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L104)

## Accessors

### supportsConditionalTextWrites

#### Get Signature

> **get** **supportsConditionalTextWrites**(): `boolean`

Defined in: [storage/vault.svelte.ts:736](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L736)

##### Returns

`boolean`

***

### supportsExclusiveCreate

#### Get Signature

> **get** **supportsExclusiveCreate**(): `boolean`

Defined in: [storage/vault.svelte.ts:328](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L328)

##### Returns

`boolean`

## Methods

### append()

> **append**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:869](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L869)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

##### data

`string`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### appendBinary()

> **appendBinary**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:892](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L892)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

##### data

`ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<`void`\>

***

### atomicWrite()

> **atomicWrite**(`path`, `source`, `options?`): `Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

Defined in: [storage/vault.svelte.ts:621](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L621)

Stream a file into the adapter's atomic or strongest safe replacement path.

#### Parameters

##### path

`string`

##### source

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### options?

`AtomicDataWriteOptions` = `{}`

#### Returns

`Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

***

### cachedRead()

> **cachedRead**(`file`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:569](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L569)

Read the content of a plaintext file stored inside the vault Use this if
you only want to display the content to the user. If you want to modify the
file content afterward use [Vault.read](#read)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`string`\>

***

### copy()

> **copy**\<`T`\>(`file`, `newPath`): `Promise`\<`T`\>

Defined in: [storage/vault.svelte.ts:921](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L921)

#### Type Parameters

##### T

`T` *extends* [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

#### Parameters

##### file

`T`

##### newPath

`string`

#### Returns

`Promise`\<`T`\>

***

### create()

> **create**(`path`, `data`, `options?`): `Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

Defined in: [storage/vault.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L294)

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

`Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

***

### createBinary()

> **createBinary**(`path`, `data`, `options?`): `Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

Defined in: [storage/vault.svelte.ts:383](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L383)

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

`Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

#### Throws

Error if file already exists

***

### createExclusive()

> **createExclusive**(`path`, `data`, `options?`): `Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

Defined in: [storage/vault.svelte.ts:337](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L337)

Create new bytes without replacing a cached or newly arriving file.

#### Parameters

##### path

`string`

##### data

`string` \| `ArrayBuffer`

##### options?

`Partial`\<`FileProperties`\>

#### Returns

`Promise`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

***

### createFolder()

> **createFolder**(`path`): `Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

Defined in: [storage/vault.svelte.ts:420](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L420)

Create a new folder inside the vault.

#### Parameters

##### path

`string`

Vault absolute path for the new folder.

#### Returns

`Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

#### Throws

Error if folder already exists

***

### delete()

> **delete**(`file`, `force?`, `context?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:492](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L492)

Deletes the file completely.

#### Parameters

##### file

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

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

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`dispatch`](/developers/api-reference/class-docs/eventdispatcher/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`emit`](/developers/api-reference/class-docs/eventdispatcher/#emit)

***

### exists()

> **exists**(`path`, `sensitive?`): `Promise`\<`boolean`\>

Defined in: [storage/vault.svelte.ts:132](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L132)

#### Parameters

##### path

`string`

##### sensitive?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### getAbstractFileByPath()

> **getAbstractFileByPath**(`path`): [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/) \| `null`

Defined in: [storage/vault.svelte.ts:981](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L981)

Get a file or folder inside the vault at the given path. To check if the
return type is a file, use `instanceof TFile`. To check if it is a folder,
use `instanceof TFolder`.

#### Parameters

##### path

`string`

Vault absolute path to the folder or file, with extension,
  case sensitive.

#### Returns

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/) \| `null`

The abstract file, if it's found.

***

### getAllFolders()

> **getAllFolders**(`includeRoot?`): [`TFolder`](/developers/api-reference/class-docs/tfolder/)[]

Defined in: [storage/vault.svelte.ts:1023](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1023)

Get all folders in the vault.

#### Parameters

##### includeRoot?

`boolean`

Should the root folder (`/`) be returned

#### Returns

[`TFolder`](/developers/api-reference/class-docs/tfolder/)[]

***

### getAllLoadedFiles()

> **getAllLoadedFiles**(): [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)[]

Defined in: [storage/vault.svelte.ts:1012](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1012)

#### Returns

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)[]

***

### getFileByPath()

> **getFileByPath**(`path`): [`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

Defined in: [storage/vault.svelte.ts:946](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L946)

Get a file inside the vault at the given path. Returns `null` if the file
does not exist.

#### Parameters

##### path

`string`

#### Returns

[`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

***

### getFiles()

> **getFiles**(): [`TFile`](/developers/api-reference/class-docs/tfile/)[]

Defined in: [storage/vault.svelte.ts:1038](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1038)

Get all files in the vault.

#### Returns

[`TFile`](/developers/api-reference/class-docs/tfile/)[]

***

### getFilesByGlob()

> **getFilesByGlob**(`pattern`, `options?`): [`TFile`](/developers/api-reference/class-docs/tfile/)[]

Defined in: [storage/vault.svelte.ts:1077](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1077)

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

[`TFile`](/developers/api-reference/class-docs/tfile/)[]

***

### getFolderByPath()

> **getFolderByPath**(`path`): [`TFolder`](/developers/api-reference/class-docs/tfolder/) \| `null`

Defined in: [storage/vault.svelte.ts:962](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L962)

Get a folder inside the vault at the given path. Returns `null` if the
folder does not exist.

#### Parameters

##### path

`string`

#### Returns

[`TFolder`](/developers/api-reference/class-docs/tfolder/) \| `null`

***

### getMarkdownFiles()

> **getMarkdownFiles**(): [`TFile`](/developers/api-reference/class-docs/tfile/)[]

Defined in: [storage/vault.svelte.ts:1118](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1118)

#### Returns

[`TFile`](/developers/api-reference/class-docs/tfile/)[]

***

### getName()

> **getName**(): `string`

Defined in: [storage/vault.svelte.ts:128](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L128)

#### Returns

`string`

***

### getResourcePath()

> **getResourcePath**(`file`): `string`

Defined in: [storage/vault.svelte.ts:995](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L995)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`string`

***

### getResourceUrl()

> **getResourceUrl**(`file`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:999](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L999)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`string`\>

***

### getRoot()

> **getRoot**(): [`TFolder`](/developers/api-reference/class-docs/tfolder/)

Defined in: [storage/vault.svelte.ts:991](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L991)

Get the root folder of the current vault.

#### Returns

[`TFolder`](/developers/api-reference/class-docs/tfolder/)

***

### iterateFiles()

> **iterateFiles**(): `IterableIterator`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

Defined in: [storage/vault.svelte.ts:1052](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1052)

Iterate loaded files without allocating a second vault-sized collection.
The traversal follows the existing folder tree and only retains iterator
state proportional to folder depth.

#### Returns

`IterableIterator`\<[`TFile`](/developers/api-reference/class-docs/tfile/)\>

***

### list()

> **list**(`path?`): `Promise`\<\{ `files`: `string`[]; `folders`: `string`[]; \}\>

Defined in: [storage/vault.svelte.ts:140](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L140)

#### Parameters

##### path?

`string` = `"/"`

#### Returns

`Promise`\<\{ `files`: `string`[]; `folders`: `string`[]; \}\>

***

### load()

> **load**(`options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts)

Retry only failed discovery; concurrent and completed loads remain shared.

#### Parameters

##### options?

###### retry?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### loadPath()

> **loadPath**(`basePath?`, `sourceFiles?`): `Promise`\<`Record`\<`string`, [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\>\>

Defined in: [storage/vault.svelte.ts:239](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L239)

#### Parameters

##### basePath?

`string` = `"/"`

##### sourceFiles?

`Record`\<`string`, [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\> = `...`

#### Returns

`Promise`\<`Record`\<`string`, [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\>\>

***

### mkpath()

> **mkpath**(`path`): `Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

Defined in: [storage/vault.svelte.ts:456](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L456)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

***

### modify()

> **modify**(`file`, `data`, `options?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:718](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L718)

Modify the contents of a plaintext file.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

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

Defined in: [storage/vault.svelte.ts:800](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L800)

Modify the contents of a binary file.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

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

Defined in: [storage/vault.svelte.ts:745](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L745)

Persist only the caller's captured text version; never fall back to write.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

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

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

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

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`off`](/developers/api-reference/class-docs/eventdispatcher/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### ref

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`offref`](/developers/api-reference/class-docs/eventdispatcher/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

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

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`on`](/developers/api-reference/class-docs/eventdispatcher/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

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

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`once`](/developers/api-reference/class-docs/eventdispatcher/#once)

***

### openRead()

> **openRead**(`file`): `Promise`\<`VaultReadHandle`\>

Defined in: [storage/vault.svelte.ts:586](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L586)

Open a stable streamed snapshot of a file when the adapter supports it.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`VaultReadHandle`\>

***

### process()

> **process**(`file`, `fn`, `options?`): `Promise`\<`string`\>

Defined in: [storage/vault.svelte.ts:850](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L850)

Atomically read, modify, and save the contents of a note.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

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

Defined in: [storage/vault.svelte.ts:555](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L555)

Read a plaintext file that is stored inside the vault, directly from disk.
Use this if you intend to modify the file content afterwards. Use
[Vault.cachedRead](#cachedread) otherwise for better performance.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`string`\>

***

### readBinary()

> **readBinary**(`file`): `Promise`\<`ArrayBuffer`\>

Defined in: [storage/vault.svelte.ts:581](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L581)

Read the content of a binary file stored inside the vault.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### reconcile()

> **reconcile**(`hints?`, `current?`, `context?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:171](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L171)

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

> **reload**(): `Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

Defined in: [storage/vault.svelte.ts:162](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L162)

#### Returns

`Promise`\<[`TFolder`](/developers/api-reference/class-docs/tfolder/)\>

***

### rename()

> **rename**(`file`, `newPath`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:690](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L690)

Rename or move a file. To ensure links are automatically renamed, use
[FileManager.renameFile](/developers/api-reference/class-docs/filemanager/#renamefile) instead.

#### Parameters

##### file

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

The file to rename/move

##### newPath

`string`

Vault absolute path to move file to.

#### Returns

`Promise`\<`void`\>

***

### revokeResourceUrl()

> **revokeResourceUrl**(`url`): `void`

Defined in: [storage/vault.svelte.ts:1007](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1007)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### stat()

> **stat**(`path`): `Promise`\<`Stat` \| `null`\>

Defined in: [storage/vault.svelte.ts:136](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L136)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`Stat` \| `null`\>

***

### trash()

> **trash**(`file`, `system?`): `Promise`\<`void`\>

Defined in: [storage/vault.svelte.ts:534](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L534)

#### Parameters

##### file

[`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)

##### system?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`trigger`](/developers/api-reference/class-docs/eventdispatcher/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`

#### Parameters

##### evt

`EventRef`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `all`: \[`event`: `string`, `file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `context`: `Record`\<`string`, `unknown`\>\]; `create`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `delete`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `load`: \[\]; `modify`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/)\]; `rename`: \[`file`: [`TAbstractFile`](/developers/api-reference/class-docs/tabstractfile/), `oldPath`: `string`\]; \}\>\[`Extract`\<`T`, `"all"` \| `"rename"` \| `"create"` \| `"modify"` \| `"delete"` \| `"load"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`tryTrigger`](/developers/api-reference/class-docs/eventdispatcher/#trytrigger)

***

### recurseChildren()

> `static` **recurseChildren**(`root`, `cb`): `void`

Defined in: [storage/vault.svelte.ts:1124](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/storage/vault.svelte.ts#L1124)

#### Parameters

##### root

[`TFolder`](/developers/api-reference/class-docs/tfolder/)

##### cb

(`file`) => `any`

#### Returns

`void`
