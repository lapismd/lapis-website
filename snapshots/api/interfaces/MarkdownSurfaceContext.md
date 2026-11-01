[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MarkdownSurfaceContext

# Interface: MarkdownSurfaceContext

Defined in: [markdown-extension-registry.ts:6](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L6)

Identifies the Markdown host that is rendering or editing a document.

## Properties

### context?

> `optional` **context?**: `unknown`

Defined in: [markdown-extension-registry.ts:10](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L10)

Optional opaque context owned by the surface consumer.

***

### id

> **id**: `string`

Defined in: [markdown-extension-registry.ts:8](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown-extension-registry.ts#L8)

Stable surface identifier such as `workspace` or `tasks-list`.
