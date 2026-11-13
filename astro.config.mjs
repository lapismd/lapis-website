import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightSiteGraph from "starlight-site-graph";

const docsGraphVisibilityPaths = [
  "!developers/api-reference",
  "!developers/api-reference/**",
  "help",
  "help/**",
  "developers",
  "developers/**",
];
const docsGraphLinkPaths = [
  "!developers/api-reference",
  "!developers/api-reference/**",
  "help",
  "help/",
  "help/**",
  "developers",
  "developers/",
  "developers/**",
];
const docsGraphContentFiles = ["**/help/**", "**/developers/**"];
const docsGraphExcludedContentFiles = [
  "!**/developers/api-reference/**",
  ...docsGraphContentFiles,
];

const helpSidebar = [
  { label: "Home", link: "/help/" },
  {
    label: "Getting started",
    items: [{ autogenerate: { directory: "help/getting-started" } }],
  },
  {
    label: "User interface",
    items: [{ autogenerate: { directory: "help/user-interface" } }],
  },
  {
    label: "Notes & files",
    items: [{ autogenerate: { directory: "help/notes-and-files" } }],
  },
  {
    label: "Editing",
    items: [
      { label: "Markdown basics", link: "/help/editing/markdown-basics/" },
      { label: "Basic formatting", link: "/help/editing/basic-formatting/" },
      {
        label: "Links, embeds, and tags",
        link: "/help/editing/links-embeds-and-tags/",
      },
      {
        label: "Frontmatter and properties",
        link: "/help/editing/frontmatter-and-properties/",
      },
      {
        label: "Tables and checklists",
        link: "/help/editing/tables-and-checklists/",
      },
      { label: "Callouts", link: "/help/editing/callouts/" },
      {
        label: "Code, math, and diagrams",
        link: "/help/editing/code-blocks/",
      },
      {
        label: "Advanced formatting",
        link: "/help/editing/advanced-formatting/",
      },
      {
        label: "Obsidian compatibility",
        link: "/help/editing/obsidian-compatibility/",
      },
    ],
  },
  {
    label: "Plugins",
    items: [
      {
        label: "First-party plugins",
        link: "/help/plugins/core-plugins-overview/",
      },
      { label: "Search", link: "/help/plugins/search/" },
      { label: "Graph view", link: "/help/plugins/graph-view/" },
      { label: "Canvas", link: "/help/plugins/canvas/" },
      { label: "Bases", link: "/help/plugins/bases/" },
      { label: "Tasks", link: "/help/plugins/tasks/" },
      {
        label: "Notebook",
        items: [
          { label: "Overview", link: "/help/plugins/notebook/" },
          {
            label: "Getting started",
            link: "/help/plugins/notebook/getting-started/",
          },
          {
            label: "Cells and syntax",
            link: "/help/plugins/notebook/cells-and-syntax/",
          },
          {
            label: "Execution and stale cells",
            link: "/help/plugins/notebook/execution-and-stale-cells/",
          },
          {
            label: "SQL and DuckDB",
            link: "/help/plugins/notebook/sql-and-duckdb/",
          },
          {
            label: "Inputs and outputs",
            link: "/help/plugins/notebook/inputs-and-outputs/",
          },
          {
            label: "Panels and packages",
            link: "/help/plugins/notebook/panels-and-packages/",
          },
          {
            label: "Limitations",
            link: "/help/plugins/notebook/limitations/",
          },
        ],
      },
      { label: "Slides", link: "/help/plugins/slides/" },
      { label: "PDF", link: "/help/plugins/pdf/" },
      {
        label: "Editing and files",
        collapsed: true,
        items: [
          { label: "Markdown", link: "/help/plugins/markdown/" },
          { label: "Source Editor", link: "/help/plugins/source-editor/" },
          { label: "File Explorer", link: "/help/plugins/file-explorer/" },
          { label: "CSV", link: "/help/plugins/csv/" },
          { label: "Word documents", link: "/help/plugins/docx/" },
          { label: "Transcripts", link: "/help/plugins/transcripts/" },
          { label: "Markdown Lint", link: "/help/plugins/markdown-lint/" },
          { label: "Spell Check", link: "/help/plugins/spell-check/" },
          { label: "Word Count", link: "/help/plugins/word-count/" },
        ],
      },
      {
        label: "Workspace tools",
        collapsed: true,
        items: [
          { label: "AI", link: "/help/plugins/ai/" },
          { label: "Bookmarks", link: "/help/plugins/bookmarks/" },
          { label: "History", link: "/help/plugins/history/" },
          { label: "Docs", link: "/help/plugins/docs/" },
          { label: "Terminal", link: "/help/plugins/terminal/" },
        ],
      },
      {
        label: "Previews and status",
        collapsed: true,
        items: [
          { label: "CV Roles preview", link: "/help/plugins/cv-roles/" },
          { label: "Nostr Sync preview", link: "/help/plugins/nostr-sync/" },
          {
            label: "Community package status",
            link: "/help/plugins/community-status/",
          },
          { label: "Legacy Sync status", link: "/help/plugins/legacy-sync/" },
        ],
      },
      { label: "Community plugins", link: "/help/plugins/community-plugins/" },
      { label: "Safe mode", link: "/help/plugins/safe-mode/" },
    ],
  },
  {
    label: "Desktop & web",
    items: [{ autogenerate: { directory: "help/desktop-and-web" } }],
  },
  {
    label: "Import",
    items: [{ autogenerate: { directory: "help/import" } }],
  },
  {
    label: "Help & support",
    items: [{ autogenerate: { directory: "help/help-and-support" } }],
  },
];

const developersSidebar = [
  { label: "Home", link: "/developers/" },
  {
    label: "Introduction",
    items: [{ autogenerate: { directory: "developers/introduction" } }],
  },
  {
    label: "Getting started",
    items: [{ autogenerate: { directory: "developers/getting-started" } }],
  },
  {
    label: "Language & editor extensions",
    items: [{ autogenerate: { directory: "developers/language-extensions" } }],
  },
  {
    label: "API",
    items: [{ autogenerate: { directory: "developers/api" } }],
  },
  {
    label: "TypeScript API",
    items: [
      { label: "Overview", link: "/developers/api-reference/" },
      ...[
        ["Classes", "class-docs"],
        ["Functions", "functions"],
        ["Interfaces", "interfaces"],
        ["Type aliases", "type-aliases"],
      ].map(([label, directory]) => ({
        label,
        items: [
          {
            autogenerate: {
              directory: `developers/api-reference/${directory}`,
            },
          },
        ],
      })),
    ],
  },
  {
    label: "UI & CSS",
    items: [{ autogenerate: { directory: "developers/ui-and-css" } }],
  },
  {
    label: "Publishing",
    items: [{ autogenerate: { directory: "developers/publishing" } }],
  },
];

export default defineConfig({
  site: "https://lapis.md",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Lapis Notes",
      description: "User help and developer documentation for Lapis Notes.",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "",
      },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/lapis-starlight.css"],
      expressiveCode: {
        themes: ["github-light", "github-dark-dimmed"],
        styleOverrides: {
          borderRadius: "8px",
          frames: {
            editorBackground: "var(--lapis-surface-1)",
            terminalBackground: "var(--lapis-surface-1)",
            editorActiveTabBackground: "var(--lapis-surface-1)",
            frameBoxShadowCssValue: "none",
          },
        },
      },
      components: {
        Head: "./src/components/StarlightHead.astro",
        Header: "./src/components/StarlightHeader.astro",
        Footer: "./src/components/StarlightFooter.astro",
        PageFrame: "./src/components/PageFrame.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro",
        ThemeProvider: "./src/components/LapisThemeProvider.astro",
        ThemeSelect: "./src/components/LapisStarlightThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lapismd/lapis-desktop",
        },
      ],
      plugins: [
        starlightSiteGraph({
          overridePageSidebar: false,
          backlinks: false,
          graphConfig: {
            visibilityRules: docsGraphVisibilityPaths,
            nodeInclusionRules: docsGraphLinkPaths,
            actions: ["fullscreen", "depth", "reset-zoom"],
            depth: 1,
            followLink: "same",
            scale: 0.95,
            renderArrows: false,
            renderExternal: false,
            renderLabels: true,
            labelFontSize: 10,
            labelHoverScale: 1.16,
            repelForce: 180,
            colliderPadding: 18,
          },
          sitemapConfig: {
            pageInclusionRules: docsGraphExcludedContentFiles,
            linkInclusionRules: docsGraphLinkPaths,
            tagRules: {
              help: ["help", "help/**"],
              developers: ["developers", "developers/**"],
            },
          },
        }),
        starlightSidebarTopics(
          [
            {
              id: "help",
              label: "Help",
              link: "/help/",
              icon: "open-book",
              items: helpSidebar,
            },
            {
              id: "developers",
              label: "Developers",
              link: "/developers/",
              icon: "rocket",
              items: developersSidebar,
            },
          ],
          {
            exclude: ["/"],
          },
        ),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
