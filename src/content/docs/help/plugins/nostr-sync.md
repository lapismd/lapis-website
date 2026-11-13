---
title: Nostr Sync preview
description: Availability and boundaries of experimental vault sync.
---

Nostr Sync is an experimental source preview for encrypted Nostr-based vault synchronization, device pairing and its own revision history. Its runtime ID is `nostr-sync`, and it is disabled by default in the reviewed source.

## Availability

No publicly accessible package, source repository or catalog installation was confirmed in the November 13 review. Use it only in a host that explicitly integrates and documents the preview. There is no general installation link here.

The host must admit the required identity, metadata-change, vault-stream, generated-state, network and cryptographic capabilities. Review that host's pairing and recovery guidance before using real vault data, and retain an independent backup.

Its history belongs to the sync protocol and is separate from [local History](/help/plugins/history/). The parked [legacy Sync package](/help/plugins/legacy-sync/) is another package; it is not an installation route for this preview.
