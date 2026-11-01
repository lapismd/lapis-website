# Website

## Requirements

| ID            | Requirement                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LW-SITE-001   | The site MUST retain the Lapis Astro/Starlight design, light/dark preference, public routes and interactive docs graph. The website MUST carry the requested starlight-site-graph 0.5.0 patch locally through pnpm patchedDependencies.                      |
| LW-SITE-002   | Marketing and help MUST lead with the Tauri Desktop preview, distinguish host and plugin availability, and link to owning GitHub repositories. Downloads MUST require existing public release assets.                                                        |
| LW-DOCS-001   | Authored guides MUST describe verified current behavior. Generated API Markdown MUST derive from the Notes-owned exporter with source revision, package version and content checksums. The website owns frontmatter and reference routing.                   |
| LW-MEDIA-001  | Product media MUST derive from fixed source-owned production stories in both themes at 1200x800 CSS pixels and 2x density. Capture readiness and source metadata MUST be recorded. Captures MUST NOT imply native qualification or visual-baseline approval. |
| LW-BUILD-001  | Frozen installs, checks and static builds MUST work without sibling checkouts or source services. Reviewed snapshots MUST include hashes and provenance and reject unsafe import paths or mismatched content.                                                |
| LW-DEPLOY-001 | Deployment MUST preserve the lapis-md Pages project and lapis.md domain. Preview and production publication require authorization. Legacy publisher disablement MUST precede the first new production deployment, with a retained rollback deployment.       |

## Ownership

Website content and presentation live here. Notes owns API definitions and their
exporter; Desktop and plugin repositories own production capture scenes and
fixtures. No application runtime is bundled into this static website.

The local graph patch is explicitly requested. It preserves Map values and
normalizes style rules during upstream configuration merging. It is not gated
on upstream work or a new dependency release.

API source links MUST target a reviewed public GitHub commit. Local snapshot
provenance remains separate. Line anchors MUST use unchanged, unambiguous source
context; otherwise the link opens the verified public file without a line anchor.
