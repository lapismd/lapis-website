[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MarkdownPostProcessor

# Interface: MarkdownPostProcessor()

Defined in: [markdown.ts:58](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L58)

A post processor receives an element which is a section of the preview.

Post processors can mutate the DOM to render various things, such as mermaid
graphs, latex equations, or custom controls.

If your post processor requires lifecycle management, for example, to clear
an interval, kill a subprocess, etc when this element is removed from the
app, look into [MarkdownPostProcessorContext.addChild](MarkdownPostProcessorContext.md#addchild)

> **MarkdownPostProcessor**(`el`, `ctx`): `void` \| `Promise`\<`any`\>

Defined in: [markdown.ts:64](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L64)

The processor function itself.

## Parameters

### el

`HTMLElement`

### ctx

[`MarkdownPostProcessorContext`](MarkdownPostProcessorContext.md)

## Returns

`void` \| `Promise`\<`any`\>

## Properties

### sortOrder?

> `optional` **sortOrder?**: `number`

Defined in: [markdown.ts:71](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L71)

An optional integer sort order. Defaults to 0. Lower number runs before
higher numbers.
