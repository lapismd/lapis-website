---
title: Install community plugins
description: Package compatible and verifiable plugin releases.
---

Current hosts install plugins under `.lapis/plugins/<plugin-id>/` by default. Preserve plugin IDs and saved data keys across releases.

## Release formats

A plugin package includes its manifest, compiled JavaScript entry, optional stylesheet, and required assets. A `.lapis-plugin` release archive additionally carries signed release metadata and its exact declared asset inventory. The npm package and archive must identify the same version and source revision.

Use the [first-party plugin repository](https://github.com/lapismd/lapis-plugins) as the current packaging and registry-submission reference. Do not copy legacy Forgejo publication commands or assume a registry submission immediately publishes a combined catalog.

Document tested host/package versions and required native services. Users should install through the host's supported verified workflow and restart when requested. Static bundled plugin identities cannot be replaced by an external installation.
