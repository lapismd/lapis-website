import assert from "node:assert/strict";

export const sourcePattern =
  /\[([^\]\n]+)\]\(https:\/\/github\.com\/lapismd\/lapis-notes\/blob\/([a-f0-9]{40})\/([^\s)#]+)#L(\d+)\)/g;

// Only a unique, unchanged three-line context justifies a public line anchor.
// Changed or ambiguous declarations still link to the verified public file.
export function publicLine(snapshot, published, line) {
  const before = snapshot.split("\n");
  const after = published.split("\n");
  assert.ok(Number.isSafeInteger(line) && line > 0 && line <= before.length);
  if (snapshot === published) return line;
  const start = Math.max(0, line - 2);
  const context = before.slice(start, line + 1);
  const matches = [];
  for (let i = 0; i <= after.length - context.length; i++)
    if (context.every((value, offset) => value === after[i + offset]))
      matches.push(i + line - start);
  return matches.length === 1 ? matches[0] : null;
}

export function formatSourceLinks(markdown, review) {
  assert.match(review.publicRevision, /^[a-f0-9]{40}$/);
  return markdown.replace(
    sourcePattern,
    (_match, label, revision, path, line) => {
      assert.equal(revision, review.snapshotRevision);
      const file = review.files.find((file) => file.path === path);
      assert.ok(
        file && Object.hasOwn(file.lines, line),
        `Unreviewed API source: ${path}:${line}`,
      );
      const mapped = file.lines[line];
      assert.ok(
        mapped === null || (Number.isSafeInteger(mapped) && mapped > 0),
      );
      const title = label.replace(/:\d+$/, mapped === null ? "" : `:${mapped}`);
      return `[${title}](https://github.com/lapismd/lapis-notes/blob/${review.publicRevision}/${path}${mapped === null ? "" : `#L${mapped}`})`;
    },
  );
}
