# Lapis Website

Owns the static marketing, user help and developer site at https://lapis.md.
Read `spec/src/website.md` before changes. Preserve public routes and the existing
Astro/Starlight design. Documentation and media imports are explicit reviewed
snapshots; ordinary builds must never need sibling checkouts or live services.

The tracked starlight-site-graph patch is explicitly requested by the user.
Retain it through pnpm patchedDependencies; no upstream repair is required.
The user also explicitly authorized the local Starlight 0.39.3 accessibility
patch for mobile expanded state and search labeling.

Use Jujutsu. Preserve unrelated work, run focused tests followed by `pnpm check`,
`pnpm test`, `pnpm build`, `pnpm test:browser` and `pnpm spec:check` for shared
changes, then commit each verified slice unsigned. No remote creation, pushing,
publication, deployment or legacy publisher disablement without authorization.
Visual review is separate from baseline approval; never update baselines.
