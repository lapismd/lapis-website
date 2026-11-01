---
title: "Editor"
description: "Source-generated public API reference for Editor."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [editor.svelte.ts:234](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L234)

## Extends

- [`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/)\<\{ `change`: \[`data`: `string`\]; \}\>

## Constructors

### Constructor

> **new Editor**(`data?`, `extensions?`, `application?`): `Editor`

Defined in: [editor.svelte.ts:664](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L664)

#### Parameters

##### data?

`string` = `""`

##### extensions?

`Extension`[] = `[]`

##### application?

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`Editor`

#### Overrides

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`constructor`](/developers/api-reference/class-docs/eventdispatcher/#constructor)

## Properties

### data

> **data**: `string` = `""`

Defined in: [editor.svelte.ts:665](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L665)

***

### extensions

> **extensions**: `Extension`[] = `[]`

Defined in: [editor.svelte.ts:666](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L666)

***

### id

> `readonly` **id**: `` `${string}-${string}-${string}-${string}-${string}` ``

Defined in: [editor.svelte.ts:245](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L245)

***

### save

> `readonly` **save**: (() => `Promise`\<`void`\> \| `undefined`) & `object`

Defined in: [editor.svelte.ts:696](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L696)

#### Type Declaration

##### cancel

> **cancel**: () => `void`

###### Returns

`void`

##### flush

> **flush**: () => `Promise`\<`void`\> \| `undefined`

###### Returns

`Promise`\<`void`\> \| `undefined`

***

### view

> **view**: `EditorView`

Defined in: [editor.svelte.ts:237](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L237)

## Accessors

### app

#### Get Signature

> **get** **app**(): [`App`](/developers/api-reference/class-docs/app/)

Defined in: [editor.svelte.ts:692](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L692)

The owning application, with the global alias retained as fallback.

##### Returns

[`App`](/developers/api-reference/class-docs/app/)

***

### cm

#### Get Signature

> **get** **cm**(): `EditorView`

Defined in: [editor.svelte.ts:712](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L712)

##### Returns

`EditorView`

***

### editingProtected

#### Get Signature

> **get** **editingProtected**(): `boolean`

Defined in: [editor.svelte.ts:483](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L483)

##### Returns

`boolean`

***

### file

#### Get Signature

> **get** **file**(): [`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

Defined in: [editor.svelte.ts:257](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L257)

##### Returns

[`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

#### Set Signature

> **set** **file**(`file`): `void`

Defined in: [editor.svelte.ts:260](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L260)

##### Parameters

###### file

[`TFile`](/developers/api-reference/class-docs/tfile/) \| `null`

##### Returns

`void`

***

### hasUnsavedChanges

#### Get Signature

> **get** **hasUnsavedChanges**(): `boolean`

Defined in: [editor.svelte.ts:476](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L476)

##### Returns

`boolean`

***

### persistence

#### Get Signature

> **get** **persistence**(): `EditorPersistence`

Defined in: [editor.svelte.ts:275](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L275)

##### Returns

`EditorPersistence`

#### Set Signature

> **set** **persistence**(`value`): `void`

Defined in: [editor.svelte.ts:278](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L278)

##### Parameters

###### value

`EditorPersistence`

##### Returns

`void`

***

### refreshError

#### Get Signature

> **get** **refreshError**(): `unknown`

Defined in: [editor.svelte.ts:660](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L660)

##### Returns

`unknown`

## Methods

### bindApplication()

> **bindApplication**(`application`): `this`

Defined in: [editor.svelte.ts:675](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L675)

Bind this editor to the application that owns its view.

#### Parameters

##### application

[`App`](/developers/api-reference/class-docs/app/)

#### Returns

`this`

***

### blur()

> **blur**(): `void`

Defined in: [editor.svelte.ts:1042](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1042)

#### Returns

`void`

***

### cancelDocumentLoad()

> **cancelDocumentLoad**(): `void`

Defined in: [editor.svelte.ts:656](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L656)

Cancel a pending publication while observing any late read result.

#### Returns

`void`

***

### cancelPendingChanges()

> **cancelPendingChanges**(): `void`

Defined in: [editor.svelte.ts:762](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L762)

Cancel a queued change when the owning document is intentionally reset.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [editor.svelte.ts:775](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L775)

#### Returns

`void`

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `"change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `change`: \[`data`: `string`\]; \}\>\[`Extract`\<`T`, `"change"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`dispatch`](/developers/api-reference/class-docs/eventdispatcher/#dispatch)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: [editor.svelte.ts:784](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L784)

Stop editing immediately and await all retained document persistence.

#### Returns

`Promise`\<`void`\>

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `"change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `change`: \[`data`: `string`\]; \}\>\[`Extract`\<`T`, `"change"`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`emit`](/developers/api-reference/class-docs/eventdispatcher/#emit)

***

### exec()

> **exec**(`command`): `void`

Defined in: [editor.svelte.ts:1085](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1085)

#### Parameters

##### command

`EditorCommandName`

#### Returns

`void`

***

### flushChanges()

> **flushChanges**(): `Promise`\<`void`\>

Defined in: [editor.svelte.ts:730](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L730)

Drain every captured document, including failed or retired saves.

#### Returns

`Promise`\<`void`\>

***

### focus()

> **focus**(): `void`

Defined in: [editor.svelte.ts:1038](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1038)

#### Returns

`void`

***

### getCursor()

> **getCursor**(`side?`): [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [editor.svelte.ts:974](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L974)

#### Parameters

##### side?

`"anchor"` \| `"to"` \| `"from"` \| `"head"` = `"head"`

#### Returns

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

***

### getDoc()

> **getDoc**(): `this`

Defined in: [editor.svelte.ts:1226](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1226)

#### Returns

`this`

***

### getLine()

> **getLine**(`line`): `string`

Defined in: [editor.svelte.ts:952](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L952)

#### Parameters

##### line

`number`

#### Returns

`string`

***

### getRange()

> **getRange**(`from`, `to`): `string`

Defined in: [editor.svelte.ts:960](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L960)

#### Parameters

##### from

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### to

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

#### Returns

`string`

***

### getScrollInfo()

> **getScrollInfo**(): [`EditorScrollInfo`](/developers/api-reference/interfaces/editorscrollinfo/)

Defined in: [editor.svelte.ts:1050](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1050)

#### Returns

[`EditorScrollInfo`](/developers/api-reference/interfaces/editorscrollinfo/)

***

### getSelection()

> **getSelection**(): `string`

Defined in: [editor.svelte.ts:1218](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1218)

#### Returns

`string`

***

### getValue()

> **getValue**(): `string`

Defined in: [editor.svelte.ts:767](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L767)

#### Returns

`string`

***

### hasFocus()

> **hasFocus**(): `boolean`

Defined in: [editor.svelte.ts:1046](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1046)

#### Returns

`boolean`

***

### lastLine()

> **lastLine**(): `number`

Defined in: [editor.svelte.ts:1201](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1201)

#### Returns

`number`

***

### lineCount()

> **lineCount**(): `number`

Defined in: [editor.svelte.ts:1214](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1214)

#### Returns

`number`

***

### listSelections()

> **listSelections**(): [`EditorSelection`](/developers/api-reference/interfaces/editorselection/)[]

Defined in: [editor.svelte.ts:987](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L987)

#### Returns

[`EditorSelection`](/developers/api-reference/interfaces/editorselection/)[]

***

### loadDocument()

> **loadDocument**(`file`, `read`, `publish?`): `Promise`\<`boolean`\>

Defined in: [editor.svelte.ts:547](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L547)

Register and protect a target, then publish its file and contents
atomically.

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

##### read

() => `Promise`\<`string`\>

##### publish?

(`contents`) => `void`

#### Returns

`Promise`\<`boolean`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `"change"`

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

`T` *extends* `"change"`

#### Parameters

##### ref

`EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`offref`](/developers/api-reference/class-docs/eventdispatcher/#offref)

***

### offsetToPos()

> **offsetToPos**(`offset`): [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [editor.svelte.ts:1173](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1173)

#### Parameters

##### offset

`number`

#### Returns

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `"change"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`on`](/developers/api-reference/class-docs/eventdispatcher/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `"change"`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`once`](/developers/api-reference/class-docs/eventdispatcher/#once)

***

### onChange()

> **onChange**(`data`): `void`

Defined in: [editor.svelte.ts:716](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L716)

#### Parameters

##### data

`string`

#### Returns

`void`

***

### posToOffset()

> **posToOffset**(`pos`): `number`

Defined in: [editor.svelte.ts:1169](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1169)

#### Parameters

##### pos

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

#### Returns

`number`

***

### processLines()

> **processLines**\<`T`\>(`read`, `write`, `ignoreEmpty?`): `void`

Defined in: [editor.svelte.ts:1177](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1177)

#### Type Parameters

##### T

`T`

#### Parameters

##### read

(`line`, `lineText`) => `T` \| `null`

##### write

(`line`, `lineText`, `value`) => `void` \| [`EditorChange`](/developers/api-reference/interfaces/editorchange/)

##### ignoreEmpty?

`boolean`

#### Returns

`void`

***

### protect()

> **protect**(): `Promise`\<() => `void`\>

Defined in: [editor.svelte.ts:538](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L538)

Protect the current document and drain its captured persistence.

#### Returns

`Promise`\<() => `void`\>

***

### protectionExtensions()

> **protectionExtensions**(): `Extension`

Defined in: [editor.svelte.ts:488](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L488)

Native CodeMirror protection, retained whenever editor state is rebuilt.

#### Returns

`Extension`

***

### queueChange()

> **queueChange**(`data`): `void`

Defined in: [editor.svelte.ts:721](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L721)

Queue the latest editor contents for persistence/change notification.

#### Parameters

##### data

`string`

#### Returns

`void`

***

### redo()

> **redo**(): `void`

Defined in: [editor.svelte.ts:1081](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1081)

#### Returns

`void`

***

### refresh()

> **refresh**(): `void`

Defined in: [editor.svelte.ts:771](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L771)

#### Returns

`void`

***

### replaceContent()

> **replaceContent**(`content`, `options?`): `void`

Defined in: [editor.svelte.ts:929](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L929)

#### Parameters

##### content

`string`

##### options?

###### userEvent?

`string`

#### Returns

`void`

***

### replaceRange()

> **replaceRange**(`replacement`, `from`, `to?`, `origin?`): `void`

Defined in: [editor.svelte.ts:1022](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1022)

#### Parameters

##### replacement

`string`

##### from

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### to?

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### origin?

`string`

#### Returns

`void`

***

### replaceSelection()

> **replaceSelection**(`replacement`, `origin?`): `void`

Defined in: [editor.svelte.ts:967](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L967)

#### Parameters

##### replacement

`string`

##### origin?

`string`

#### Returns

`void`

***

### scrollIntoView()

> **scrollIntoView**(`range`, `center?`): `void`

Defined in: [editor.svelte.ts:1069](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1069)

#### Parameters

##### range

[`EditorRange`](/developers/api-reference/interfaces/editorrange/)

##### center?

`boolean`

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`x?`, `y?`): `void`

Defined in: [editor.svelte.ts:1062](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1062)

#### Parameters

##### x?

`number` \| `null`

##### y?

`number` \| `null`

#### Returns

`void`

***

### setCursor()

> **setCursor**(`pos`, `ch?`): `void`

Defined in: [editor.svelte.ts:994](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L994)

#### Parameters

##### pos

`number` \| [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### ch?

`number`

#### Returns

`void`

***

### setExternalPersistenceWriter()

> **setExternalPersistenceWriter**(`writer?`): `this`

Defined in: [editor.svelte.ts:294](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L294)

Capture an explicit asynchronous owner for external-mode persistence.

#### Parameters

##### writer?

`EditorPersistenceWriter`

#### Returns

`this`

***

### setLine()

> **setLine**(`n`, `text`): `void`

Defined in: [editor.svelte.ts:1205](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1205)

#### Parameters

##### n

`number`

##### text

`string`

#### Returns

`void`

***

### setSelection()

> **setSelection**(`anchor`, `head?`): `void`

Defined in: [editor.svelte.ts:999](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L999)

#### Parameters

##### anchor

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

##### head?

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

#### Returns

`void`

***

### setSelections()

> **setSelections**(`ranges`, `main?`): `void`

Defined in: [editor.svelte.ts:1009](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1009)

#### Parameters

##### ranges

[`EditorSelectionOrCaret`](/developers/api-reference/interfaces/editorselectionorcaret/)[]

##### main?

`number` = `0`

#### Returns

`void`

***

### setValue()

> **setValue**(`content`): `void`

Defined in: [editor.svelte.ts:907](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L907)

#### Parameters

##### content

`string`

#### Returns

`void`

***

### somethingSelected()

> **somethingSelected**(): `boolean`

Defined in: [editor.svelte.ts:956](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L956)

#### Returns

`boolean`

***

### trackChanges()

> **trackChanges**(`callback?`): () => `void`

Defined in: [editor.svelte.ts:789](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L789)

#### Parameters

##### callback?

(`data`, `editor`) => `void`

#### Returns

() => `void`

***

### transaction()

> **transaction**(`tx`, `origin?`): `void`

Defined in: [editor.svelte.ts:1109](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1109)

#### Parameters

##### tx

[`EditorTransaction`](/developers/api-reference/interfaces/editortransaction/)

##### origin?

`string`

#### Returns

`void`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `"change"`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<\{ `change`: \[`data`: `string`\]; \}\>\[`Extract`\<`T`, `"change"`\>\]

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

`T` *extends* `"change"`

#### Parameters

##### evt

`EventRef`\<\{ `change`: \[`data`: `string`\]; \}, `T`\>

##### args

...`ArgumentMap`\<\{ `change`: \[`data`: `string`\]; \}\>\[`Extract`\<`T`, `"change"`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`tryTrigger`](/developers/api-reference/class-docs/eventdispatcher/#trytrigger)

***

### undo()

> **undo**(): `void`

Defined in: [editor.svelte.ts:1077](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1077)

#### Returns

`void`

***

### updateExtensions()

> **updateExtensions**(`extensions`, `context?`): `this`

Defined in: [editor.svelte.ts:878](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L878)

#### Parameters

##### extensions

`Extension`[]

##### context?

`Record`\<`string`, `any`\>

#### Returns

`this`

***

### wordAt()

> **wordAt**(`pos`): [`EditorRange`](/developers/api-reference/interfaces/editorrange/) \| `null`

Defined in: [editor.svelte.ts:1153](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/editor.svelte.ts#L1153)

#### Parameters

##### pos

[`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

#### Returns

[`EditorRange`](/developers/api-reference/interfaces/editorrange/) \| `null`
