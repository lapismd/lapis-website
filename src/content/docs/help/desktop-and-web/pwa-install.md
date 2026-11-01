---
title: Web app and PWA status
description: Understand the separate browser-hosted application.
---

The [web app](https://app.lapis.md) is separate from the Tauri Desktop preview. It uses browser-managed storage and cannot assume Desktop's native services.

If the deployed version offers a browser install action, use the browser's menu or address bar to install it. Availability depends on the browser, deployment, and cached application assets. This page does not promise offline installation for an unverified deployment.

Browser storage can be cleared or evicted. Export or back up important notes; an installed browser shortcut is not a backup. Use [Desktop](/help/desktop-and-web/desktop-app/) when you want a vault in an ordinary filesystem folder.
