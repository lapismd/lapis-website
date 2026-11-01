---
title: "MarkdownPostProcessorContext"
description: "Source-generated public API reference for MarkdownPostProcessorContext."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [markdown.ts:74](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L74)

## Properties

### docId

> **docId**: `string`

Defined in: [markdown.ts:76](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L76)

***

### frontmatter

> **frontmatter**: `any`

Defined in: [markdown.ts:85](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L85)

***

### mode?

> `optional` **mode?**: [`MarkdownContributionMode`](/developers/api-reference/type-aliases/markdowncontributionmode/)

Defined in: [markdown.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L87)

Rendering mode for this processor invocation.

***

### sourcePath

> **sourcePath**: `string`

Defined in: [markdown.ts:83](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L83)

The path to the associated file. Any links are assumed to be relative to
the `sourcePath`.

***

### surface?

> `optional` **surface?**: [`MarkdownSurfaceContext`](/developers/api-reference/interfaces/markdownsurfacecontext/)

Defined in: [markdown.ts:89](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L89)

Owning Markdown surface and optional consumer context.

## Methods

### addChild()

> **addChild**(`child`): `void`

Defined in: [markdown.ts:101](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L101)

Adds a child component that will have its lifecycle managed by the
renderer.

Use this to add a dependent child to the renderer such that if the
containerEl of the child is ever removed, the component's unload will be
called.

#### Parameters

##### child

[`MarkdownRenderChild`](/developers/api-reference/class-docs/markdownrenderchild/)

#### Returns

`void`

***

### getSectionInfo()

> **getSectionInfo**(`el`): `MarkdownSectionInformation` \| `null`

Defined in: [markdown.ts:110](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/markdown.ts#L110)

Gets the section information of this element at this point in time. Only
call this function right before you need this information to get the most
up-to-date version. This function may also return null in many
circumstances; if you use it, you must be prepared to deal with nulls.

#### Parameters

##### el

`HTMLElement`

#### Returns

`MarkdownSectionInformation` \| `null`
