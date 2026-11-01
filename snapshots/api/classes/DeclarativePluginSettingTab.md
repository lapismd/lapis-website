[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / DeclarativePluginSettingTab

# Class: DeclarativePluginSettingTab

Defined in: [plugin-settings.ts:50](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin-settings.ts#L50)

Compatibility settings tab backed by the same controlled definition as the
Workspace Settings surface.

## Extends

- [`PluginSettingTab`](PluginSettingTab.md)

## Constructors

### Constructor

> **new DeclarativePluginSettingTab**(`app`, `plugin`, `definition`): `DeclarativePluginSettingTab`

Defined in: [plugin-settings.ts:55](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin-settings.ts#L55)

#### Parameters

##### app

[`App`](App.md)

##### plugin

[`Plugin`](Plugin.md)

##### definition

`WorkspaceSettingsDefinition`

#### Returns

`DeclarativePluginSettingTab`

#### Overrides

[`PluginSettingTab`](PluginSettingTab.md).[`constructor`](PluginSettingTab.md#constructor)

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [settings.svelte.ts:1105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1105)

#### Inherited from

[`PluginSettingTab`](PluginSettingTab.md).[`app`](PluginSettingTab.md#app)

***

### containerEl

> **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1103](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1103)

Outermost HTML element on the setting tab.

#### Inherited from

[`PluginSettingTab`](PluginSettingTab.md).[`containerEl`](PluginSettingTab.md#containerel)

***

### plugin

> `readonly` **plugin**: [`Plugin`](Plugin.md)

Defined in: [settings.svelte.ts:1128](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1128)

#### Inherited from

[`PluginSettingTab`](PluginSettingTab.md).[`plugin`](PluginSettingTab.md#plugin)

## Methods

### display()

> **display**(): `void`

Defined in: [plugin-settings.ts:64](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin-settings.ts#L64)

Called when the settings tab should be rendered.

#### Returns

`void`

#### Overrides

[`PluginSettingTab`](PluginSettingTab.md).[`display`](PluginSettingTab.md#display)

***

### hide()

> **hide**(): `void`

Defined in: [plugin-settings.ts:83](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/plugin-settings.ts#L83)

Hides the contents of the setting tab. Any registered components should be
unloaded when the view is hidden. Override this if you need to perform
additional cleanup.

#### Returns

`void`

#### Overrides

[`PluginSettingTab`](PluginSettingTab.md).[`hide`](PluginSettingTab.md#hide)
