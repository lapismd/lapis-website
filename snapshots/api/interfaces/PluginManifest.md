[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / PluginManifest

# Interface: PluginManifest

Defined in: [plugin.ts:117](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L117)

## Properties

### author

> **author**: `string`

Defined in: [plugin.ts:141](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L141)

The author's name.

***

### authorUrl?

> `optional` **authorUrl?**: `string`

Defined in: [plugin.ts:165](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L165)

A URL to the author's website.

***

### description

> **description**: `string`

Defined in: [plugin.ts:159](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L159)

A description of the plugin.

***

### dir?

> `optional` **dir?**: `string`

Defined in: [plugin.ts:123](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L123)

Vault path to the plugin folder in the config directory.

***

### executionHints?

> `optional` **executionHints?**: `Record`\<`string`, `unknown`\>

Defined in: [plugin.ts:198](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L198)

Optional host-specific execution hints for future sidecar scheduling.

***

### id

> **id**: `string`

Defined in: [plugin.ts:129](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L129)

The plugin ID.

***

### isDesktopOnly?

> `optional` **isDesktopOnly?**: `boolean`

Defined in: [plugin.ts:172](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L172)

Whether the plugin can be used only on desktop.

***

### lapis?

> `optional` **lapis?**: [`LapisExtensionManifest`](LapisExtensionManifest.md)

Defined in: [plugin.ts:206](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L206)

Optional Lapis extension metadata. Existing Obsidian-compatible manifests
can omit this namespace and continue to load unchanged.

***

### minAppVersion

> **minAppVersion**: `string`

Defined in: [plugin.ts:153](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L153)

The minimum required Obsidian version to run this plugin.

***

### name

> **name**: `string`

Defined in: [plugin.ts:135](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L135)

The display name.

***

### requiredCapabilities?

> `optional` **requiredCapabilities?**: `HostedPluginCapability`[]

Defined in: [plugin.ts:188](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L188)

Structured host capabilities required before the plugin can be evaluated.

***

### requiredNativeServices?

> `optional` **requiredNativeServices?**: `string`[]

Defined in: [plugin.ts:191](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L191)

Native host services that must be available before module evaluation.

***

### supportedRuntimes?

> `optional` **supportedRuntimes?**: `string`[]

Defined in: [plugin.ts:181](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L181)

Runtime host IDs this plugin explicitly supports.

Missing or empty values preserve baseline Obsidian manifest behavior.

***

### version

> **version**: `string`

Defined in: [plugin.ts:147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L147)

The current version, using [Semantic Versioning](https://semver.org/).
