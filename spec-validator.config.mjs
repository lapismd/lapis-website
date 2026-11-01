import { defineConfig, tableRequirements } from "@lapismd/spec-validator";
export default defineConfig(
  tableRequirements({
    name: "lapis-website",
    idPattern: "^LW-[A-Z]+-\\d{3}$",
    ruleIds: {
      summary: "LW-SITE-001",
      governance: "LW-SITE-001",
      fileLimits: "LW-SITE-001",
      book: "LW-SITE-001",
      bookIgnore: "LW-SITE-001",
      verification: "LW-SITE-001",
      qmd: "LW-SITE-001",
      internal: "LW-SITE-001",
    },
    validators: {
      summary: true,
      governance: { normative: true, acceptance: false },
      fileLimits: { maxLines: 400, maxBytes: 32768 },
      book: true,
      qmd: { collection: "lapis-website", configPath: ".qmd/index.yml" },
      verification: {
        file: "verification.md",
        mode: "table",
        idMode: "single",
        headers: {
          ids: ["ID"],
          status: ["Status"],
          evidence: ["Evidence"],
          required: [],
        },
        statuses: ["Implemented", "Partial", "Planned"],
        rowMultiplicity: "exactly-one",
        rejectOrphans: true,
        requireEvidence: true,
      },
    },
  }),
);
