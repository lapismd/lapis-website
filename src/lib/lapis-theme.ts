export type ThemePreference = "auto" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export const storageKey = "starlight-theme";

export function isDocsPath(pathname: string): boolean {
  return pathname.startsWith("/help/") || pathname.startsWith("/developers/");
}

export function getPageDefaultTheme(
  pathname = typeof document !== "undefined" ? document.location.pathname : "/",
): ResolvedTheme {
  return isDocsPath(pathname) ? "light" : "dark";
}

export function parseThemePreference(theme: unknown): ThemePreference {
  if (theme === "light" || theme === "dark") return theme;
  return "auto";
}

export function loadThemePreference(): ThemePreference {
  return parseThemePreference(
    typeof localStorage !== "undefined" && localStorage.getItem(storageKey),
  );
}

export function storeThemePreference(theme: ThemePreference): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(
      storageKey,
      theme === "light" || theme === "dark" ? theme : "",
    );
  }
}

export function resolveTheme(
  preference: ThemePreference,
  pathname?: string,
): ResolvedTheme {
  if (preference === "light" || preference === "dark") return preference;
  return getPageDefaultTheme(pathname);
}

export function applyTheme(
  preference: ThemePreference,
  pathname?: string,
): ResolvedTheme {
  const resolved = resolveTheme(preference, pathname);
  document.documentElement.dataset.theme = resolved;
  return resolved;
}

export function initThemeSelect(): void {
  function onThemeChange(theme: ThemePreference): void {
    StarlightThemeProvider.updatePickers(theme);
    applyTheme(theme);
    storeThemePreference(theme);
  }

  if (!customElements.get("starlight-theme-select")) {
    class StarlightThemeSelect extends HTMLElement {
      constructor() {
        super();
        onThemeChange(loadThemePreference());
        this.querySelector("select")?.addEventListener("change", (event) => {
          if (event.currentTarget instanceof HTMLSelectElement) {
            onThemeChange(parseThemePreference(event.currentTarget.value));
          }
        });
      }
    }
    customElements.define("starlight-theme-select", StarlightThemeSelect);
  } else {
    onThemeChange(loadThemePreference());
  }
}
