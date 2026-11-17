import { test, expect } from "@playwright/test";

test("API source links use the reviewed public commit", async ({ page }) => {
  await page.goto("/developers/api-reference/class-docs/notificationmanager/");
  const links = page.locator(
    '.sl-markdown-content a[href*="github.com/lapismd/lapis-notes/blob/"]',
  );
  expect(await links.count()).toBeGreaterThan(0);
  for (const href of await links.evaluateAll((nodes) =>
    nodes.map((node) => (node as HTMLAnchorElement).href),
  ))
    expect(href).toMatch(
      /\/blob\/e157bf8cc5f9cdfa1b82bdfe728bc5cd06d4ebb7\/packages\/api\/src\//,
    );
});
import AxeBuilder from "@axe-core/playwright";

test("selected sidebar text remains readable in both themes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 805, height: 988 });
  await page.goto("/help/");
  for (const theme of ["light", "dark"]) {
    const themeSelect = page.getByLabel("Select theme").first();
    await themeSelect.selectOption(theme);
    const selected = page
      .locator('.sidebar-content a[aria-current="page"]')
      .first();
    await expect(selected).toHaveText("Home");
    await expect(selected).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect(selected).toHaveCSS(
      "background-color",
      theme === "light" ? "rgb(109, 71, 224)" : "rgb(122, 76, 222)",
    );
  }
});

for (const width of [375, 768, 1440]) {
  test(`navigation, themes and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Sharpen your notes." }),
    ).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await page.getByLabel("Select theme").selectOption("light");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.getByRole("link", { name: "Read help", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(page.locator("h1")).toHaveText("Create a vault");
    await page.keyboard.press("Tab");
    await expect(page.locator(":focus")).not.toHaveCount(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width < 800) {
      const menu = page.getByRole("button", { name: "Menu" });
      await menu.press("Enter");
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await menu.press("Enter");
      await expect(menu).toHaveAttribute("aria-expanded", "false");
    }
  });
}
test("default docs theme, search and graph interactions", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto("/help/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  const graph = page.locator(".docs-graph-panel graph-component");
  await expect(graph).toBeVisible();
  await expect(graph.locator("canvas,svg").first()).toBeVisible();
  const fullscreen = graph.getByRole("button", {
    name: /fullscreen|full screen/i,
  });
  await fullscreen.click();
  await expect(graph.locator(".slsg-is-fullscreen")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(graph.locator(".slsg-is-fullscreen")).toHaveCount(0);
  await page
    .getByRole("button", { name: /Search/ })
    .first()
    .click();
  await page
    .getByRole("textbox", { name: "Search", exact: true })
    .fill("vault");
  await expect(page.locator(".pagefind-ui__result").first()).toBeVisible();
  await page.keyboard.press("Escape");
  await page.goto("/developers/api-reference/");
  await expect(page.locator(".docs-graph-panel")).toBeHidden();
});
for (const route of [
  "/",
  "/help/",
  "/help/getting-started/download-and-install/",
  "/developers/",
  "/developers/api-reference/class-docs/app/",
  "/help/plugins/core-plugins-overview/",
  "/help/plugins/bases/",
  "/help/plugins/docs/",
  "/privacy/",
  "/license/",
  "/terms/",
]) {
  test(`accessible page and resolved images: ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.locator("img").evaluateAll((images) =>
      Promise.all(
        images.map((image) => {
          (image as HTMLImageElement).loading = "eager";
          return (image as HTMLImageElement).decode();
        }),
      ),
    );
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    expect(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every((image) => (image as HTMLImageElement).naturalWidth > 0),
        ),
    ).toBe(true);
  });
}

for (const theme of ["light", "dark"]) {
  test(`reviewed display regressions in ${theme} theme`, async ({ page }) => {
    await page.goto("/developers/getting-started/first-plugin/");
    await page.getByLabel("Select theme").first().selectOption(theme);
    const code = page
      .locator("p > code")
      .filter({ hasText: "Plugin.addCommand()" })
      .first();
    await expect(code).toBeVisible();
    const colours = await code.evaluate((element) => ({
      foreground: getComputedStyle(element).color,
      background: getComputedStyle(element).backgroundColor,
    }));
    expect(colours.foreground).not.toBe(colours.background);
    const result = await new AxeBuilder({ page })
      .include(".sl-markdown-content")
      .analyze();
    expect(result.violations).toEqual([]);
    await page.goto("/developers/api-reference/class-docs/editorsuggest/");
    await expect(page.locator("h1")).toHaveText("EditorSuggest<T>");
    await expect(
      page.locator('.sidebar-content a[aria-current="page"]'),
    ).toHaveText("EditorSuggest<T>");
    for (const route of ["/help/", "/developers/"]) {
      await page.goto(route);
      const header = page.locator("header.header");
      await expect(header).toHaveCSS("border-bottom-width", "1px");
      await expect(header).toHaveCSS("border-bottom-style", "solid");
      expect(
        await header.evaluate((el) => getComputedStyle(el).borderBottomColor),
      ).not.toBe("rgba(0, 0, 0, 0)");
    }
    await page.screenshot({ path: `.local/review/developers-${theme}.png` });
    await page.goto("/");
    const hero = page.locator(
      `.landing-hero img[data-product-theme="${theme}"]`,
    );
    await expect(hero).toBeVisible();
    await hero.evaluate((image) => (image as HTMLImageElement).decode());
    expect(
      await hero.evaluate((image) => (image as HTMLImageElement).naturalWidth),
    ).toBe(2400);
    await page.screenshot({ path: `.local/review/landing-${theme}.png` });
  });
}

for (const width of [375, 768, 975]) {
  test(`mobile contents label stays on one line at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 988 });
    await page.goto("/help/help-and-support/attributions/");
    const toggle = page.locator("mobile-starlight-toc summary .toggle");
    await expect(toggle).toBeVisible();
    const metrics = await toggle.evaluate((element) => {
      const text = [...element.childNodes].find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
      );
      const range = document.createRange();
      range.selectNodeContents(text!);
      return {
        lines: range.getClientRects().length,
        after: getComputedStyle(element, "::after").content,
      };
    });
    expect(metrics.lines).toBe(1);
    expect(metrics.after).toBe("none");
    await toggle.click();
    await expect(page.locator("#starlight__mobile-toc")).toHaveAttribute(
      "open",
      "",
    );
    await page.keyboard.press("Escape");
    await expect(page.locator("#starlight__mobile-toc")).not.toHaveAttribute(
      "open",
      "",
    );
  });
}

test("documentation links underline only on hover", async ({ page }) => {
  await page.goto("/help/help-and-support/attributions/");
  const link = page.getByRole("link", {
    name: "github.com/microsoft/vscode-docs",
    exact: true,
  });
  await expect(link).toHaveCSS("text-decoration-line", "none");
  await link.hover();
  await expect(link).toHaveCSS("text-decoration-line", "underline");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

for (const width of [375, 1440]) {
  test(`complete plugin inventory and new guides at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 988 });
    await page.goto("/help/plugins/core-plugins-overview/");
    async function selectTheme(theme: string) {
      const menu = page.getByRole("button", { name: "Menu", exact: true });
      if (width < 800) await menu.click();
      await page
        .getByRole("combobox", { name: "Select theme" })
        .selectOption(theme);
      if (width < 800) await menu.click();
    }
    const content = page.locator(".sl-markdown-content");
    await expect(content).toContainText("26 known plugins");
    const activeRows = content.locator("table tbody tr");
    await expect(activeRows).toHaveCount(18);
    await expect(
      activeRows.getByRole("link", { name: "AI", exact: true }),
    ).toHaveCount(0);
    await page.screenshot({
      path: testInfo.outputPath("plugin-overview.png"),
      fullPage: true,
    });
    await content.getByRole("link", { name: "AI", exact: true }).click();
    await expect(page.locator("h1")).toHaveText("AI");
    await expect(content).toContainText("retired");
    await expect(content).toContainText("Keep existing data in place");
    await expect(
      content.getByRole("link", { name: "Desktop AI", exact: true }),
    ).toHaveAttribute(
      "href",
      "https://github.com/lapismd/lapis-desktop/tree/main/src/components/ai",
    );
    await expect(
      content.locator('a[href*="lapis-plugins/tree/main/packages/ai"]'),
    ).toHaveCount(0);
    await expect(content.locator('img[src*="/media/ai-"]')).toHaveCount(0);
    await page.goto("/help/plugins/core-plugins-overview/");
    await content.getByRole("link", { name: "Docs", exact: true }).click();
    await expect(page.locator("h1")).toHaveText("Docs");
    await expect(page.locator(".sl-markdown-content")).toContainText(
      "Open docs",
    );
    for (const theme of ["light", "dark"]) {
      await selectTheme(theme);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await page.goto("/help/plugins/nostr-sync/");
    await expect(page.locator(".sl-markdown-content")).toContainText(
      "disabled by default",
    );
    await expect(
      page.locator('.sl-markdown-content a[href*="lapis-plugin-nostr-sync"]'),
    ).toHaveCount(0);
    await page.goto("/help/plugins/bases/");
    for (const theme of ["light", "dark"]) {
      await selectTheme(theme);
      const images = page.locator(
        `.product-media img[data-product-theme="${theme}"]`,
      );
      await expect(images).toHaveCount(2);
      for (const img of await images.all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            img.evaluate(
              (node: HTMLImageElement) =>
                node.complete &&
                node.naturalWidth === 2400 &&
                node.naturalHeight === 1600,
            ),
          )
          .toBe(true);
      }
    }
    await page.screenshot({
      path: testInfo.outputPath("bases-dark.png"),
      fullPage: true,
    });
  });
}
