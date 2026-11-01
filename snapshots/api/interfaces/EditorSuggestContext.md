[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / EditorSuggestContext

# Interface: EditorSuggestContext

Defined in: [suggest.ts:501](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L501)

## Extends

- [`EditorSuggestTriggerInfo`](EditorSuggestTriggerInfo.md)

## Properties

### editor

> **editor**: [`Editor`](../classes/Editor.md)

Defined in: [suggest.ts:503](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L503)

***

### end

> **end**: [`EditorPosition`](../type-aliases/EditorPosition.md)

Defined in: [suggest.ts:523](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L523)

The end position of the triggering text. This is used to position the
popover.

#### Inherited from

[`EditorSuggestTriggerInfo`](EditorSuggestTriggerInfo.md).[`end`](EditorSuggestTriggerInfo.md#end)

***

### file

> **file**: [`TFile`](../classes/TFile.md)

Defined in: [suggest.ts:505](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L505)

***

### query

> **query**: `string`

Defined in: [suggest.ts:530](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L530)

They query string (usually the text between start and end) that will be
used to generate the suggestion content.

#### Inherited from

[`EditorSuggestTriggerInfo`](EditorSuggestTriggerInfo.md).[`query`](EditorSuggestTriggerInfo.md#query)

***

### start

> **start**: [`EditorPosition`](../type-aliases/EditorPosition.md)

Defined in: [suggest.ts:516](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/suggest.ts#L516)

The start position of the triggering text. This is used to position the
popover.

#### Inherited from

[`EditorSuggestTriggerInfo`](EditorSuggestTriggerInfo.md).[`start`](EditorSuggestTriggerInfo.md#start)
