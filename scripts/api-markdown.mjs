import { formatSourceLinks } from "./api-source-links.mjs";

export function referencePath(filename) {
  return filename.replace(/^classes\//, "class-docs/");
}
export function formatApiMarkdown(
  markdown,
  filename = "index.md",
  sourceReview,
) {
  if (sourceReview) markdown = formatSourceLinks(markdown, sourceReview);
  const normalized = markdown.replaceAll("classes/", "class-docs/");
  const heading = normalized.match(/^#\s+(.+)$/m);
  if (!heading) throw new Error("API page requires a title");
  const title = heading[1]
    .replace(
      /^(Abstract Class|Class|Interface|Type Alias|Function|Variable):\s+/,
      "",
    )
    .replace(/^Lapis Notes TypeScript API$/, "TypeScript API")
    .replace(/\\([<>*_`])/g, "$1");
  const current = new URL(
    referencePath(filename),
    "https://reference.invalid/",
  );
  const body = normalized
    .slice(heading.index + heading[0].length)
    .trim()
    .replace(
      /\]\(([^\s)]+\.md)(#[^)]*)?\)/g,
      (_match, destination, anchor = "") => {
        const resolved = new URL(destination, current);
        if (resolved.origin !== current.origin)
          return `](${destination}${anchor})`;
        const slug = resolved.pathname
          .replace(/\.md$/, "")
          .replace(/\/index$/, "")
          .toLowerCase();
        return `](/developers/api-reference${slug === "/index" ? "" : slug}/${anchor})`;
      },
    );
  const notice = sourceReview
    ? `API reference uses a reviewed source snapshot. Source links open the [published source](https://github.com/lapismd/lapis-notes/tree/${sourceReview.publicRevision}); unverified line locations are omitted.\n\n`
    : "";
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(`Source-generated public API reference for ${title}.`)}\n---\n\n${notice}${body}\n`;
}
