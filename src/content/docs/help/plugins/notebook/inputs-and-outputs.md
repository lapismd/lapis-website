---
title: Inputs and outputs
description: Reactive inputs, tables, charts, markdown, and display helpers.
---

Notebook cells return structured outputs that Lapis renders as tables, charts,
markdown fragments, text, images, errors, or live DOM.

<figure class="product-media">
<img src="/media/notebook-inputs.light.webp" data-product-theme="light" alt="Interactive inputs and calculated outputs in a Notebook workspace." loading="lazy" width="2400" height="1600" />
<img src="/media/notebook-inputs.dark.webp" data-product-theme="dark" alt="Interactive inputs and calculated outputs in a Notebook workspace." loading="lazy" width="2400" height="1600" />
</figure>

## Reactive inputs

Use the top-level `view(...)` form in JavaScript or TypeScript cells:

````markdown
:::cell{#controls lang="ts"}

```ts
const gain = view(
  Inputs.range([0, 10], {
    value: 4,
    step: 1,
    label: "Gain",
  }),
);
const region = view(
  Inputs.text({
    value: "North",
    label: "Region",
  }),
);
```

:::

:::cell{#summary lang="md"}

## Summary

Region: **{{region}}**

Gain: `{{gain}}`

:::
````

When an input changes, downstream cells rerun automatically. The input cell
itself is not rerun.

### Supported input controls

`Inputs.range`, `Inputs.number`, `Inputs.toggle`, `Inputs.text`,
`Inputs.textarea`, `Inputs.date`, `Inputs.datetime`, `Inputs.color`,
`Inputs.email`, `Inputs.tel`, `Inputs.url`, `Inputs.password`, `Inputs.button`,
`Inputs.checkbox`, `Inputs.radio`, `Inputs.select`, `Inputs.file`, `Inputs.search`,
`Inputs.table`, and `Inputs.form`. Table inputs support selection and structured
filters; use the owning plugin’s current examples for advanced options.

## Tables and charts

```ts
lapis.table(rows);
lapis.chart("vega-lite", spec);
```

Tables open in an interactive dataframe viewer with search, filter, sort, and
column profiles.

## Markdown and text outputs

```ts
lapis.markdown("**Bold** summary text.");
lapis.text("Plain text output.");
```

Dynamic markdown cells (`lang="md"`) interpolate `{{variable}}` placeholders
from upstream cells.

## Explicit display

Use `display()` when a cell should show multiple outputs:

```ts
display(`Ready for ${name}.`);
display(html`<article><h2>${name}</h2></article>`);
```

Bare `display`, `Inputs`, `html`, and `svg` globals mirror the `lapis.*`
namespace for convenience.

## Vault file attachments

Read JSON, text, or binary from the vault:

```ts
const attachment = lapis.FileAttachment("./assets/data.json");
const data = await attachment.json();
```

## Trusted DOM

`html` and `svg` tagged templates produce live DOM outputs. They are not
persisted as rendered HTML in the note file; rerun the cell to rebuild them
after reload when needed.

## Package imports

JavaScript and TypeScript cells support static ESM imports for packages installed
through the Packages panel or configured runtime descriptors:

```ts
import { groupBy } from "lodash-es";
```

Relative imports are not supported yet.

## Related pages

- [Cells and syntax](/help/plugins/notebook/cells-and-syntax/)
- [Panels and packages](/help/plugins/notebook/panels-and-packages/)
- [Limitations](/help/plugins/notebook/limitations/)
