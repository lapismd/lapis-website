---
title: "EditorSuggestContext"
description: "Source-generated public API reference for EditorSuggestContext."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [suggest.ts:501](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L501)

## Extends

- [`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/)

## Properties

### editor

> **editor**: [`Editor`](/developers/api-reference/class-docs/editor/)

Defined in: [suggest.ts:503](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L503)

***

### end

> **end**: [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [suggest.ts:523](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L523)

The end position of the triggering text. This is used to position the
popover.

#### Inherited from

[`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/).[`end`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/#end)

***

### file

> **file**: [`TFile`](/developers/api-reference/class-docs/tfile/)

Defined in: [suggest.ts:505](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L505)

***

### query

> **query**: `string`

Defined in: [suggest.ts:530](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L530)

They query string (usually the text between start and end) that will be
used to generate the suggestion content.

#### Inherited from

[`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/).[`query`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/#query)

***

### start

> **start**: [`EditorPosition`](/developers/api-reference/type-aliases/editorposition/)

Defined in: [suggest.ts:516](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/suggest.ts#L516)

The start position of the triggering text. This is used to position the
popover.

#### Inherited from

[`EditorSuggestTriggerInfo`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/).[`start`](/developers/api-reference/interfaces/editorsuggesttriggerinfo/#start)
