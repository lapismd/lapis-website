---
title: Lapis Notes Developer Docs
description: Plugin and API documentation for Lapis Notes
---

These docs describe the public plugin surface for authors and integrators. Internal boot details stay in the project architecture spec and are not published here.

## Start here

1. Read [What is a Lapis plugin?](/developers/introduction/what-is-a-lapis-plugin/).
2. Review the [runtime overview](/developers/introduction/runtime-overview/).
3. Create a [manifest](/developers/getting-started/manifest/).
4. Build a [first plugin](/developers/getting-started/first-plugin/).
5. Use the [development workflow](/developers/getting-started/development-workflow/) in a test vault.

Plugins should use documented app services rather than reaching into workspace internals.

## Core API topics

- [App model](/developers/api/app-model/)
- [Commands](/developers/api/commands/)
- [Vault](/developers/api/vault/)
- [Workspace views](/developers/api/workspace-views/)
- [Editor](/developers/api/editor/)
- [Events](/developers/api/events/)
- [Metadata cache](/developers/api/metadata-cache/)
- [Notices & progress](/developers/api/notices-and-progress/)
- [Settings](/developers/api/settings/)
- [Configuration option sources](/developers/api/configuration-option-sources/)

## TypeScript API reference

Use the generated [TypeScript API reference](/developers/api-reference/) when you
need the current exported signatures, parameter descriptions, and source links
for the supported plugin-author surface.

## Language & editor extensions

If you extend syntax, file types, linting, or editor behavior, start here:

- [Overview](/developers/language-extensions/overview/)
- [VS Code to Lapis mapping](/developers/language-extensions/vscode-to-lapis/)
- [Lapis manifest contributions](/developers/language-extensions/lapis-manifest/)
- [Editor views and associations](/developers/language-extensions/editor-views-and-associations/)
- [Syntax and highlighting](/developers/language-extensions/syntax-and-highlighting/)
- [Language services](/developers/language-extensions/language-services/)
- [CodeMirror extensions](/developers/language-extensions/codemirror-extensions/)
