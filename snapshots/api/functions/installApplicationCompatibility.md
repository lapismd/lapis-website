[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / installApplicationCompatibility

# Function: installApplicationCompatibility()

> **installApplicationCompatibility**(`application`): () => `void`

Defined in: [application-compatibility.ts:54](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/application-compatibility.ts#L54)

Install a managed lease for the legacy `globalThis.app` alias.

The newest live lease is exposed. Disposing leases out of order is safe,
and disposing the final lease restores the value that existed before the
first lease was installed.

## Parameters

### application

[`App`](../classes/App.md)

## Returns

() => `void`
