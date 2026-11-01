[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / Plugin

# Abstract Class: Plugin

Defined in: [plugin.ts:289](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L289)

Base class for Lapis plugins.

Plugins extend [Component](Component.md), so teardown callbacks, events, commands, and
DOM listeners registered through helper methods are cleaned up when the
plugin unloads.

## Extends

- [`Component`](Component.md)

## Constructors

### Constructor

> **new Plugin**(`app`, `manifest`): `Plugin`

Defined in: [plugin.ts:307](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L307)

#### Parameters

##### app

[`App`](App.md)

##### manifest

[`PluginManifest`](../interfaces/PluginManifest.md)

#### Returns

`Plugin`

#### Overrides

[`Component`](Component.md).[`constructor`](Component.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [plugin.ts:308](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L308)

***

### basePath

> **basePath**: `string` = `""`

Defined in: [plugin.ts:290](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L290)

***

### children

> **children**: [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>[] = `[]`

Defined in: [view.svelte.ts:31](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L31)

#### Inherited from

[`Component`](Component.md).[`children`](Component.md#children)

***

### loaded

> **loaded**: `boolean` = `false`

Defined in: [view.svelte.ts:33](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L33)

#### Inherited from

[`Component`](Component.md).[`loaded`](Component.md#loaded)

***

### manifest

> `readonly` **manifest**: [`PluginManifest`](../interfaces/PluginManifest.md)

Defined in: [plugin.ts:309](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L309)

## Accessors

### containerEl

#### Get Signature

> **get** **containerEl**(): `HTMLElement`

Defined in: [view.svelte.ts:37](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L37)

##### Returns

`HTMLElement`

#### Set Signature

> **set** **containerEl**(`el`): `void`

Defined in: [view.svelte.ts:41](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L41)

##### Parameters

###### el

`HTMLElement`

##### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`containerEl`](Component.md#containerel)

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [plugin.ts:413](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L413)

##### Returns

`boolean`

***

### errorMessage

#### Get Signature

> **get** **errorMessage**(): `string` \| `null`

Defined in: [plugin.ts:438](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L438)

##### Returns

`string` \| `null`

***

### failureCount

#### Get Signature

> **get** **failureCount**(): `number`

Defined in: [plugin.ts:446](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L446)

##### Returns

`number`

***

### grantedCapabilities

#### Get Signature

> **get** **grantedCapabilities**(): `HostedPluginCapability`[]

Defined in: [plugin.ts:458](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L458)

##### Returns

`HostedPluginCapability`[]

***

### hostMode

#### Get Signature

> **get** **hostMode**(): `string`

Defined in: [plugin.ts:450](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L450)

##### Returns

`string`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [plugin.ts:462](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L462)

##### Returns

`string`

***

### lastFailureMessage

#### Get Signature

> **get** **lastFailureMessage**(): `string` \| `null`

Defined in: [plugin.ts:442](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L442)

##### Returns

`string` \| `null`

***

### provenance

#### Get Signature

> **get** **provenance**(): `PluginProvenance`

Defined in: [plugin.ts:421](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L421)

##### Returns

`PluginProvenance`

***

### registeredViewTypes

#### Get Signature

> **get** **registeredViewTypes**(): `ReadonlySet`\<`string`\>

Defined in: [plugin.ts:430](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L430)

View types owned by this plugin across enable and disable cycles.

##### Returns

`ReadonlySet`\<`string`\>

***

### requestedCapabilities

#### Get Signature

> **get** **requestedCapabilities**(): `HostedPluginCapability`[]

Defined in: [plugin.ts:454](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L454)

##### Returns

`HostedPluginCapability`[]

***

### required

#### Get Signature

> **get** **required**(): `boolean`

Defined in: [plugin.ts:425](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L425)

##### Returns

`boolean`

***

### source

#### Get Signature

> **get** **source**(): [`PluginSource`](../type-aliases/PluginSource.md)

Defined in: [plugin.ts:417](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L417)

##### Returns

[`PluginSource`](../type-aliases/PluginSource.md)

***

### state

#### Get Signature

> **get** **state**(): `PluginRuntimeState`

Defined in: [plugin.ts:434](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L434)

##### Returns

`PluginRuntimeState`

***

### syncHost

#### Get Signature

> **get** **syncHost**(): `SyncHostCapabilities`

Defined in: [plugin.ts:467](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L467)

Host-authenticated durable capabilities for sync and similar plugins.

##### Returns

`SyncHostCapabilities`

## Methods

### addChild()

> **addChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:161](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L161)

Adds a child component, loading it if this component is loaded

#### Type Parameters

##### T

`T` *extends* [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`Component`](Component.md).[`addChild`](Component.md#addchild)

***

### addCommand()

> **addCommand**(`command`): [`Command`](../interfaces/Command.md)

Defined in: [plugin.ts:766](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L766)

#### Parameters

##### command

[`Command`](../interfaces/Command.md)

#### Returns

[`Command`](../interfaces/Command.md)

***

### addRibbonIcon()

> **addRibbonIcon**(`icon`, `title`, `callback`): `void`

Defined in: [plugin.ts:749](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L749)

#### Parameters

##### icon

`string`

##### title

`string`

##### callback

(`evt`) => `any`

#### Returns

`void`

***

### addSettingTab()

> **addSettingTab**(`settingTab`): `void`

Defined in: [plugin.ts:1366](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1366)

Register a settings tab, which allows users to change settings.

#### Parameters

##### settingTab

[`PluginSettingTab`](PluginSettingTab.md)

#### Returns

`void`

#### See

[https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab](https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab)

***

### addStatusBarItem()

> **addStatusBarItem**(): `HTMLElement`

Defined in: [plugin.ts:594](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L594)

#### Returns

`HTMLElement`

***

### configureRuntime()

> **configureRuntime**(`options?`): `void`

Defined in: [plugin.ts:334](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L334)

Apply runtime metadata resolved by the plugin manager before activation.

#### Parameters

##### options?

[`PluginRuntimeOptions`](../interfaces/PluginRuntimeOptions.md) = `{}`

Runtime source, host, and capability information.

#### Returns

`void`

***

### createDiagnosticCollection()

> **createDiagnosticCollection**(`id`, `options?`): `DiagnosticCollection`

Defined in: [plugin.ts:950](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L950)

Create an owner-scoped diagnostic collection disposed with this plugin.

#### Parameters

##### id

`string`

##### options?

`DiagnosticCollectionOptions` = `{}`

#### Returns

`DiagnosticCollection`

***

### deleteGeneratedState()

> **deleteGeneratedState**(`key`): `Promise`\<`void`\>

Defined in: [plugin.ts:677](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L677)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

***

### disable()

> **disable**(): `Promise`\<`void`\>

Defined in: [plugin.ts:556](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L556)

#### Returns

`Promise`\<`void`\>

***

### dispatch()

> **dispatch**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L105)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`dispatch`](Component.md#dispatch)

***

### emit()

> **emit**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:98](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L98)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`emit`](Component.md#emit)

***

### enable()

> **enable**(): `Promise`\<`void`\>

Defined in: [plugin.ts:372](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L372)

Enable the plugin and run its `onload()` lifecycle.

#### Returns

`Promise`\<`void`\>

A promise that resolves when activation completes.

***

### load()

> **load**(): `void`

Defined in: [view.svelte.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L50)

Load this component and its children

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`load`](Component.md#load)

***

### loadData()

> **loadData**(): `Promise`\<`any`\>

Defined in: [plugin.ts:616](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L616)

Load settings data from disk. Data is stored in `data.json` in the plugin
folder.

#### Returns

`Promise`\<`any`\>

#### See

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

***

### loadGeneratedState()

> **loadGeneratedState**\<`T`\>(`key`): `Promise`\<`T` \| `null`\>

Defined in: [plugin.ts:662](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L662)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`T` \| `null`\>

***

### measureTelemetry()

> **measureTelemetry**\<`T`\>(`name`, `callback`, `options?`): `T`

Defined in: [plugin.ts:534](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L534)

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

##### callback

(`span`) => `T`

##### options?

`TelemetryMeasurementOptions` = `{}`

#### Returns

`T`

***

### measureTelemetryAsync()

> **measureTelemetryAsync**\<`T`\>(`name`, `callback`, `options?`): `Promise`\<`T`\>

Defined in: [plugin.ts:545](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L545)

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

##### callback

(`span`) => `Promise`\<`T`\>

##### options?

`TelemetryMeasurementOptions` = `{}`

#### Returns

`Promise`\<`T`\>

***

### migrateDataToGeneratedState()

> **migrateDataToGeneratedState**\<`T`\>(`legacyKey`, `options?`): `Promise`\<`T` \| `null`\>

Defined in: [plugin.ts:684](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L684)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### legacyKey

`string`

##### options?

###### generatedKey?

`string`

###### pruneLegacyKey?

`boolean`

#### Returns

`Promise`\<`T` \| `null`\>

***

### off()

> **off**\<`T`\>(`eventName`, `listener`, `context?`, `once?`): `void`

Defined in: [events.ts:78](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L78)

#### Type Parameters

##### T

`T` *extends* `string`

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

[`Component`](Component.md).[`off`](Component.md#off)

***

### offref()

> **offref**\<`T`\>(`ref`): `void`

Defined in: [events.ts:87](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L87)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### ref

`EventRef`\<`Record`\<`string`, `any`\>, `T`\>

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`offref`](Component.md#offref)

***

### on()

> **on**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:48](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L48)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

#### Inherited from

[`Component`](Component.md).[`on`](Component.md#on)

***

### once()

> **once**\<`T`\>(`eventName`, `listener`, `context?`): `EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

Defined in: [events.ts:63](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L63)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### listener

(...`args`) => `void`

##### context?

`any`

#### Returns

`EventRef`\<`Record`\<`string`, `any`\>, `T`, `any`\>

#### Inherited from

[`Component`](Component.md).[`once`](Component.md#once)

***

### onExternalSettingsChange()

> **onExternalSettingsChange**(): `void` \| `Promise`\<`void`\>

Defined in: [plugin.ts:964](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L964)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onload()

> `abstract` **onload**(): `void` \| `Promise`\<`void`\>

Defined in: [plugin.ts:319](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L319)

Load plugin state and register plugin-owned resources.

#### Returns

`void` \| `Promise`\<`void`\>

#### Overrides

[`Component`](Component.md).[`onload`](Component.md#onload)

***

### onunload()

> **onunload**(): `void` \| `Promise`\<`void`\>

Defined in: [plugin.ts:326](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L326)

Release plugin-owned resources before the plugin unloads.

#### Returns

`void` \| `Promise`\<`void`\>

#### Overrides

[`Component`](Component.md).[`onunload`](Component.md#onunload)

***

### onUserEnable()

> **onUserEnable**(): `void` \| `Promise`\<`void`\>

Defined in: [plugin.ts:962](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L962)

#### Returns

`void` \| `Promise`\<`void`\>

***

### register()

> **register**(`cb`): `void`

Defined in: [view.svelte.ts:188](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L188)

Registers a callback to be called when unloading

#### Parameters

##### cb

() => `any`

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`register`](Component.md#register)

***

### registerAgentResultView()

> **registerAgentResultView**(`view`): `AgentResultViewRegistration`

Defined in: [plugin.ts:1352](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1352)

Register a transcript result view. This is not a workspace palette command.

#### Parameters

##### view

`AgentResultViewDefinition`\<[`App`](App.md)\>

#### Returns

`AgentResultViewRegistration`

***

### registerAgentSkill()

> **registerAgentSkill**(`skill`): `AppSkillSourceRegistration`

Defined in: [plugin.ts:1330](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1330)

Register a programmatic skill under this plugin's lifecycle.

#### Parameters

##### skill

`ProgrammaticAppSkill`

#### Returns

`AppSkillSourceRegistration`

***

### registerAgentSkillDirectory()

> **registerAgentSkillDirectory**(`path`): `AppSkillSourceRegistration`

Defined in: [plugin.ts:1310](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1310)

Register a directory that contains one skill.

#### Parameters

##### path

`string`

#### Returns

`AppSkillSourceRegistration`

***

### registerAgentSkillRoot()

> **registerAgentSkillRoot**(`path`): `AppSkillSourceRegistration`

Defined in: [plugin.ts:1320](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1320)

Register a root that may contain many skill directories.

#### Parameters

##### path

`string`

#### Returns

`AppSkillSourceRegistration`

***

### registerAgentSlashCommand()

> **registerAgentSlashCommand**(`command`): `AppSlashCommandRegistration`

Defined in: [plugin.ts:1340](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1340)

Register a composer slash command. This is not a workspace palette command.

#### Parameters

##### command

`AppSlashCommandDefinition`

#### Returns

`AppSlashCommandRegistration`

***

### registerAgentTool()

> **registerAgentTool**\<`TInput`\>(`tool`): `AppToolRegistration`

Defined in: [plugin.ts:1296](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1296)

Register an application tool under this plugin's lifecycle and identity.

#### Type Parameters

##### TInput

`TInput`

#### Parameters

##### tool

`AppTool`\<`TInput`\>

#### Returns

`AppToolRegistration`

***

### registerBasesView()

> **registerBasesView**(`viewId`, `registration`): `boolean`

Defined in: [plugin.ts:923](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L923)

#### Parameters

##### viewId

`string`

##### registration

`any`

#### Returns

`boolean`

***

### registerCliHandler()

> **registerCliHandler**(`name`, `prefix`, `callback`): `void`

Defined in: [plugin.ts:915](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L915)

#### Parameters

##### name

`string`

##### prefix

`string`

##### callback

(...`args`) => `any`

#### Returns

`void`

***

### registerConfigurationOptionSource()

> **registerConfigurationOptionSource**(`id`, `provider`): `ConfigurationOptionSourceRegistration`

Defined in: [plugin.ts:883](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L883)

#### Parameters

##### id

`string`

##### provider

`Omit`\<`ConfigurationOptionSourceProvider`, `"pluginId"`\>

#### Returns

`ConfigurationOptionSourceRegistration`

***

### registerContextKey()

> **registerContextKey**(`key`, `defaultValue?`): `ScopedContextKey`

Defined in: [plugin.ts:793](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L793)

#### Parameters

##### key

`string`

##### defaultValue?

`ContextKeyValue`

#### Returns

`ScopedContextKey`

***

### registerDomEvent()

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:207](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L207)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `HTMLElementEventMap`

##### Parameters

###### el

`HTMLElement`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:213](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L213)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `DocumentEventMap`

##### Parameters

###### el

`Document`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

#### Call Signature

> **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Defined in: [view.svelte.ts:219](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L219)

Registers an DOM event to be detached when unloading

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### el

`Window`

###### type

`K`

###### callback

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

[`Component`](Component.md).[`registerDomEvent`](Component.md#registerdomevent)

***

### registerEditorExtension()

> **registerEditorExtension**(`extension`, `viewType?`): `void`

Defined in: [plugin.ts:1021](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1021)

Registers a CodeMirror 6 extension. To reconfigure cm6 extensions for a
plugin on the fly, an array should be passed in, and modified dynamically.
Once this array is modified, calling [Workspace.updateOptions](Workspace.md#updateoptions) will
apply the changes.

#### Parameters

##### extension

`ExtType`

Must be a CodeMirror 6 `Extension`, or an array of
  Extensions.

##### viewType?

`string`

#### Returns

`void`

***

### registerEditorSuggest()

> **registerEditorSuggest**(`editorSuggest`, `viewType?`): `void`

Defined in: [plugin.ts:1001](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1001)

Register an EditorSuggest which can provide live suggestions while the user
is typing.

#### Parameters

##### editorSuggest

[`EditorSuggest`](EditorSuggest.md)\<`any`\>

##### viewType?

`string` = `"markdown"`

#### Returns

`void`

***

### registerEditorView()

> **registerEditorView**(`contribution`): `void`

Defined in: [plugin.ts:874](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L874)

#### Parameters

##### contribution

`EditorViewContribution`

#### Returns

`void`

***

### registerEvent()

> **registerEvent**\<`T`, `K`\>(`eventRef`): `void`

Defined in: [view.svelte.ts:192](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L192)

#### Type Parameters

##### T

`T` *extends* `ValidEventTypes`

##### K

`K` *extends* `string` \| `symbol`

#### Parameters

##### eventRef

`EventRef`\<`T`, `K`, `any`\>

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`registerEvent`](Component.md#registerevent)

***

### registerExtensions()

> **registerExtensions**(`extensions`, `viewType?`, `options?`): `void`

Defined in: [plugin.ts:966](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L966)

#### Parameters

##### extensions

`string`[]

##### viewType?

`string` = `"markdown"`

##### options?

`ExtensionRegistrationOptions`

#### Returns

`void`

***

### registerHoverLinkSource()

> **registerHoverLinkSource**(`id`, `info`): `void`

Defined in: [plugin.ts:900](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L900)

#### Parameters

##### id

`string`

##### info

`any`

#### Returns

`void`

***

### registerIcon()

> **registerIcon**(`localId`, `svg`): `string`

Defined in: [plugin.ts:854](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L854)

Register an App-owned SVG and dispose it automatically on plugin unload.

#### Parameters

##### localId

`string`

##### svg

`string`

#### Returns

`string`

***

### registerIconPack()

> **registerIconPack**(`input`): `string`

Defined in: [plugin.ts:865](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L865)

Register an owned icon pack; use the returned prefix in `prefix:icon` IDs.

#### Parameters

##### input

`IconLoader`

#### Returns

`string`

***

### registerIndexProjection()

> **registerIndexProjection**\<`T`\>(`registration`): `RegisteredIndexProjectionHandle`\<`T`\>

Defined in: [plugin.ts:1157](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1157)

#### Type Parameters

##### T

`T` = `Record`\<`string`, `unknown`\>

#### Parameters

##### registration

`IndexProjectionRegistration`

#### Returns

`RegisteredIndexProjectionHandle`\<`T`\>

***

### registerInterval()

> **registerInterval**(`id`): `void`

Defined in: [view.svelte.ts:198](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L198)

#### Parameters

##### id

`Timeout`

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`registerInterval`](Component.md#registerinterval)

***

### registerLapisServiceProvider()

> **registerLapisServiceProvider**(`registration`): `void`

Defined in: [plugin.ts:939](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L939)

#### Parameters

##### registration

`Omit`\<`LapisServiceProviderRegistration`, `"pluginId"`\>

#### Returns

`void`

***

### registerMarkdownCodeBlockProcessor()

> **registerMarkdownCodeBlockProcessor**(`language`, `handler`, `sortOrder?`): [`MarkdownPostProcessor`](../interfaces/MarkdownPostProcessor.md)

Defined in: [plugin.ts:1081](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1081)

#### Parameters

##### language

`string`

##### handler

(`source`, `el`, `ctx`) => `void` \| `Promise`\<`any`\>

##### sortOrder?

`number`

#### Returns

[`MarkdownPostProcessor`](../interfaces/MarkdownPostProcessor.md)

***

### registerMarkdownDirectiveRenderer()

> **registerMarkdownDirectiveRenderer**(`directive`, `renderer`): `void`

Defined in: [plugin.ts:1129](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1129)

#### Parameters

##### directive

`string`

##### renderer

[`MarkdownDirectiveRenderer`](../type-aliases/MarkdownDirectiveRenderer.md)

#### Returns

`void`

***

### registerMarkdownEmbedder()

> **registerMarkdownEmbedder**(`embedder`): `void`

Defined in: [plugin.ts:1146](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1146)

#### Parameters

##### embedder

`MarkdownEmbedder`

#### Returns

`void`

***

### registerMarkdownExtension()

> **registerMarkdownExtension**(`contribution`): `void`

Defined in: [plugin.ts:1029](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1029)

Register a plugin-owned Markdown contribution for every Markdown surface.

#### Parameters

##### contribution

[`MarkdownExtensionContribution`](../interfaces/MarkdownExtensionContribution.md)

#### Returns

`void`

***

### registerMarkdownFileSurfaceProvider()

> **registerMarkdownFileSurfaceProvider**(`provider`): `void`

Defined in: [plugin.ts:1034](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1034)

Register a provider for complete Markdown file surfaces.

#### Parameters

##### provider

[`MarkdownFileSurfaceProvider`](../type-aliases/MarkdownFileSurfaceProvider.md)

#### Returns

`void`

***

### registerMarkdownPostProcessor()

> **registerMarkdownPostProcessor**(`postProcessor`, `sortOrder?`): [`MarkdownPostProcessor`](../interfaces/MarkdownPostProcessor.md)

Defined in: [plugin.ts:1047](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1047)

Registers a post processor, to change how the document looks in reading
mode.

#### Parameters

##### postProcessor

[`MarkdownPostProcessor`](../interfaces/MarkdownPostProcessor.md)

##### sortOrder?

`number`

#### Returns

[`MarkdownPostProcessor`](../interfaces/MarkdownPostProcessor.md)

#### See

[https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing](https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing)

***

### registerMarkdownViewMenuItem()

> **registerMarkdownViewMenuItem**(`provider`): `void`

Defined in: [plugin.ts:1139](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1139)

#### Parameters

##### provider

[`MarkdownViewMenuItemProvider`](../type-aliases/MarkdownViewMenuItemProvider.md)

#### Returns

`void`

***

### registerMetadataProcessor()

> **registerMetadataProcessor**(`processor`, `ext?`): `void`

Defined in: [plugin.ts:1150](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1150)

#### Parameters

##### processor

`MetadataProcessor`

##### ext?

`string` = `"md"`

#### Returns

`void`

***

### registerObsidianProtocolHandler()

> **registerObsidianProtocolHandler**(`action`, `handler`): `void`

Defined in: [plugin.ts:907](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L907)

#### Parameters

##### action

`string`

##### handler

(`params`) => `any`

#### Returns

`void`

***

### registerSearchDocumentProvider()

> **registerSearchDocumentProvider**(`localId`, `provider`): `SearchDocumentProviderRegistration`

Defined in: [plugin.ts:1263](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1263)

Contribute normalized searchable content without writing generated state.
The local id is namespaced by this plugin's runtime id.

#### Parameters

##### localId

`string`

##### provider

`Omit`\<`SearchDocumentProvider`, `"id"`\>

#### Returns

`SearchDocumentProviderRegistration`

***

### registerSearchResultProvider()

> **registerSearchResultProvider**(`localId`, `provider`): `SearchResultProviderRegistration`

Defined in: [plugin.ts:1281](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1281)

Contribute query results whose navigation remains provider-owned.

#### Parameters

##### localId

`string`

##### provider

`Omit`\<`SearchResultProvider`, `"id"`\>

#### Returns

`SearchResultProviderRegistration`

***

### registerSettingsSection()

> **registerSettingsSection**(`definition`): [`PluginSettingsRegistration`](../interfaces/PluginSettingsRegistration.md)

Defined in: [plugin.ts:1407](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L1407)

Register one controlled declarative settings definition with Workspace
Settings. Source-backed values remain owned by the plugin.

#### Parameters

##### definition

`WorkspaceSettingsDefinition`

#### Returns

[`PluginSettingsRegistration`](../interfaces/PluginSettingsRegistration.md)

***

### registerShortcut()

> **registerShortcut**(`handler`): `void`

Defined in: [plugin.ts:808](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L808)

#### Parameters

##### handler

[`KeymapEventHandler`](../interfaces/KeymapEventHandler.md)

#### Returns

`void`

***

### registerSidebarView()

> **registerSidebarView**(`type`, `viewCreator`, `options?`, `access?`): `void`

Defined in: [plugin.ts:832](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L832)

#### Parameters

##### type

`string`

##### viewCreator

`ViewCreator`

##### options?

###### group?

`string`

###### groupIcon?

`string`

###### groupTitle?

`string`

###### hidden?

`boolean`

###### icon?

`string`

###### side?

`"right"` \| `"left"`

###### title?

`string`

##### access?

`ViewAccess`

#### Returns

`void`

***

### registerTypeWidget()

> **registerTypeWidget**(`widget`): `void`

Defined in: [plugin.ts:983](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L983)

#### Parameters

##### widget

`TypeWidget`

#### Returns

`void`

***

### registerView()

> **registerView**(`type`, `viewCreator`, `access?`): `void`

Defined in: [plugin.ts:812](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L812)

#### Parameters

##### type

`string`

##### viewCreator

`ViewCreator`

##### access?

`ViewAccess`

#### Returns

`void`

***

### removeChild()

> **removeChild**\<`T`\>(`component`): `T`

Defined in: [view.svelte.ts:175](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L175)

Removes a child component, unloading it

#### Type Parameters

##### T

`T` *extends* [`Component`](Component.md)\<`Record`\<`string`, `any`\>\>

#### Parameters

##### component

`T`

#### Returns

`T`

#### Inherited from

[`Component`](Component.md).[`removeChild`](Component.md#removechild)

***

### removeCommand()

> **removeCommand**(`commandId`): `void`

Defined in: [plugin.ts:789](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L789)

#### Parameters

##### commandId

`string`

#### Returns

`void`

***

### saveData()

> **saveData**(`data`): `Promise`\<`void`\>

Defined in: [plugin.ts:649](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L649)

Write settings data to disk. Data is stored in `data.json` in the plugin
folder.

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

#### See

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

***

### saveGeneratedState()

> **saveGeneratedState**(`key`, `value`): `Promise`\<`void`\>

Defined in: [plugin.ts:670](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L670)

#### Parameters

##### key

`string`

##### value

`unknown`

#### Returns

`Promise`\<`void`\>

***

### startTelemetrySpan()

> **startTelemetrySpan**(`name`, `options?`): `TelemetrySpan`

Defined in: [plugin.ts:524](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin.ts#L524)

#### Parameters

##### name

`string`

##### options?

`TelemetrySpanOptions` = `{}`

#### Returns

`TelemetrySpan`

***

### trigger()

> **trigger**\<`T`\>(`eventName`, ...`args`): `boolean`

Defined in: [events.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L91)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### eventName

`T`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

[`Component`](Component.md).[`trigger`](Component.md#trigger)

***

### tryTrigger()

> **tryTrigger**\<`T`\>(`evt`, ...`args`): `void`

Defined in: [events.ts:112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/events.ts#L112)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### evt

`EventRef`\<`Record`\<`string`, `any`\>, `T`\>

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`tryTrigger`](Component.md#trytrigger)

***

### unload()

> **unload**(): `void`

Defined in: [view.svelte.ts:91](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/view.svelte.ts#L91)

Unload this component and its children

#### Returns

`void`

#### Inherited from

[`Component`](Component.md).[`unload`](Component.md#unload)
