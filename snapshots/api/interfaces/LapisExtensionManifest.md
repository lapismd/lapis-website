[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / LapisExtensionManifest

# Interface: LapisExtensionManifest

Defined in: [lapis-extension.ts:146](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L146)

## Properties

### activationEvents?

> `optional` **activationEvents?**: `string`[]

Defined in: [lapis-extension.ts:150](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L150)

***

### contributes?

> `optional` **contributes?**: [`LapisExtensionContributions`](LapisExtensionContributions.md)

Defined in: [lapis-extension.ts:149](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L149)

***

### database?

> `optional` **database?**: `object`

Defined in: [lapis-extension.ts:172](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L172)

#### metadataAccess?

> `optional` **metadataAccess?**: `"snapshot"` \| `"queries"`

Query-native access avoids the one-release full MetadataCache snapshot
lease.

***

### enabled?

> `optional` **enabled?**: `boolean`

Defined in: [lapis-extension.ts:181](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L181)

***

### enabledByDefault?

> `optional` **enabledByDefault?**: `boolean`

Defined in: [lapis-extension.ts:183](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L183)

***

### extensionKind?

> `optional` **extensionKind?**: [`LapisExtensionKind`](../type-aliases/LapisExtensionKind.md)[]

Defined in: [lapis-extension.ts:148](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L148)

***

### locked?

> `optional` **locked?**: `boolean`

Defined in: [lapis-extension.ts:182](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L182)

***

### manifestVersion

> **manifestVersion**: `1`

Defined in: [lapis-extension.ts:147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L147)

***

### permissions?

> `optional` **permissions?**: [`LapisExtensionPermission`](../type-aliases/LapisExtensionPermission.md)[]

Defined in: [lapis-extension.ts:179](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L179)

***

### runtime?

> `optional` **runtime?**: `object`

Defined in: [lapis-extension.ts:151](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L151)

#### compatibilityOverrides?

> `optional` **compatibilityOverrides?**: `object`

##### compatibilityOverrides.deprecatedHostModules?

> `optional` **deprecatedHostModules?**: `object`

##### compatibilityOverrides.deprecatedHostModules.desktop?

> `optional` **desktop?**: `string`[]

##### compatibilityOverrides.deprecatedHostModules.electronRenderer?

> `optional` **electronRenderer?**: `string`[]

##### compatibilityOverrides.deprecatedHostModules.electronSidecar?

> `optional` **electronSidecar?**: `string`[]

##### compatibilityOverrides.deprecatedHostModules.trustedDesktop?

> `optional` **trustedDesktop?**: `string`[]

##### compatibilityOverrides.deprecatedHostModules.workspace?

> `optional` **workspace?**: `string`[]

#### desktop?

> `optional` **desktop?**: `string`

#### entries?

> `optional` **entries?**: `LapisRuntimeEntryMap`

#### sharedDependencies?

> `optional` **sharedDependencies?**: `object`

##### sharedDependencies.desktop?

> `optional` **desktop?**: `string`[]

##### sharedDependencies.electronRenderer?

> `optional` **electronRenderer?**: `string`[]

##### sharedDependencies.electronSidecar?

> `optional` **electronSidecar?**: `string`[]

##### sharedDependencies.workspace?

> `optional` **workspace?**: `string`[]

#### trustedDesktop?

> `optional` **trustedDesktop?**: `string`

#### workspace?

> `optional` **workspace?**: `string`

***

### source?

> `optional` **source?**: `"system"` \| `"community"` \| `"official"`

Defined in: [lapis-extension.ts:180](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/lapis-extension.ts#L180)
