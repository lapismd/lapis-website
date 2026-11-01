---
title: Basic formatting
description: Headings, emphasis, lists, quotes, images, and other standard Markdown syntax in Lapis notes.
---

Lapis notes are ordinary Markdown files. This page covers the standard
formatting syntax that works in source mode, live preview, and reading mode.

The public docs site does not run the in-app vault renderer, so vault-specific
features such as wiki links are documented on other Editing pages.

## Paragraphs and line breaks

Separate paragraphs with a blank line:

```markdown
This is one paragraph.

This is another paragraph.
```

To break a line inside a paragraph without starting a new one, end the line with
two spaces before pressing Enter, or use a `<br>` HTML tag on its own line.

Lapis follows standard Markdown line-break rules: a single Enter in source mode
does not create a visible line break in reading mode unless you use one of the
methods above.

## Headings

Add one to six `#` symbols before heading text:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

Headings appear in the outline view and receive consistent styling across editor
and reading surfaces.

## Emphasis

| Style           | Syntax                   | Example             |
| --------------- | ------------------------ | ------------------- |
| Bold            | `**text**` or `__text__` | `**Bold text**`     |
| Italic          | `*text*` or `_text_`     | `*Italic text*`     |
| Bold and italic | `***text***`             | `***Bold italic***` |
| Strikethrough   | `~~text~~`               | `~~Removed text~~`  |

Combine styles inside a sentence: `**Bold with _nested italic_ inside**`.

To show formatting characters literally, escape them with a backslash:
`\*\*not bold\*\*`.

## Blockquotes

Prefix lines with `>`:

```markdown
> This is a quoted paragraph.
>
> It can span multiple lines.
```

Blockquotes can contain lists, code, and other block elements. For styled
information blocks with icons, use [block callouts](/help/editing/callouts/)
instead.

## Lists

### Unordered lists

Start each item with `-`, `*`, or `+`:

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

### Ordered lists

Start each item with a number followed by `.` or `)`:

```markdown
1. First step
2. Second step
3. Third step
```

Use `Tab` and `Shift+Tab` to indent or outdent list items in the editor.

### Task lists

See [Tables and checklists](/help/editing/tables-and-checklists/) for checkbox
syntax and extended task markers.

## Horizontal rules

Place three or more hyphens on their own line:

```markdown
---
```

## Inline and fenced code

Wrap inline code in single backticks:

```markdown
Use the `status` property to filter notes.
```

For a code block, wrap content in three or more backticks and optionally add a
language identifier:

````markdown
```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```
````

You can also use tilde fences (`~~~`) or indent a block by four spaces. See
[Code, math, and diagrams](/help/editing/code-blocks/) for syntax highlighting,
Mermaid, and plugin-aware fences.

## Footnotes

Add reference-style footnotes with GFM syntax:

```markdown
This sentence has a footnote.[^1]

[^1]: The footnote text appears at the bottom of the note.
```

Footnotes are extracted into note metadata and render in reading mode.

## Images

Link to vault files with standard Markdown image syntax:

```markdown
![Design sketch](attachments/sketch.png)
```

You can also embed vault images with wiki-style syntax. See
[Links, embeds, and tags](/help/editing/links-embeds-and-tags/) for embeds and
size options.

## Escaping special characters

Prefix a special character with `\` to show it literally:

```markdown
\*not italic\*
\# not a heading
\| not a table cell
```

Common characters to escape: `*`, `_`, `#`, `` ` ``, `|`, `~`, and `[`.

To prevent a numbered line from becoming a list item, escape the period:

```markdown
1\. This line stays plain text.
```

## Related pages

- [Markdown basics](/help/editing/markdown-basics/)
- [Advanced formatting](/help/editing/advanced-formatting/)
- [Callouts](/help/editing/callouts/)
- [Attachments](/help/notes-and-files/attachments/)
