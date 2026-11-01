---
title: "PluginManager"
description: "Source-generated public API reference for PluginManager."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [plugin-manager.ts:748](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L748)

## Extends

- [`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/)\<`PluginEvents`\>

## Constructors

### Constructor

> **new PluginManager**(`app`, `pluginsPath`, `adapter`, `options?`): `PluginManager`

Defined in: [plugin-manager.ts:791](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L791)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

##### pluginsPath

`string`

##### adapter

[`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

##### options?

`PluginManagerOptions` = `{}`

#### Returns

`PluginManager`

#### Overrides

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`constructor`](/developers/api-reference/class-docs/eventdispatcher/#constructor)

## Properties

### adapter

> `readonly` **adapter**: [`DataAdapter`](/developers/api-reference/interfaces/dataadapter/)

Defined in: [plugin-manager.ts:794](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L794)

***

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [plugin-manager.ts:792](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L792)

***

### dependencies

> **dependencies**: `Record`\<`string`, `any`\> = `{}`

Defined in: [plugin-manager.ts:750](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L750)

***

### plugins

> `readonly` **plugins**: `Map`\<`string`, [`Plugin`](/developers/api-reference/class-docs/plugin/)\>

Defined in: [plugin-manager.ts:749](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L749)

***

### pluginsPath

> `readonly` **pluginsPath**: `string`

Defined in: [plugin-manager.ts:793](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L793)

## Accessors

### communityPluginDiagnostics

#### Get Signature

> **get** **communityPluginDiagnostics**(): `CommunityPluginDiagnostics`[]

Defined in: [plugin-manager.ts:989](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L989)

##### Returns

`CommunityPluginDiagnostics`[]

***

### communityPluginHostId

#### Get Signature

> **get** **communityPluginHostId**(): `string`

Defined in: [plugin-manager.ts:981](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L981)

##### Returns

`string`

***

### communityPlugins

#### Get Signature

> **get** **communityPlugins**(): [`Plugin`](/developers/api-reference/class-docs/plugin/)[]

Defined in: [plugin-manager.ts:848](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L848)

##### Returns

[`Plugin`](/developers/api-reference/class-docs/plugin/)[]

***

### corePluginEntries

#### Get Signature

> **get** **corePluginEntries**(): `CorePluginListEntry`[]

Defined in: [plugin-manager.ts:917](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L917)

##### Returns

`CorePluginListEntry`[]

***

### corePlugins

#### Get Signature

> **get** **corePlugins**(): [`Plugin`](/developers/api-reference/class-docs/plugin/)[]

Defined in: [plugin-manager.ts:842](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L842)

##### Returns

[`Plugin`](/developers/api-reference/class-docs/plugin/)[]

***

### enabledPlugins

#### Get Signature

> **get** **enabledPlugins**(): `string`[]

Defined in: [plugin-manager.ts:1360](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1360)

##### Returns

`string`[]

***

### internalPlugins

#### Get Signature

> **get** **internalPlugins**(): `object`

Defined in: [plugin-manager.ts:1516](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1516)

##### Returns

`object`

###### getEnabledPluginById

> **getEnabledPluginById**: (`pluginId`) => `any`

###### Parameters

###### pluginId

`string`

###### Returns

`any`

###### plugins

> **plugins**: `Record`\<`string`, \{ `manifest`: [`PluginManifest`](/developers/api-reference/interfaces/pluginmanifest/); \}\>

***

### lapisExtensions

#### Get Signature

> **get** **lapisExtensions**(): `LapisIndexedExtension`[]

Defined in: [plugin-manager.ts:993](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L993)

##### Returns

`LapisIndexedExtension`[]

***

### pluginAssetServer

#### Get Signature

> **get** **pluginAssetServer**(): `PluginAssetServer` \| `undefined`

Defined in: [plugin-manager.ts:985](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L985)

##### Returns

`PluginAssetServer` \| `undefined`

***

### systemExtensions

#### Get Signature

> **get** **systemExtensions**(): `LapisIndexedExtension`[]

Defined in: [plugin-manager.ts:997](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L997)

##### Returns

`LapisIndexedExtension`[]

## Methods

### activateByEvent()

> **activateByEvent**(`event`, `trigger?`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:3696](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3696)

#### Parameters

##### event

`string`

##### trigger?

`string` \| `null` = `event`

#### Returns

`Promise`\<`boolean`\>

***

### activateForLanguage()

> **activateForLanguage**(`languageId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:3725](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3725)

#### Parameters

##### languageId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### activateForPath()

> **activateForPath**(`path`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:3732](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3732)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### activateForService()

> **activateForService**(`serviceId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:3718](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3718)

#### Parameters

##### serviceId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### activateForViewType()

> **activateForViewType**(`viewType`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:3714](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3714)

#### Parameters

##### viewType

`string`

#### Returns

`Promise`\<`boolean`\>

***

### disablePlugin()

> **disablePlugin**(`pluginId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:2315](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L2315)

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`PluginEvents`\>\[`Extract`\<`T`, keyof `PluginEvents`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`dispatch`](/developers/api-reference/class-docs/eventdispatcher/#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`PluginEvents`\>\[`Extract`\<`T`, keyof `PluginEvents`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`emit`](/developers/api-reference/class-docs/eventdispatcher/#emit)

***

### enableAllPlugins()

> **enableAllPlugins**(...`pluginIds`): `Promise`\<`void`\>

Defined in: [plugin-manager.ts:2537](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L2537)

#### Parameters

##### pluginIds

...(`string` \| `string`[])[]

#### Returns

`Promise`\<`void`\>

***

### enablePlugin()

> **enablePlugin**(`pluginId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:2156](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L2156)

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### findLanguageIdsForPath()

> **findLanguageIdsForPath**(`path`): `string`[]

Defined in: [plugin-manager.ts:3932](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L3932)

#### Parameters

##### path

`string`

#### Returns

`string`[]

***

### flushPendingConfigWrites()

> **flushPendingConfigWrites**(): `Promise`\<`void`\>

Defined in: [plugin-manager.ts:1684](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1684)

#### Returns

`Promise`\<`void`\>

***

### getBasesViewRegistrations()

> **getBasesViewRegistrations**(): `Map`\<`string`, `any`\>

Defined in: [plugin-manager.ts:1364](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1364)

#### Returns

`Map`\<`string`, `any`\>

***

### getCommunityPluginDiagnostics()

> **getCommunityPluginDiagnostics**(`pluginId`): `CommunityPluginDiagnostics` \| `null`

Defined in: [plugin-manager.ts:1011](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1011)

#### Parameters

##### pluginId

`string`

#### Returns

`CommunityPluginDiagnostics` \| `null`

***

### getEnabledInternalPluginById()

> **getEnabledInternalPluginById**(`pluginId`): `any`

Defined in: [plugin-manager.ts:1486](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1486)

#### Parameters

##### pluginId

`string`

#### Returns

`any`

***

### getLapisContributionDiagnostics()

> **getLapisContributionDiagnostics**(`pluginId`): `string`[]

Defined in: [plugin-manager.ts:1007](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1007)

#### Parameters

##### pluginId

`string`

#### Returns

`string`[]

***

### getLapisExtension()

> **getLapisExtension**(`pluginId`): `LapisIndexedExtension` \| `null`

Defined in: [plugin-manager.ts:1003](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1003)

#### Parameters

##### pluginId

`string`

#### Returns

`LapisIndexedExtension` \| `null`

***

### getPluginFolder()

> **getPluginFolder**(): `string`

Defined in: [plugin-manager.ts:838](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L838)

#### Returns

`string`

***

### isPluginEnabled()

> **isPluginEnabled**(`pluginId`): `boolean`

Defined in: [plugin-manager.ts:854](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L854)

#### Parameters

##### pluginId

`string`

#### Returns

`boolean`

***

### isStaticPlugin()

> **isStaticPlugin**(`pluginId`): `boolean`

Defined in: [plugin-manager.ts:859](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L859)

Registered application profiles own their identities, even when disabled.

#### Parameters

##### pluginId

`string`

#### Returns

`boolean`

***

### loadPlugin()

> **loadPlugin**(`pluginPath`, `options?`): `Promise`\<[`Plugin`](/developers/api-reference/class-docs/plugin/) \| `null`\>

Defined in: [plugin-manager.ts:1835](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1835)

#### Parameters

##### pluginPath

`string`

##### options?

###### loadDeferredRuntime?

`boolean`

###### provenance?

`PluginProvenance`

###### source?

[`PluginSource`](/developers/api-reference/type-aliases/pluginsource/)

#### Returns

`Promise`\<[`Plugin`](/developers/api-reference/class-docs/plugin/) \| `null`\>

***

### loadPlugins()

> **loadPlugins**(`options?`): `Promise`\<`void`\>

Defined in: [plugin-manager.ts:1242](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1242)

#### Parameters

##### options?

`PluginLoadOptions` = `{}`

#### Returns

`Promise`\<`void`\>

***

### migratePluginDataAliases()

> **migratePluginDataAliases**(`migrations`): `Promise`\<`string`[]\>

Defined in: [plugin-manager.ts:1028](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1028)

#### Parameters

##### migrations

`PluginDataAliasMigration`[]

#### Returns

`Promise`\<`string`[]\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`off`](/developers/api-reference/class-docs/eventdispatcher/#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### ref

`EventRef`\<`PluginEvents`, `T`\>

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`offref`](/developers/api-reference/class-docs/eventdispatcher/#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`PluginEvents`, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`PluginEvents`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`on`](/developers/api-reference/class-docs/eventdispatcher/#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`PluginEvents`, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`PluginEvents`, `T`, `any`\>

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`once`](/developers/api-reference/class-docs/eventdispatcher/#once)

***

### preparePluginReplacement()

> **preparePluginReplacement**(`pluginId`): `Promise`\<\{ `reloadRequired`: `boolean`; `rollback`(): `Promise`\<`void`\>; \} \| `undefined`\>

Defined in: [plugin-manager.ts:887](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L887)

Retire a loaded module while preserving its configured startup choice.

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<\{ `reloadRequired`: `boolean`; `rollback`(): `Promise`\<`void`\>; \} \| `undefined`\>

***

### registerBasesView()

> **registerBasesView**(`pluginId`, `viewId`, `registration`): `boolean`

Defined in: [plugin-manager.ts:1372](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1372)

#### Parameters

##### pluginId

`string`

##### viewId

`string`

##### registration

`any`

#### Returns

`boolean`

***

### ~~registerCorePlugins()~~

> **registerCorePlugins**(`profile`): `void`

Defined in: [plugin-manager.ts:1111](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1111)

#### Parameters

##### profile

`PluginProfile`

#### Returns

`void`

#### Deprecated

Use [registerStaticPlugins](#registerstaticplugins).

***

### registerDependencies()

> **registerDependencies**(`deps`): `void`

Defined in: [plugin-manager.ts:1017](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1017)

#### Parameters

##### deps

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### registerLapisServiceProvider()

> **registerLapisServiceProvider**(`registration`): () => `void`

Defined in: [plugin-manager.ts:1402](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1402)

#### Parameters

##### registration

`LapisServiceProviderRegistration`

#### Returns

() => `void`

***

### registerStaticPlugins()

> **registerStaticPlugins**(`profile`): `void`

Defined in: [plugin-manager.ts:1055](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1055)

#### Parameters

##### profile

`PluginProfile`

#### Returns

`void`

***

### registerSystemExtensions()

> **registerSystemExtensions**(`registrations`): `void`

Defined in: [plugin-manager.ts:1182](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1182)

#### Parameters

##### registrations

`LapisSystemExtensionRegistration`[]

#### Returns

`void`

***

### restartPlugin()

> **restartPlugin**(`pluginId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:2431](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L2431)

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### eventName

`T`

##### args

...`ArgumentMap`\<`PluginEvents`\>\[`Extract`\<`T`, keyof `PluginEvents`\>\]

#### Returns

`boolean`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`trigger`](/developers/api-reference/class-docs/eventdispatcher/#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* keyof `PluginEvents`

#### Parameters

##### evt

`EventRef`\<`PluginEvents`, `T`\>

##### args

...`ArgumentMap`\<`PluginEvents`\>\[`Extract`\<`T`, keyof `PluginEvents`\>\]

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/developers/api-reference/class-docs/eventdispatcher/).[`tryTrigger`](/developers/api-reference/class-docs/eventdispatcher/#trytrigger)

***

### unloadPlugin()

> **unloadPlugin**(`pluginId`): `Promise`\<`boolean`\>

Defined in: [plugin-manager.ts:867](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L867)

Release an external registration before the installer removes its code.

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### unregisterBasesView()

> **unregisterBasesView**(`pluginId`, `viewId`): `boolean`

Defined in: [plugin-manager.ts:1386](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-manager.ts#L1386)

#### Parameters

##### pluginId

`string`

##### viewId

`string`

#### Returns

`boolean`
