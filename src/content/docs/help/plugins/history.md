---
title: History
description: Inspect and restore bounded local file revisions.
---

History records bounded local file revisions so you can inspect changes, compare versions and restore an earlier file state.

## Review a change

With History enabled, open its file-history surface for the note you want to inspect. Select a recorded revision, compare it with the current content and review the difference before restoring. Restoring changes the current file; copy out content first if you want to combine versions manually.

History has retention limits. It is useful for recovering recent edits, but it is not a replacement for an independent vault backup. Changes that happened before tracking or outside its retention window may be unavailable.

This local History plugin is separate from the experimental [Nostr Sync history](/help/plugins/nostr-sync/), which belongs to that sync protocol.

## Source and availability

[Owning source](https://github.com/lapismd/lapis-plugins/tree/main/packages/history). Check [plugin availability](/help/plugins/core-plugins-overview/) and your build's installed plugin list before following this guide.
