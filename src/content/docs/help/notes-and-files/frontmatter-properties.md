---
title: Frontmatter & properties
description: Add structured metadata to notes.
---

Properties are structured fields stored in YAML frontmatter at the top of a Markdown note.

```markdown
---
status: active
owner: steve
tags:
  - docs
  - launch
---
```

Use properties when a note needs to appear in a base, search filter, task view, or plugin-generated workflow.

## Good property names

- Use short lowercase names such as `status`, `owner`, `due`, and `priority`.
- Use consistent values so filters stay predictable.
- Keep prose in the note body, not in frontmatter.

Bases and tasks read frontmatter heavily, so consistent metadata pays off quickly.
