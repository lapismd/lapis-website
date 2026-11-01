---
title: Links, embeds, and tags
description: Connect notes, headings, files, and topical tags across the vault.
---

Lapis adds vault-aware linking on top of ordinary Markdown so notes can stay
portable while still behaving like part of one workspace.

<figure class="product-media"><img src="/media/markdown-overview.light.webp" data-product-theme="light" alt="The Markdown Feature Tour note rendered in Lapis Notes." loading="lazy" width="2400" height="1600" /><img src="/media/markdown-overview.dark.webp" data-product-theme="dark" alt="The Markdown Feature Tour note rendered in Lapis Notes." loading="lazy" width="2400" height="1600" /></figure>

The public docs site does not run the in-app vault renderer, so examples like
`[[wikilinks]]` and `![[embeds]]` are shown as syntax here and as screenshots
where the rendered result matters.

## Internal links

Use wiki links when the target is another note in the vault.

```markdown
[[Project Notes]]
[[Project Notes#Open questions]]
[[Project Notes|Planning board]]
```

Lapis resolves these links against the vault metadata cache, supports heading
targets and display text, and keeps link suggestions aligned with the active
note path.

### Heading targets

Append `#Heading text` to link to a section. The heading text must match the
heading in the target note without the `#` prefix.

### Block references

Obsidian-style block references use `#^blockId` in link text. Lapis autocomplete
can suggest block IDs, but section embeds currently resolve headings only, not
block IDs. See [Obsidian compatibility](/help/editing/obsidian-compatibility/).

## Standard markdown links

Standard Markdown links continue to work for local paths and external URLs.

```markdown
[Project brief](./brief.md)
[Lapis Notes](https://lapis.md)
```

### Path links with spaces

Lapis extends standard links so destinations can contain spaces without URL
encoding:

```markdown
[Meeting notes](Team Notes/2026-05-23.md)
```

This helps when sharing notes with tools that expect plain file paths.

### Reference links and autolinks

GFM reference-style and autolink syntax work in reading mode:

```markdown
[Reference link][ref]

[ref]: ./brief.md

Visit https://example.com or <https://example.com>.
```

Use standard links when you need exact destinations or when the file will be
read in tools that do not understand wiki links.

## Embeds

Embeds pull another note or file inline.

```markdown
![[Reusable Embed]]
![[Project Notes#Summary]]
![[assets/diagram.png]]
![[assets/diagram.png|400]]
![[assets/diagram.png|400x300]]
![[sample.pdf]]
```

Lapis supports note embeds, section embeds by heading, image embeds with
optional width or width-by-height sizing, PDF embeds, and plugin-provided
non-image embeds. Standalone embed paragraphs render in both reading mode and
live preview.

## Tags

Tags help search, graph view, and metadata-driven organization.

```markdown
#research
#project/roadmap
```

Tags must start after whitespace or at the beginning of a line. They can contain
letters, digits, underscores, hyphens, and slashes for nesting.

Use short, stable tag names. Nested tags such as `#project/roadmap` are useful
when a vault has a consistent hierarchy.

## When to use which link style

| Use case                                      | Best fit                        |
| --------------------------------------------- | ------------------------------- |
| Another note in the same vault                | Wiki link                       |
| A specific heading in a note                  | Wiki link with `#Heading`       |
| Display text that differs from the note title | Wiki link with `\|Alias`        |
| A web page or strict relative path            | Standard Markdown link          |
| A path that contains spaces                   | Standard Markdown link          |
| Inline content or file preview                | Embed                           |
| Sized image preview                           | Embed with `\|width` or `\|WxH` |

## Related pages

- [Markdown basics](/help/editing/markdown-basics/)
- [Basic formatting](/help/editing/basic-formatting/)
- [Advanced formatting](/help/editing/advanced-formatting/)
- [Frontmatter and properties](/help/editing/frontmatter-and-properties/)
- [Search](/help/plugins/search/)
- [Graph view](/help/plugins/graph-view/)
- [Obsidian compatibility](/help/editing/obsidian-compatibility/)
