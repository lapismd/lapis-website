---
title: First plugin
description: Use the public Plugin class and owned App.
---

Build against the public `@lapis-notes/api` package and test in a disposable vault.

```ts
import { Plugin } from "@lapis-notes/api";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "hello",
      name: "Say hello",
      callback: () =>
        this.app.notifications.notify({ message: "Hello from a plugin" }),
    });
  }
}
```

`Plugin.addCommand()` scopes registration and owns cleanup. Use the App provided by the host; do not read or assign `globalThis.app`.

Bundle an entry compatible with your declared host and package contract. Use `.lapis/plugins/example-plugin/` in a disposable development vault or install a verified `.lapis-plugin` archive through the host. Hosts may require a restart after replacing loaded code.

See [Manifest](/developers/getting-started/manifest/), [Plugin lifecycle](/developers/getting-started/plugin-lifecycle/), and the [API reference](/developers/api-reference/).
