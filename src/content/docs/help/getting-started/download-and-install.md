---
title: Desktop preview & installation
description: Start with the current Tauri Desktop preview.
---

Lapis Notes Desktop is a **Tauri preview**, with local filesystem vaults and a native launcher. Preview **2026.31.6-rc.1** is available from the [Desktop release page](https://github.com/lapismd/lapis-desktop/releases/tag/desktop-v2026.31.6-rc.1).

## Download the preview

| Platform            | Requirements             | Download                                                                                                                                                        |
| ------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS Apple Silicon | macOS 15 or later        | [macOS ARM64 ZIP](https://github.com/lapismd/lapis-desktop/releases/download/desktop-v2026.31.6-rc.1/Lapis-Notes-Preview-2026.31.6-rc.1-macos-arm64.zip)        |
| Linux ARM64         | Ubuntu 24.04, glibc 2.39 | [Linux ARM64 archive](https://github.com/lapismd/lapis-desktop/releases/download/desktop-v2026.31.6-rc.1/Lapis-Notes-Preview-2026.31.6-rc.1-linux-arm64.tar.gz) |
| Linux x64           | Ubuntu 24.04, glibc 2.39 | [Linux x64 archive](https://github.com/lapismd/lapis-desktop/releases/download/desktop-v2026.31.6-rc.1/Lapis-Notes-Preview-2026.31.6-rc.1-linux-x64.tar.gz)     |

Linux requires WebKitGTK 4.1, GTK 3 and Ayatana AppIndicator. Follow the release's installation instructions and verify your download against its [SHA256SUMS](https://github.com/lapismd/lapis-desktop/releases/download/desktop-v2026.31.6-rc.1/SHA256SUMS).

The macOS archive is ad-hoc signed and unnotarized. It is a build-only preview: macOS tests, installed-app smoke checks, native WebView acceptance and Homebrew lifecycle checks did not run for this release. Linux installation, resource integrity, an ordinary native window and graceful quit were checked on Ubuntu 24.04; full Linux native feature parity remains unqualified. Read the [release limitations](https://github.com/lapismd/lapis-desktop/releases/download/desktop-v2026.31.6-rc.1/LIMITATIONS.md) before choosing this preview.

## Build from source

Follow the build prerequisites and commands in the [Desktop repository](https://github.com/lapismd/lapis-desktop#readme). Building successfully does not establish native behavior or support on another platform.

## Web app

The separate [web app](https://app.lapis.md) uses browser-managed vault storage and has different host capabilities. A running web deployment may lag the Desktop preview; check its version before relying on a feature. Native terminals, desktop services, and filesystem behavior are host-specific.

## First steps

1. [Create or open a vault](/help/getting-started/create-a-vault/).
2. [Create a note](/help/getting-started/first-note/).
3. Review [plugin availability](/help/plugins/core-plugins-overview/) for your build.
