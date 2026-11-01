import { defineConfig } from "@playwright/test";
const deployedUrl = process.env.LAPIS_WEBSITE_BASE_URL;
export default defineConfig({
  testDir: "tests",
  workers: 1,
  retries: 0,
  timeout: 45000,
  use: {
    baseURL: deployedUrl || "http://127.0.0.1:4329",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: deployedUrl
    ? undefined
    : {
        command: "pnpm preview --port 4329",
        url: "http://127.0.0.1:4329",
        reuseExistingServer: false,
      },
});
