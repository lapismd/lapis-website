---
title: "CachedMetadata"
description: "Source-generated public API reference for CachedMetadata."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [cache.svelte.ts:413](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L413)

## Properties

### blocks?

> `optional` **blocks?**: `Record`\<`string`, `BlockCache`\>

Defined in: [cache.svelte.ts:436](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L436)

***

### embeds?

> `optional` **embeds?**: `EmbedCache`[]

Defined in: [cache.svelte.ts:421](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L421)

***

### footnoteRefs?

> `optional` **footnoteRefs?**: `FootnoteRefCache`[]

Defined in: [cache.svelte.ts:434](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L434)

***

### footnotes?

> `optional` **footnotes?**: `FootnoteCache`[]

Defined in: [cache.svelte.ts:433](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L433)

***

### frontmatter?

> `optional` **frontmatter?**: `FrontMatterCache`

Defined in: [cache.svelte.ts:431](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L431)

***

### frontmatterPosition?

> `optional` **frontmatterPosition?**: `Pos`

Defined in: [cache.svelte.ts:419](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L419)

Position of the frontmatter in the file.

***

### headings?

> `optional` **headings?**: `HeadingCache`[]

Defined in: [cache.svelte.ts:432](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L432)

***

### links?

> `optional` **links?**: `LinkCache`[]

Defined in: [cache.svelte.ts:420](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L420)

***

### listItems?

> `optional` **listItems?**: `ListItemCache`[]

Defined in: [cache.svelte.ts:430](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L430)

***

### referenceLinks?

> `optional` **referenceLinks?**: `ReferenceLinkCache`[]

Defined in: [cache.svelte.ts:435](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L435)

***

### sections?

> `optional` **sections?**: `SectionCache`[]

Defined in: [cache.svelte.ts:429](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L429)

Sections are root level markdown blocks, which can be used to divide the
document up.

***

### tags?

> `optional` **tags?**: `TagCache`[]

Defined in: [cache.svelte.ts:422](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/cache.svelte.ts#L422)
