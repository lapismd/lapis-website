[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / EditorSuggestTriggerInfo

# Interface: EditorSuggestTriggerInfo

Defined in: [suggest.ts:509](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L509)

## Extended by

- [`EditorSuggestContext`](EditorSuggestContext.md)

## Properties

### end

> **end**: [`EditorPosition`](../type-aliases/EditorPosition.md)

Defined in: [suggest.ts:523](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L523)

The end position of the triggering text. This is used to position the
popover.

***

### query

> **query**: `string`

Defined in: [suggest.ts:530](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L530)

They query string (usually the text between start and end) that will be
used to generate the suggestion content.

***

### start

> **start**: [`EditorPosition`](../type-aliases/EditorPosition.md)

Defined in: [suggest.ts:516](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L516)

The start position of the triggering text. This is used to position the
popover.
