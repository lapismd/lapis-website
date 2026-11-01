---
title: "EditorSuggestTriggerInfo"
description: "Source-generated public API reference for EditorSuggestTriggerInfo."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:509](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L509)

## Extended by

- [`EditorSuggestContext`](/developers/api-reference/interfaces/editorsuggestcontext/)

## Properties

### end

> **end**: [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [suggest.ts:523](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L523)

The end position of the triggering text. This is used to position the
popover.

***

### query

> **query**: `string`

Defined in: [suggest.ts:530](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L530)

They query string (usually the text between start and end) that will be
used to generate the suggestion content.

***

### start

> **start**: [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [suggest.ts:516](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L516)

The start position of the triggering text. This is used to position the
popover.
