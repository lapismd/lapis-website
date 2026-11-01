[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / FileManager

# Class: FileManager

Defined in: [file-manager.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L48)

High-level helpers for vault file operations that need metadata-aware
follow-up work.

## Constructors

### Constructor

> **new FileManager**(`app`): `FileManager`

Defined in: [file-manager.ts:49](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L49)

#### Parameters

##### app

[`App`](App.md)

#### Returns

`FileManager`

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [file-manager.ts:49](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L49)

## Methods

### createFile()

> **createFile**(`path`, `data`, `options?`): `Promise`\<[`TFile`](TFile.md)\>

Defined in: [file-manager.ts:253](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L253)

New-file intent; exclusive-capable hosts never fall back to overwrite.

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

### generateMarkdownLink()

> **generateMarkdownLink**(`file`, `sourcePath`, `subpath?`, `alias?`): `string`

Defined in: [file-manager.ts:369](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L369)

Generate a Markdown link based on the user's preferences.

#### Parameters

##### file

[`TFile`](TFile.md)

The file to link to.

##### sourcePath

`string`

Where the link is stored in, used to compute relative
  links.

##### subpath?

`string`

A subpath, starting with `#`, used for linking to headings
  or blocks.

##### alias?

`string`

The display text if it's to be different than the file name.
  Pass empty string to use file name.

#### Returns

`string`

***

### getAvailablePathForAttachment()

> **getAvailablePathForAttachment**(`filename`, `sourcePath?`): `string`

Defined in: [file-manager.ts:271](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L271)

#### Parameters

##### filename

`string`

##### sourcePath?

`string`

#### Returns

`string`

***

### getNewFileParent()

> **getNewFileParent**(`sourcePath`, `newFilePath?`): [`TFolder`](TFolder.md)

Defined in: [file-manager.ts:248](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L248)

Gets the folder that new files should be saved to, given the user's
preferences.

#### Parameters

##### sourcePath

`string`

The path to the current open/focused file, used when
  the user wants new files to be created 'in the same folder'. Use an empty
  string if there is no active file.

##### newFilePath?

`string`

The path to the file that will be newly created, used
  to infer what settings to use based on the path's extension.

#### Returns

[`TFolder`](TFolder.md)

***

### processFrontMatter()

> **processFrontMatter**(`file`, `fn`, `options?`): `Promise`\<`void`\>

Defined in: [file-manager.ts:417](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L417)

Atomically read, modify, and save the frontmatter of a note. The
frontmatter is passed in as a JS object, and should be mutated directly to
achieve the desired result.

Remember to handle errors thrown by this method.

#### Parameters

##### file

[`TFile`](TFile.md)

The file to be modified. Must be a Markdown file.

##### fn

(`frontmatter`) => `void`

A callback function which mutates the frontmatter object
  synchronously.

##### options?

`FrontmatterMutationOptions`

Write options.

#### Returns

`Promise`\<`void`\>

#### Remarks

Example:

  ```ts
  app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["key1"] = value;
    delete frontmatter["key2"];
  });
  ```

#### Throws

YAMLParseError if the YAML parsing fails

#### Throws

Any errors that your callback function throws

***

### promptForDeletion()

> **promptForDeletion**(`file`): `Promise`\<`void`\>

Defined in: [file-manager.ts:353](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L353)

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

#### Returns

`Promise`\<`void`\>

***

### renameFile()

> **renameFile**(`file`, `newPath`): `Promise`\<`void`\>

Defined in: [file-manager.ts:293](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L293)

Rename or move a file safely, and update all links to it depending on the
user's preferences.

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

The file to rename

##### newPath

`string`

The new path for the file

#### Returns

`Promise`\<`void`\>

***

### trashFile()

> **trashFile**(`file`): `Promise`\<`void`\>

Defined in: [file-manager.ts:344](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/file-manager.ts#L344)

Remove a file or a folder from the vault according the user's preferred
'trash' options (either moving the file to .trash/ or the OS trash bin).

#### Parameters

##### file

[`TAbstractFile`](TAbstractFile.md)

#### Returns

`Promise`\<`void`\>
