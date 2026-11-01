[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / AppStateProperties

# Type Alias: AppStateProperties

> **AppStateProperties** = `object`

Defined in: [context.svelte.ts:145](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L145)

## Properties

### adapter?

> `optional` **adapter?**: [`DataAdapter`](../interfaces/DataAdapter.md)

Defined in: [context.svelte.ts:148](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L148)

***

### appDatabase?

> `optional` **appDatabase?**: `AppDatabase`

Defined in: [context.svelte.ts:154](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L154)

***

### configPath?

> `optional` **configPath?**: `string`

Defined in: [context.svelte.ts:147](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L147)

***

### createCommunityPluginDependencyResolver?

> `optional` **createCommunityPluginDependencyResolver?**: `PluginDependencyResolverFactory`

Defined in: [context.svelte.ts:156](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L156)

***

### markdownRenderer

> **markdownRenderer**: (`markdown`, `el`, `sourcePath`, `component`) => `Promise`\<`void`\>

Defined in: [context.svelte.ts:165](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L165)

#### Parameters

##### markdown

`string`

##### el

`HTMLElement`

##### sourcePath

`string`

##### component

[`Component`](../classes/Component.md)

#### Returns

`Promise`\<`void`\>

***

### nativeEditingIntents?

> `optional` **nativeEditingIntents?**: `NativeEditingIntents`

Defined in: [context.svelte.ts:152](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L152)

***

### nativeHistoryIndex?

> `optional` **nativeHistoryIndex?**: `NativeHistoryIndex`

Defined in: [context.svelte.ts:151](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L151)

Already admitted by the host; construction does not start native work.

***

### nativeTasks?

> `optional` **nativeTasks?**: `NativeTasks`

Defined in: [context.svelte.ts:153](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L153)

***

### nostrSignerBroker?

> `optional` **nostrSignerBroker?**: `NostrSignerBroker`

Defined in: [context.svelte.ts:162](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L162)

Host-owned Nostr account, keychain, and remote-signer implementation.

***

### pluginAssetServer?

> `optional` **pluginAssetServer?**: `PluginAssetServer`

Defined in: [context.svelte.ts:157](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L157)

***

### pluginDistributionOptions?

> `optional` **pluginDistributionOptions?**: `AppPluginDistributionOptions`

Defined in: [context.svelte.ts:158](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L158)

***

### safeMode?

> `optional` **safeMode?**: [`AppSafeModeState`](../interfaces/AppSafeModeState.md)

Defined in: [context.svelte.ts:155](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L155)

***

### session?

> `optional` **session?**: [`VaultSession`](../interfaces/VaultSession.md)

Defined in: [context.svelte.ts:149](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L149)

***

### syncHost?

> `optional` **syncHost?**: `SyncHostServiceOptions`

Defined in: [context.svelte.ts:163](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L163)

***

### unavailablePlugins?

> `optional` **unavailablePlugins?**: `DefaultPluginDistributionManagerOptions`\[`"unavailablePlugins"`\]

Defined in: [context.svelte.ts:160](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L160)

Host restrictions apply to discovery, installation and external loading.

***

### version

> **version**: `string`

Defined in: [context.svelte.ts:146](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L146)

***

### workspaceShell?

> `optional` **workspaceShell?**: `AppWorkspaceShellProperties`

Defined in: [context.svelte.ts:164](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/context.svelte.ts#L164)
