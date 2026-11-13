# Cloudflare Pages cutover

The user authorized GitHub push and Cloudflare deployment. The standalone
website's initial source is `a945cd275022f2072966491f1bbfdd2c7d21737f`.

## Preserved hosting

Project `lapis-md`, production branch `main`, account
`e6eb0e8393a8f29ae153e31fa11babc8`, custom domain `lapis.md`.
Direct Upload remains in use; no DNS, custom-domain or Git-provider changes.
Previous production `f2bf61a5-737c-448d-8929-4c3206e0831f` remains available at
https://f2bf61a5.lapis-md.pages.dev for rollback.

## Preview, cutover and acceptance

A fresh GitHub checkout at the initial source passed frozen install, both
tracked dependency patches, format/snapshot/Astro checks, six generator/import
unit tests, specifications, a 216-page static build and the 199-route crawl.
All 20 browser checks passed in an isolated tracked-file export.

The first new immutable preview, https://71e1213f.lapis-md.pages.dev, passed
all 20 remote browser checks. Remote HTTP acceptance also checked all 199
legacy routes and all 42 media checksums without failures.

Only after preview acceptance, the old private `lapis-notes/lapis-notes`
workflow `301133254` (`publish-lapis-md.yml`) was disabled. GitHub reports
`disabled_manually`; zero queued/running legacy publisher jobs were observed.
Other old site workflows perform validation rather than publication.
The legacy local checkout was not edited.

New production deployment `6014c62f-a3d7-494f-8126-428a6ebd6a39`,
https://6014c62f.lapis-md.pages.dev, serves https://lapis.md. All 20 remote
browser checks passed there, alongside all 199 legacy routes and all 42 media
checksums. The previous production was retained rather than deleted.

## GitHub deployment credentials and CI

The account ID is configured as `CLOUDFLARE_ACCOUNT_ID`. The user created the
Pages Edit token and stored it directly as `CLOUDFLARE_API_TOKEN` in this
repository's Actions secrets. No token value is committed or recorded here.

The initial manual GitHub deployment failed solely at upload because the token
was missing. After the user stored it, the failed job was rerun successfully:
[deployment run 43526720537](https://github.com/lapismd/lapis-website/actions/runs/43526720537).
Frozen install, checks, units, specifications, build, crawl, all 20 local browser
checks, upload and all 20 deployed browser checks passed. The independent
[Website checks run 43526385219](https://github.com/lapismd/lapis-website/actions/runs/43526385219)
also passed. These results qualify the initial migration source; later content
and media changes require their own exact-source preview and production checks.

Retain the manual production prerequisite and the deployment runbook. Token
rotation, future release publication and visual-baseline approval remain
separate operations.
