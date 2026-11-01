---
title: "Command"
description: "Source-generated public API reference for Command."
---

API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7); unverified line locations are omitted.

Defined in: [command.svelte.ts:29](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L29)

## Properties

### activationEvent?

> `optional` **activationEvent?**: `string`

Defined in: [command.svelte.ts:71](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L71)

Activation event used to wake deferred command implementations.

***

### argumentSchema?

> `optional` **argumentSchema?**: `Record`\<`string`, `unknown`\>

Defined in: [command.svelte.ts:77](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L77)

Optional structured argument schema for declarative callers.

***

### callback?

> `optional` **callback?**: (...`args`) => `any`

Defined in: [command.svelte.ts:111](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L111)

Simple callback, triggered globally.

#### Parameters

##### args

...`any`[]

#### Returns

`any`

#### Remarks

Example:

  ```ts
  this.addCommand({
    id: "print-greeting-to-console",
    name: "Print greeting to console",
    callback: () => {
      console.log("Hey, you!");
    },
  });
  ```

***

### category?

> `optional` **category?**: `string`

Defined in: [command.svelte.ts:53](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L53)

Optional command category used by declarative contribution surfaces.

***

### checkCallback?

> `optional` **checkCallback?**: (`checking`) => `boolean` \| `void`

Defined in: [command.svelte.ts:147](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L147)

Complex callback, overrides the simple callback. Used to 'check' whether
your command can be performed in the current circumstances. For example, if
your command requires the active focused pane to be a MarkdownView, then
you should only return true if the condition is satisfied. Returning false
or undefined causes the command to be hidden from the command palette.

#### Parameters

##### checking

`boolean`

Whether the command palette is just 'checking' if your
  command should show right now. If checking is true, then this function
  should not perform any action. If checking is false, then this function
  should perform the action.

#### Returns

`boolean` \| `void`

Whether this command can be executed at the moment.

#### Remarks

Example:

  ```ts
  this.addCommand({
    id: "example-command",
    name: "Example command",
    checkCallback: (checking: boolean) => {
      const value = getRequiredValue();

      if (value) {
        if (!checking) {
          doCommand(value);
        }
        return true;
      }

      return false;
    },
  });
  ```

***

### editorCallback?

> `optional` **editorCallback?**: (`editor`, `ctx`) => `any`

Defined in: [command.svelte.ts:168](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L168)

A command callback that is only triggered when the user is in an editor.
Overrides `callback` and `checkCallback`

#### Parameters

##### editor

[`Editor`](/developers/api-reference/class-docs/editor/)

##### ctx

`any`

#### Returns

`any`

#### Remarks

Example:

  ```ts
  this.addCommand({
    id: "example-command",
    name: "Example command",
    editorCallback: (editor: Editor, view: MarkdownView) => {
      const sel = editor.getSelection();

      console.log(`You have selected: ${sel}`);
    },
  });
  ```

***

### editorCheckCallback?

> `optional` **editorCheckCallback?**: (`checking`, `editor`, `ctx`) => `boolean` \| `void`

Defined in: [command.svelte.ts:197](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L197)

A command callback that is only triggered when the user is in an editor.
Overrides `editorCallback`, `callback` and `checkCallback`

#### Parameters

##### checking

`boolean`

##### editor

[`Editor`](/developers/api-reference/class-docs/editor/)

##### ctx

`any`

#### Returns

`boolean` \| `void`

#### Remarks

Example:

  ```ts
  this.addCommand({
    id: "example-command",
    name: "Example command",
    editorCheckCallback: (
      checking: boolean,
      editor: Editor,
      view: MarkdownView,
    ) => {
      const value = getRequiredValue();

      if (value) {
        if (!checking) {
          doCommand(value);
        }

        return true;
      }

      return false;
    },
  });
  ```

***

### hotkeys?

> `optional` **hotkeys?**: [`Hotkey`](/developers/api-reference/interfaces/hotkey/)[]

Defined in: [command.svelte.ts:210](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L210)

Sets the default hotkey. It is recommended for plugins to avoid setting
default hotkeys if possible, to avoid conflicting hotkeys with one that's
set by the user, even though customized hotkeys have higher priority.

***

### icon?

> `optional` **icon?**: `string`

Defined in: [command.svelte.ts:59](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L59)

Icon ID to be used in the toolbar.

***

### id

> **id**: `string`

Defined in: [command.svelte.ts:35](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L35)

Globally unique ID to identify this command.

***

### mobileOnly?

> `optional` **mobileOnly?**: `boolean`

Defined in: [command.svelte.ts:86](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L86)

***

### name

> **name**: `string`

Defined in: [command.svelte.ts:41](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L41)

Human friendly name for searching.

***

### repeatable?

> `optional` **repeatable?**: `boolean`

Defined in: [command.svelte.ts:93](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L93)

Whether holding the hotkey should repeatedly trigger this command.

#### Default Value

```ts
false
@public
```

***

### sourcePlugin?

> `optional` **sourcePlugin?**: `string`

Defined in: [command.svelte.ts:65](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L65)

Plugin ID that owns this command.

***

### title?

> `optional` **title?**: `string`

Defined in: [command.svelte.ts:47](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L47)

Human-friendly command title without source prefixes.

***

### when?

> `optional` **when?**: `string`

Defined in: [command.svelte.ts:84](https://github.com/lapismd/lapis-notes/blob/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7/packages/api/src/lib/command.svelte.ts#L84)

Declarative context expression that must evaluate truthy before the command
is visible or executable.
