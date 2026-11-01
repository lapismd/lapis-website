---
title: "MarkdownExtensionContribution"
description: "Source-generated public API reference for MarkdownExtensionContribution."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [markdown-extension-registry.ts:27](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L27)

A plugin-owned Markdown contribution adapted by the bundled Markdown plugin.

## Properties

### codeMirror?

> `optional` **codeMirror?**: (`context`) => `Extension` \| readonly `Extension`[] \| `null` \| `undefined`

Defined in: [markdown-extension-registry.ts:29](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L29)

#### Parameters

##### context

[`MarkdownCodeMirrorExtensionContext`](/developers/api-reference/interfaces/markdowncodemirrorextensioncontext/)

#### Returns

`Extension` \| readonly `Extension`[] \| `null` \| `undefined`

***

### id

> **id**: `string`

Defined in: [markdown-extension-registry.ts:28](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L28)

***

### postProcessor?

> `optional` **postProcessor?**: [`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)

Defined in: [markdown-extension-registry.ts:32](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L32)
