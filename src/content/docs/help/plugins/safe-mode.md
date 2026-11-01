---
title: Safe mode
description: Control which plugins can run in your vault.
---

Safe mode limits plugin execution so you can recover a vault or inspect
problems without running untrusted or broken plugin code.

<figure class="product-media"><img src="/media/community-banner.light.webp" data-product-theme="light" alt="Plugin settings inside Lapis Notes." loading="lazy" width="2400" height="1600" /><img src="/media/community-banner.dark.webp" data-product-theme="dark" alt="Plugin settings inside Lapis Notes." loading="lazy" width="2400" height="1600" /></figure>

## When to use safe mode

- The app fails during startup after enabling a plugin.
- A community plugin changes the workspace unexpectedly.
- You are opening a vault from someone else.
- You want to disable notebook execution or powerful plugin capabilities while reviewing content.

## Workspace trust

Workspace trust is separate from whether a plugin is installed. A trusted
workspace can allow powerful plugin features; an untrusted workspace blocks
trusted-desktop runtime entries and brokered hosted capabilities until you
explicitly grant trust.

## Related pages

- [Community plugins](/help/plugins/community-plugins/)
- [Notebook overview](/help/plugins/notebook/)
- [Notebook limitations](/help/plugins/notebook/limitations/)
