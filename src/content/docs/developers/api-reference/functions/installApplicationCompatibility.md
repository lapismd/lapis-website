---
title: "installApplicationCompatibility()"
description: "Source-generated public API reference for installApplicationCompatibility()."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

> **installApplicationCompatibility**(`application`): () => `void`

Defined in: [application-compatibility.ts:54](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/application-compatibility.ts#L54)

Install a managed lease for the legacy `globalThis.app` alias.

The newest live lease is exposed. Disposing leases out of order is safe,
and disposing the final lease restores the value that existed before the
first lease was installed.

## Parameters

### application

[`App`](/developers/api-reference/class-docs/app/)

## Returns

() => `void`
