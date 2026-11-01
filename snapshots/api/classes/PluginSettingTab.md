[**Lapis Notes TypeScript API**](../index.md)

***

[Lapis Notes TypeScript API](../index.md) / PluginSettingTab

# Abstract Class: PluginSettingTab

Defined in: [settings.svelte.ts:1124](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1124)

## Extends

- `SettingTab`

## Extended by

- [`DeclarativePluginSettingTab`](DeclarativePluginSettingTab.md)

## Constructors

### Constructor

> **new PluginSettingTab**(`app`, `plugin`): `PluginSettingTab`

Defined in: [settings.svelte.ts:1126](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1126)

#### Parameters

##### app

[`App`](App.md)

##### plugin

[`Plugin`](Plugin.md)

#### Returns

`PluginSettingTab`

#### Overrides

`SettingTab.constructor`

## Properties

### app

> `readonly` **app**: [`App`](App.md)

Defined in: [settings.svelte.ts:1105](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1105)

#### Inherited from

`SettingTab.app`

***

### containerEl

> **containerEl**: `HTMLElement`

Defined in: [settings.svelte.ts:1103](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1103)

Outermost HTML element on the setting tab.

#### Inherited from

`SettingTab.containerEl`

***

### plugin

> `readonly` **plugin**: [`Plugin`](Plugin.md)

Defined in: [settings.svelte.ts:1128](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1128)

## Methods

### display()

> `abstract` **display**(): `void`

Defined in: [settings.svelte.ts:1112](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1112)

Called when the settings tab should be rendered.

#### Returns

`void`

#### Inherited from

`SettingTab.display`

***

### hide()

> **hide**(): `void`

Defined in: [settings.svelte.ts:1121](https://github.com/lapismd/lapis-notes/blob/60c709ad0425aa5dcd5920436ed65f1504247ee3/packages/api/src/lib/settings.svelte.ts#L1121)

Hides the contents of the setting tab. Any registered components should be
unloaded when the view is hidden. Override this if you need to perform
additional cleanup.

#### Returns

`void`

#### Inherited from

`SettingTab.hide`
