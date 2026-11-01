---
title: "MarkdownSurfaceContext"
description: "Source-generated public API reference for MarkdownSurfaceContext."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [markdown-extension-registry.ts:6](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L6)

Identifies the Markdown host that is rendering or editing a document.

## Properties

### context?

> `optional` **context?**: `unknown`

Defined in: [markdown-extension-registry.ts:10](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L10)

Optional opaque context owned by the surface consumer.

***

### id

> **id**: `string`

Defined in: [markdown-extension-registry.ts:8](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown-extension-registry.ts#L8)

Stable surface identifier such as `workspace` or `tasks-list`.
