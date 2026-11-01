---
title: Vault
description: Read and write files through the vault API.
---

The vault API is the supported way for plugins to read and write vault-scoped files.

## Use the vault API for

- Reading Markdown or asset files.
- Creating generated plugin files.
- Renaming or deleting plugin-owned files.
- Resolving resource URLs for embeds or previews.
- Watching for file create, modify, rename, and delete events.

## Path safety

Plugins should use vault-relative paths. Do not assume the desktop filesystem path exists in browser sessions, and do not store absolute paths unless the API explicitly returns a scoped desktop capability.

## Generated data

Store durable user-authored content as normal vault files. Store plugin cache, indexes, and generated state through plugin data or app database services so it can be rebuilt without changing source notes.
