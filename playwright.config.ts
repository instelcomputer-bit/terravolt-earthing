import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4175",
    channel: "chrome",
    headless: true,
    reducedMotion: "reduce",
  },
  webServer: {
    command: `${process.platform === "win32" ? "npm.cmd" : "npm"} run preview -- --host 127.0.0.1 --port 4175 --strictPort`,
    url: "http://127.0.0.1:4175",
    reuseExistingServer: false,
  },
});
