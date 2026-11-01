---
title: Metadata cache
description: Query indexed note metadata.
---

The metadata cache gives plugins a structured view of notes without reparsing every file on every interaction.

## Cached data

Depending on file type and parser support, metadata can include:

- Headings and sections
- Links and embeds
- Tags and tag hierarchy
- Frontmatter properties
- Canvas text references
- File path and extension information

## Use cache events

Subscribe to metadata change and delete events when your plugin maintains an index or view. Debounce updates by source path so rapid edits collapse into one refresh.

Plugins should tolerate missing metadata during startup. A file can exist before its metadata snapshot is ready.
