---
title: Import from Obsidian
description: Bring an existing Obsidian vault into Lapis Notes.
---

Obsidian vaults are folders of Markdown files, so most notes can be opened
directly in Lapis Notes.

## Before importing

1. Make a backup of the vault.
2. Disable or remove plugins that generate files you do not want to carry over.
3. Check whether your vault relies on Obsidian-specific community plugins.

## Open the vault

On desktop, open the existing vault folder. In the web app, import or copy the
Markdown files into a browser vault.

## What usually works

- Markdown notes
- Wiki links
- Frontmatter properties
- Attachments stored in the vault
- JSON Canvas files
- Block callouts and list callouts

See the full syntax comparison in
[Obsidian compatibility](/help/editing/obsidian-compatibility/).

## What may need review

- `==highlight==` and `%%comment%%` syntax, which Lapis does not support
- Block reference embeds (`#^blockId`): heading embeds work, but block IDs do
  not resolve yet
- Plugin-specific syntax, custom CSS snippets, themes, and community-plugin data

Keep the original vault backup until you have checked your important workflows.

## Related pages

- [Obsidian compatibility](/help/editing/obsidian-compatibility/)
- [Markdown basics](/help/editing/markdown-basics/)
