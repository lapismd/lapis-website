---
title: Desktop app
description: Use the current Tauri Desktop preview.
---

Desktop opens a folder you choose as a vault. Notes remain ordinary files, while the native host owns folder access, window lifetime, local services, and application state.

## Open a vault

Choose **Open Vault** in the launcher, or **Create New Vault** to select a parent location and name a new folder. Recently opened vaults appear in the launcher. Cancelling a picker keeps your current selection.

## Save and leave

Edit a note in the workspace and let its save finish before leaving. Close, reload, Quit, and returning to the launcher wait for owned work to finish. If saving fails, keep the session open, resolve the error, and retry.

## Preview boundaries

[Downloads and build guidance](/help/getting-started/download-and-install/) cover the published macOS Apple Silicon and Linux ARM64/x64 preview. The macOS archive is ad-hoc signed, unnotarized and build-only; Linux acceptance covers installation, resources, an ordinary window and graceful quit on Ubuntu 24.04. Further native feature checks remain open. Browser screenshots illustrate production presentation; they do not establish native IO or platform support.
