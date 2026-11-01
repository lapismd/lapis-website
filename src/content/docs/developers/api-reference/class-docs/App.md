---
title: "App"
description: "Source-generated public API reference for App."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [context.svelte.ts:297](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L297)

Central runtime service container exposed to plugins, views, and renderer
integrations.

`App` owns the active vault session, workspace layout, plugin runtime,
commands, metadata cache, notifications, and related shared services.

## Constructors

### Constructor

> **new App**(`props`): `App`

Defined in: [context.svelte.ts:379](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L379)

Create the application service container for a mounted vault session.

#### Parameters

##### props

[`AppStateProperties`](/developers/api-reference/type-aliases/appstateproperties/)

Runtime services and adapters required to bootstrap the app.

#### Returns

`App`

## Properties

### agentResultViews

> `readonly` **agentResultViews**: `AppResultViewRegistry`

Defined in: [context.svelte.ts:349](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L349)

***

### agentSkills

> `readonly` **agentSkills**: `AppSkillRegistry`

Defined in: [context.svelte.ts:347](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L347)

***

### agentSlashCommands

> `readonly` **agentSlashCommands**: `AppSlashCommandRegistry`

Defined in: [context.svelte.ts:348](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L348)

***

### agentTools

> `readonly` **agentTools**: `AppToolRegistry`

Defined in: [context.svelte.ts:346](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L346)

***

### appDatabase

> `readonly` **appDatabase**: `AppDatabase`

Defined in: [context.svelte.ts:303](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L303)

***

### commands

> **commands**: [`CommandManager`](/developers/api-reference/class-docs/commandmanager/)

Defined in: [context.svelte.ts:333](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L333)

***

### configuration

> `readonly` **configuration**: `Configuration`

Defined in: [context.svelte.ts:314](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L314)

***

### configurationOptionSources

> `readonly` **configurationOptionSources**: `ConfigurationOptionSourceRegistry`

Defined in: [context.svelte.ts:341](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L341)

***

### contextKeys

> `readonly` **contextKeys**: `ContextKeyService`

Defined in: [context.svelte.ts:317](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L317)

***

### dailyDocumentProviders

> `readonly` **dailyDocumentProviders**: `DailyDocumentProviderRegistry`

Defined in: [context.svelte.ts:344](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L344)

***

### editors

> `readonly` **editors**: `Map`\<`string`, `Set`\<`ExtType`\>\>

Defined in: [context.svelte.ts:312](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L312)

***

### editorSuggest

> `readonly` **editorSuggest**: `Map`\<`string`, `Set`\<[`EditorSuggest`](/developers/api-reference/class-docs/editorsuggest/)\<`any`\>\>\>

Defined in: [context.svelte.ts:313](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L313)

***

### embedRegistry

> **embedRegistry**: `EmbedRegistry`

Defined in: [context.svelte.ts:340](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L340)

***

### fileEditingSessions

> `readonly` **fileEditingSessions**: `FileEditingSessionRegistry`

Defined in: [context.svelte.ts:352](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L352)

***

### fileManager

> `readonly` **fileManager**: [`FileManager`](/developers/api-reference/class-docs/filemanager/)

Defined in: [context.svelte.ts:315](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L315)

***

### i18n

> `readonly` **i18n**: `LocalizationManager` = `localeManager`

Defined in: [context.svelte.ts:299](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L299)

***

### icons

> `readonly` **icons**: `IconRegistry`

Defined in: [context.svelte.ts:300](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L300)

***

### indexProjections

> `readonly` **indexProjections**: `IndexProjectionRegistry`

Defined in: [context.svelte.ts:345](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L345)

***

### keymap

> **keymap**: [`Keymap`](/developers/api-reference/class-docs/keymap/)

Defined in: [context.svelte.ts:310](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L310)

***

### languageServices

> `readonly` **languageServices**: [`LanguageServiceManager`](/developers/api-reference/class-docs/languageservicemanager/)

Defined in: [context.svelte.ts:358](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L358)

***

### lastEvent

> **lastEvent**: `UserEvent` \| `null`

Defined in: [context.svelte.ts:353](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L353)

***

### logger

> `readonly` **logger**: `Logger`

Defined in: [context.svelte.ts:371](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L371)

***

### mardownCodeBlockPostProcessor

> **mardownCodeBlockPostProcessor**: `Record`\<`string`, [`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)[]\>

Defined in: [context.svelte.ts:326](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L326)

***

### mardownPostProcessor

> **mardownPostProcessor**: [`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)[]

Defined in: [context.svelte.ts:325](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L325)

***

### markdownDirectiveRenderers

> **markdownDirectiveRenderers**: `Record`\<`string`, [`MarkdownDirectiveRenderer`](/developers/api-reference/type-aliases/markdowndirectiverenderer/)\>

Defined in: [context.svelte.ts:328](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L328)

***

### markdownExtensions

> `readonly` **markdownExtensions**: `MarkdownExtensionRegistry`

Defined in: [context.svelte.ts:350](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L350)

***

### markdownFileSurfaces

> `readonly` **markdownFileSurfaces**: `MarkdownFileSurfaceRegistry`

Defined in: [context.svelte.ts:351](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L351)

***

### markdownViewMenuItems

> `readonly` **markdownViewMenuItems**: `Set`\<[`MarkdownViewMenuItemProvider`](/developers/api-reference/type-aliases/markdownviewmenuitemprovider/)\>

Defined in: [context.svelte.ts:330](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L330)

***

### metadataCache

> **metadataCache**: [`MetadataCache`](/developers/api-reference/class-docs/metadatacache/)

Defined in: [context.svelte.ts:336](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L336)

***

### metadataTypeManager

> **metadataTypeManager**: `MetadataTypeManager`

Defined in: [context.svelte.ts:331](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L331)

***

### nativeHistoryIndex?

> `readonly` `optional` **nativeHistoryIndex?**: `NativeHistoryIndex`

Defined in: [context.svelte.ts:305](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L305)

***

### nativeTasks?

> `readonly` `optional` **nativeTasks?**: `NativeTasksSession`

Defined in: [context.svelte.ts:306](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L306)

***

### nostr

> `readonly` **nostr**: `NostrSignerHost`

Defined in: [context.svelte.ts:322](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L322)

***

### notifications

> **notifications**: [`NotificationManager`](/developers/api-reference/class-docs/notificationmanager/)

Defined in: [context.svelte.ts:356](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L356)

***

### pluginDistribution

> `readonly` **pluginDistribution**: `DefaultPluginDistributionManager`

Defined in: [context.svelte.ts:321](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L321)

***

### plugins

> **plugins**: [`PluginManager`](/developers/api-reference/class-docs/pluginmanager/)

Defined in: [context.svelte.ts:308](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L308)

***

### props

> `readonly` **props**: `AppPublicProperties`

Defined in: [context.svelte.ts:298](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L298)

***

### renderContext

> **renderContext**: [`RenderContext`](/developers/api-reference/class-docs/rendercontext/)

Defined in: [context.svelte.ts:354](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L354)

***

### safeMode

> `readonly` **safeMode**: [`AppSafeModeState`](/developers/api-reference/interfaces/appsafemodestate/)

Defined in: [context.svelte.ts:307](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L307)

***

### scope

> **scope**: [`Scope`](/developers/api-reference/class-docs/scope/)

Defined in: [context.svelte.ts:309](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L309)

***

### searchDocumentProviders

> `readonly` **searchDocumentProviders**: `SearchDocumentProviderRegistry`

Defined in: [context.svelte.ts:342](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L342)

***

### searchResultProviders

> `readonly` **searchResultProviders**: `SearchResultProviderRegistry`

Defined in: [context.svelte.ts:343](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L343)

***

### secretStorage

> **secretStorage**: [`SecretStorage`](/developers/api-reference/class-docs/secretstorage/)

Defined in: [context.svelte.ts:355](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L355)

***

### session?

> `readonly` `optional` **session?**: [`VaultSession`](/developers/api-reference/interfaces/vaultsession/)

Defined in: [context.svelte.ts:304](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L304)

***

### settings

> `readonly` **settings**: [`AppSettings`](/developers/api-reference/class-docs/appsettings/)

Defined in: [context.svelte.ts:311](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L311)

***

### settingsOpen

> **settingsOpen**: `boolean`

Defined in: [context.svelte.ts:334](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L334)

***

### settingsTabId

> **settingsTabId**: `string` \| `null`

Defined in: [context.svelte.ts:335](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L335)

***

### statusBar

> `readonly` **statusBar**: `StatusBarManager`

Defined in: [context.svelte.ts:318](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L318)

***

### telemetry

> **telemetry**: `TelemetryService`

Defined in: [context.svelte.ts:357](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L357)

***

### urls

> `readonly` **urls**: [`AppUrlService`](/developers/api-reference/class-docs/appurlservice/)

Defined in: [context.svelte.ts:319](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L319)

***

### vault

> `readonly` **vault**: [`Vault`](/developers/api-reference/class-docs/vault/)

Defined in: [context.svelte.ts:302](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L302)

***

### vaultChanges

> `readonly` **vaultChanges**: `VaultChangeService`

Defined in: [context.svelte.ts:316](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L316)

***

### workspace

> `readonly` **workspace**: [`Workspace`](/developers/api-reference/class-docs/workspace/)

Defined in: [context.svelte.ts:301](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L301)

***

### workspaceTrust

> `readonly` **workspaceTrust**: `WorkspaceTrustService`

Defined in: [context.svelte.ts:320](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L320)

## Accessors

### backgroundIndexing

#### Get Signature

> **get** **backgroundIndexing**(): `NativeBackgroundIndexingObserver` \| `undefined`

Defined in: [context.svelte.ts:337](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L337)

##### Returns

`NativeBackgroundIndexingObserver` \| `undefined`

***

### internalPlugins

#### Get Signature

> **get** **internalPlugins**(): `object`

Defined in: [context.svelte.ts:367](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L367)

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

### isDarkMode

#### Get Signature

> **get** **isDarkMode**(): `boolean`

Defined in: [context.svelte.ts:864](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L864)

##### Returns

`boolean`

***

### version

#### Get Signature

> **get** **version**(): `string`

Defined in: [context.svelte.ts:860](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L860)

##### Returns

`string`

## Methods

### editorExtensions()

> **editorExtensions**(`viewType`, `context?`): `Extension`[]

Defined in: [context.svelte.ts:727](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L727)

#### Parameters

##### viewType

`string`

##### context?

`Record`\<`string`, `any`\> = `{}`

#### Returns

`Extension`[]

***

### emulateMobile()

> **emulateMobile**(`enable?`): `Promise`\<`void`\>

Defined in: [context.svelte.ts:886](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L886)

Force mobile or desktop workspace layout and reload the app.

Intended for devtools/console use when testing mobile shell behavior on
desktop viewports.

#### Parameters

##### enable?

`boolean` = `true`

When true or omitted, forces mobile layout; when false,
  forces desktop layout.

#### Returns

`Promise`\<`void`\>

***

### loadLocalStorage()

> **loadLocalStorage**(`key`): `string` \| `null`

Defined in: [context.svelte.ts:868](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L868)

#### Parameters

##### key

`string`

#### Returns

`string` \| `null`

***

### openFile()

> **openFile**(`file`, `openState?`): `Promise`\<`void`\>

Defined in: [context.svelte.ts:677](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L677)

#### Parameters

##### file

[`TFile`](/developers/api-reference/class-docs/tfile/)

##### openState?

[`OpenViewState`](/developers/api-reference/interfaces/openviewstate/)

#### Returns

`Promise`\<`void`\>

***

### registerEditorExtension()

> **registerEditorExtension**(`extension`, `viewType?`): `void`

Defined in: [context.svelte.ts:755](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L755)

Registers a CodeMirror 6 extension. To reconfigure cm6 extensions for a
plugin on the fly, an array should be passed in, and modified dynamically.
Once this array is modified, calling [Workspace#updateOptions](/developers/api-reference/class-docs/workspace/#updateoptions) will
apply the changes.

#### Parameters

##### extension

`ExtType`

Must be a CodeMirror 6 `Extension`, or an array of
  Extensions.

##### viewType?

`string` = `"markdown"`

#### Returns

`void`

***

### registerEditorSuggest()

> **registerEditorSuggest**(`suggest`, `viewType?`): `void`

Defined in: [context.svelte.ts:776](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L776)

#### Parameters

##### suggest

[`EditorSuggest`](/developers/api-reference/class-docs/editorsuggest/)\<`any`\>

##### viewType?

`string` = `"markdown"`

#### Returns

`void`

***

### registerMarkdownCodeBlockProcessor()

> **registerMarkdownCodeBlockProcessor**(`language`, `postProcessor`): `void`

Defined in: [context.svelte.ts:810](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L810)

#### Parameters

##### language

`string`

##### postProcessor

[`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)

#### Returns

`void`

***

### registerMarkdownDirectiveRenderer()

> **registerMarkdownDirectiveRenderer**(`directive`, `renderer`): `void`

Defined in: [context.svelte.ts:837](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L837)

#### Parameters

##### directive

`string`

##### renderer

[`MarkdownDirectiveRenderer`](/developers/api-reference/type-aliases/markdowndirectiverenderer/)

#### Returns

`void`

***

### registerMarkdownPostProcessor()

> **registerMarkdownPostProcessor**(`postProcessor`): `void`

Defined in: [context.svelte.ts:795](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L795)

#### Parameters

##### postProcessor

[`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)

#### Returns

`void`

***

### registerMarkdownViewMenuItem()

> **registerMarkdownViewMenuItem**(`provider`): `void`

Defined in: [context.svelte.ts:852](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L852)

#### Parameters

##### provider

[`MarkdownViewMenuItemProvider`](/developers/api-reference/type-aliases/markdownviewmenuitemprovider/)

#### Returns

`void`

***

### saveLocalStorage()

> **saveLocalStorage**(`key`, `data`): `void`

Defined in: [context.svelte.ts:872](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L872)

#### Parameters

##### key

`string`

##### data

`string`

#### Returns

`void`

***

### setting()

> **setting**(`id`): `SettingGroup`

Defined in: [context.svelte.ts:896](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L896)

#### Parameters

##### id

`"options"` \| `"core-plugins"` \| `"community-plugins"`

#### Returns

`SettingGroup`

***

### setWorkspaceTrusted()

> **setWorkspaceTrusted**(`trusted`): `void`

Defined in: [context.svelte.ts:673](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L673)

#### Parameters

##### trusted

`boolean`

#### Returns

`void`

***

### unregisterEditorExtension()

> **unregisterEditorExtension**(`extension`, `viewType?`): `void`

Defined in: [context.svelte.ts:766](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L766)

#### Parameters

##### extension

`ExtType`

##### viewType?

`string` = `"markdown"`

#### Returns

`void`

***

### unregisterEditorSuggest()

> **unregisterEditorSuggest**(`suggest`, `viewType?`): `void`

Defined in: [context.svelte.ts:787](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L787)

#### Parameters

##### suggest

[`EditorSuggest`](/developers/api-reference/class-docs/editorsuggest/)\<`any`\>

##### viewType?

`string` = `"markdown"`

#### Returns

`void`

***

### unregisterMarkdownCodeBlockProcessor()

> **unregisterMarkdownCodeBlockProcessor**(`language`, `postProcessor`): `void`

Defined in: [context.svelte.ts:826](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L826)

#### Parameters

##### language

`string`

##### postProcessor

[`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)

#### Returns

`void`

***

### unregisterMarkdownDirectiveRenderer()

> **unregisterMarkdownDirectiveRenderer**(`directive`): `void`

Defined in: [context.svelte.ts:847](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L847)

#### Parameters

##### directive

`string`

#### Returns

`void`

***

### unregisterMarkdownPostProcessor()

> **unregisterMarkdownPostProcessor**(`postProcessor`): `void`

Defined in: [context.svelte.ts:804](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L804)

#### Parameters

##### postProcessor

[`MarkdownPostProcessor`](/developers/api-reference/interfaces/markdownpostprocessor/)

#### Returns

`void`

***

### unregisterMarkdownViewMenuItem()

> **unregisterMarkdownViewMenuItem**(`provider`): `void`

Defined in: [context.svelte.ts:856](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/context.svelte.ts#L856)

#### Parameters

##### provider

[`MarkdownViewMenuItemProvider`](/developers/api-reference/type-aliases/markdownviewmenuitemprovider/)

#### Returns

`void`
