---
title: "MarkdownPostProcessor()"
description: "Source-generated public API reference for MarkdownPostProcessor()."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [markdown.ts:58](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L58)

A post processor receives an element which is a section of the preview.

Post processors can mutate the DOM to render various things, such as mermaid
graphs, latex equations, or custom controls.

If your post processor requires lifecycle management, for example, to clear
an interval, kill a subprocess, etc when this element is removed from the
app, look into [MarkdownPostProcessorContext.addChild](/developers/api-reference/interfaces/markdownpostprocessorcontext/#addchild)

> **MarkdownPostProcessor**(`el`, `ctx`): `void` \| `Promise`\<`any`\>

Defined in: [markdown.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L64)

The processor function itself.

## Parameters

### el

`HTMLElement`

### ctx

[`MarkdownPostProcessorContext`](/developers/api-reference/interfaces/markdownpostprocessorcontext/)

## Returns

`void` \| `Promise`\<`any`\>

## Properties

### sortOrder?

> `optional` **sortOrder?**: `number`

Defined in: [markdown.ts:71](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L71)

An optional integer sort order. Defaults to 0. Lower number runs before
higher numbers.
