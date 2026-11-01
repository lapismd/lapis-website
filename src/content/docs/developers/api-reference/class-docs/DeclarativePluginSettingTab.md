---
title: "DeclarativePluginSettingTab"
description: "Source-generated public API reference for DeclarativePluginSettingTab."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [plugin-settings.ts:50](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-settings.ts#L50)

Compatibility settings tab backed by the same controlled definition as the
Workspace Settings surface.

## Extends

- [`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/)

## Constructors

### Constructor

> **new DeclarativePluginSettingTab**(`app`, `plugin`, `definition`): `DeclarativePluginSettingTab`

Defined in: [plugin-settings.ts:55](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-settings.ts#L55)

#### Parameters

##### app

[`App`](/developers/api-reference/class-docs/app/)

##### plugin

[`Plugin`](/developers/api-reference/class-docs/plugin/)

##### definition

`WorkspaceSettingsDefinition`

#### Returns

`DeclarativePluginSettingTab`

#### Overrides

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`constructor`](/developers/api-reference/class-docs/pluginsettingtab/#constructor)

## Properties

### app

> `readonly` **app**: [`App`](/developers/api-reference/class-docs/app/)

Defined in: [settings.svelte.ts:1105](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1105)

#### Inherited from

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`app`](/developers/api-reference/class-docs/pluginsettingtab/#app)

***

### containerEl

> **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1103](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1103)

Outermost HTML element on the setting tab.

#### Inherited from

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`containerEl`](/developers/api-reference/class-docs/pluginsettingtab/#containerel)

***

### plugin

> `readonly` **plugin**: [`Plugin`](/developers/api-reference/class-docs/plugin/)

Defined in: [settings.svelte.ts:1128](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/settings.svelte.ts#L1128)

#### Inherited from

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`plugin`](/developers/api-reference/class-docs/pluginsettingtab/#plugin)

## Methods

### display()

> **display**(): `void`

Defined in: [plugin-settings.ts:64](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-settings.ts#L64)

Called when the settings tab should be rendered.

#### Returns

`void`

#### Overrides

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`display`](/developers/api-reference/class-docs/pluginsettingtab/#display)

***

### hide()

> **hide**(): `void`

Defined in: [plugin-settings.ts:83](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/plugin-settings.ts#L83)

Hides the contents of the setting tab. Any registered components should be
unloaded when the view is hidden. Override this if you need to perform
additional cleanup.

#### Returns

`void`

#### Overrides

[`PluginSettingTab`](/developers/api-reference/class-docs/pluginsettingtab/).[`hide`](/developers/api-reference/class-docs/pluginsettingtab/#hide)
