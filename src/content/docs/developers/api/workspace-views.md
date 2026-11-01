---
title: Workspace views
description: Register custom views and work with workspace leaves.
---

Workspace views let plugins present UI in tabs or sidebars.

## View registration

A plugin registers a view type with a constructor. The workspace creates a leaf when the user opens that view through a command, file association, restored layout, or plugin action.

Use stable view type ids. Changing a view type id breaks saved layouts.

## File-backed views

File-backed views should declare the file extensions or filename patterns they support. Lapis resolves editor associations before falling back to extension registrations.

## Sidebar views

Use sidebar registration for supporting tools such as search panels, graph controls, dependency inspectors, diagnostics, and package managers. Use normal editor tabs for the primary object the user is editing.
