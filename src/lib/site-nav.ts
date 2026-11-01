export function isSiteNavActive(href: string, pathname: string): boolean {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;

  if (href === "/help/") {
    return path.startsWith("/help/");
  }

  if (href === "/developers/") {
    return path.startsWith("/developers/");
  }

  return path === href || path.startsWith(href);
}
