---
title: Obsidian compatibility
description: How Lapis Markdown support compares to common Obsidian syntax when importing a vault.
---

Most Obsidian vaults open in Lapis without conversion because both apps store
notes as Markdown files. This page summarizes what transfers cleanly, what
behaves differently, and what Obsidian syntax Lapis does not support.

For import steps, see [Import from Obsidian](/help/import/import-from-obsidian/).

## Works as-is

These syntax features are core to Lapis and typically need no changes:

| Feature                                          | Lapis docs                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Wiki links `[[note]]`, `\|aliases`, `#headings`  | [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)                                                    |
| Embeds `![[file]]`                               | [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)                                                    |
| Tags `#tag/nested`                               | [Links, embeds, and tags](/help/editing/links-embeds-and-tags/)                                                    |
| YAML frontmatter / properties                    | [Frontmatter and properties](/help/editing/frontmatter-and-properties/)                                            |
| Block callouts `> [!note]`                       | [Callouts](/help/editing/callouts/)                                                                                |
| List callouts `- & item`                         | [Callouts](/help/editing/callouts/)                                                                                |
| GFM tables, task lists, footnotes, strikethrough | [Basic formatting](/help/editing/basic-formatting/), [Tables and checklists](/help/editing/tables-and-checklists/) |
| Fenced code, LaTeX math, Mermaid                 | [Code, math, and diagrams](/help/editing/code-blocks/)                                                             |
| JSON Canvas files                                | [Canvas](/help/plugins/canvas/)                                                                                    |

Lapis also imports legacy Obsidian List Callouts plugin data into markdown
settings when no local catalog exists yet.

## Works with differences

| Obsidian behavior                      | In Lapis                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Standard Markdown links `[text](path)` | Works; Lapis additionally supports path destinations with spaces, such as `[Label](My Note.md)`                                |
| Section embeds `![[note#Heading]]`     | Resolves by matching the heading text in the target note                                                                       |
| Block references `[[note#^blockId]]`   | Autocomplete suggests block IDs, but embed resolution currently matches headings only, not block IDs                           |
| Extended task markers `- [?]`          | Supported via Lapis checklist extension                                                                                        |
| Strict line breaks setting             | Lapis follows standard Markdown soft-wrap rules; single Enter does not force a visible break without trailing spaces or `<br>` |
| Community plugin syntax                | Enabled compatible Lapis plugins interpret custom syntax; third-party Obsidian plugins do not run in Lapis                     |

## Not supported

These Obsidian-specific features have no Lapis equivalent today:

| Obsidian syntax                                                   | Alternative in Lapis                                              |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `==Highlighted text==`                                            | Use **bold**, _italic_, or a [callout](/help/editing/callouts/)   |
| `%%Hidden comment%%`                                              | Remove the text, or use an HTML comment if raw HTML is acceptable |
| Obsidian URI links `obsidian://...`                               | Use vault wiki links or standard file paths                       |
| Plugin-generated blocks (Dataview, Excalidraw embed syntax, etc.) | Recreate with Lapis plugins or plain Markdown                     |

## After importing

1. Open a few representative notes in reading mode and check callouts, embeds,
   and properties.
2. Review notes that relied on unsupported syntax such as highlights, comments,
   and block references.
3. Keep your original Obsidian backup until daily workflows are verified.

## Related pages

- [Import from Obsidian](/help/import/import-from-obsidian/)
- [Markdown basics](/help/editing/markdown-basics/)
- [Basic formatting](/help/editing/basic-formatting/)
- [Advanced formatting](/help/editing/advanced-formatting/)
