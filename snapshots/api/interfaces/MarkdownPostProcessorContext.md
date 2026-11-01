[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / MarkdownPostProcessorContext

# Interface: MarkdownPostProcessorContext

Defined in: [markdown.ts:74](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L74)

## Properties

### docId

> **docId**: `string`

Defined in: [markdown.ts:76](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L76)

***

### frontmatter

> **frontmatter**: `any`

Defined in: [markdown.ts:85](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L85)

***

### mode?

> `optional` **mode?**: [`MarkdownContributionMode`](../type-aliases/MarkdownContributionMode.md)

Defined in: [markdown.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L87)

Rendering mode for this processor invocation.

***

### sourcePath

> **sourcePath**: `string`

Defined in: [markdown.ts:83](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L83)

The path to the associated file. Any links are assumed to be relative to
the `sourcePath`.

***

### surface?

> `optional` **surface?**: [`MarkdownSurfaceContext`](MarkdownSurfaceContext.md)

Defined in: [markdown.ts:89](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L89)

Owning Markdown surface and optional consumer context.

## Methods

### addChild()

> **addChild**(`child`): `void`

Defined in: [markdown.ts:101](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L101)

Adds a child component that will have its lifecycle managed by the
renderer.

Use this to add a dependent child to the renderer such that if the
containerEl of the child is ever removed, the component's unload will be
called.

#### Parameters

##### child

[`MarkdownRenderChild`](../classes/MarkdownRenderChild.md)

#### Returns

`void`

***

### getSectionInfo()

> **getSectionInfo**(`el`): `MarkdownSectionInformation` \| `null`

Defined in: [markdown.ts:110](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/markdown.ts#L110)

Gets the section information of this element at this point in time. Only
call this function right before you need this information to get the most
up-to-date version. This function may also return null in many
circumstances; if you use it, you must be prepared to deal with nulls.

#### Parameters

##### el

`HTMLElement`

#### Returns

`MarkdownSectionInformation` \| `null`
