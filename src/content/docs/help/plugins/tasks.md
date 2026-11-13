---
title: Tasks
description: Plan vault-backed tasks and inspect their Markdown source.
---

Tasks is a separately versioned plugin with a vault-backed planner, indexing and queries. The reviewed current source registers a workspace view and an **Open tasks** command. Plain Markdown checklists still work without it.

## Open the planner

In a compatible host with Tasks installed and enabled, run **Open tasks** from the command palette. Use the planner and task details to organize work, then inspect the underlying vault content when you need to review the saved representation.

Keep tasks in Markdown and frontmatter. Back up important task files before importing or making broad changes. Task indexing, recurring occurrences and planner behavior depend on the installed plugin and the host's supported metadata services.

## Check your host version

Older host integrations exposed indexing and queries without the standalone planner. The current plugin has its own planner runtime, but a published package or screenshot does not establish integration in every Desktop preview. If **Open tasks** is unavailable, check your build's installed version and plugin settings.

The old website's blanket promises of Kanban, Fizzy, calendar and agenda surfaces do not describe every current host. Use the views actually provided by your installed version.

## Source and related guides

- [Tasks source and compatibility guidance](https://github.com/lapismd/lapis-plugin-tasks)
- [Tables and checklists](/help/editing/tables-and-checklists/)
- [Bases](/help/plugins/bases/)
- [Plugin availability](/help/plugins/core-plugins-overview/)
