# Cloudflare Pages cutover

Production remains Cloudflare Pages project `lapis-md` at `lapis.md`. The
independent website builds `dist/`; no Worker runtime or app deployment is added.

## Prepare and review

1. Obtain task-specific authorization before creating the GitHub remote, pushing,
   setting deployment secrets, or dispatching a deployment.
2. Publish the verified local website and owning-source commits under separate
   authorization, confirm all imported immutable GitHub source links resolve,
   and confirm website CI passes.
3. Configure `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` through GitHub's
   secret controls. Never put credentials in source, URLs or browser storage.
4. Dispatch Deploy reviewed website with target `preview`. It deploys the
   `website-preview` branch into the existing Pages project.
5. Verify preview routes, search, graph, theme preference, responsiveness,
   screenshots, legal text and product status. Record the deployment identity.

The browser suite can check the actual deployment without starting a local server:

```sh
LAPIS_WEBSITE_BASE_URL=https://website-preview.lapis-md.pages.dev pnpm test:browser
```

The deployment workflow runs this suite after upload, using `https://lapis.md`
for production. A local operator can also upload the same verified `dist/` with
an authenticated Wrangler session; GitHub Actions needs its own repository or
organization deployment secrets. A local OAuth session does not configure them.

## Production cutover

1. Record the existing production deployment ID and rollback URL before changes.
2. Disable `.github/workflows/publish-lapis-md.yml` in the legacy source repository
   and confirm no queued or running legacy publish job can overwrite the site.
3. Confirm the Pages production branch is `main` and existing custom-domain/DNS
   settings remain attached. Do not create a competing Pages project.
4. Dispatch the new deployment with target `production` and acknowledge
   `legacy_publisher_disabled`. The acknowledgment is an operator prerequisite,
   not automated proof that the old workflow is disabled.
5. Smoke-test `/`, `/help/`, `/developers/`, a generated API page, legal pages,
   search and media from the public domain. Check old deep links from the route
   inventory and record the new production deployment ID.
6. If acceptance fails, roll back to the recorded prior Pages deployment; keep
   the legacy publisher disabled so rollback is not overwritten.

No live Pages resources, secrets, DNS, legacy workflows or deployments are changed
by the local migration. The first public deployment may describe a preview;
installer links require actual published Desktop assets.
