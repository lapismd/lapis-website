[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MarkdownExtensionContribution

# Interface: MarkdownExtensionContribution

Defined in: [markdown-extension-registry.ts:27](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L27)

A plugin-owned Markdown contribution adapted by the bundled Markdown plugin.

## Properties

### codeMirror?

> `optional` **codeMirror?**: (`context`) => `Extension` \| readonly `Extension`[] \| `null` \| `undefined`

Defined in: [markdown-extension-registry.ts:29](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L29)

#### Parameters

##### context

[`MarkdownCodeMirrorExtensionContext`](MarkdownCodeMirrorExtensionContext.md)

#### Returns

`Extension` \| readonly `Extension`[] \| `null` \| `undefined`

***

### id

> **id**: `string`

Defined in: [markdown-extension-registry.ts:28](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L28)

***

### postProcessor?

> `optional` **postProcessor?**: [`MarkdownPostProcessor`](MarkdownPostProcessor.md)

Defined in: [markdown-extension-registry.ts:32](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L32)
