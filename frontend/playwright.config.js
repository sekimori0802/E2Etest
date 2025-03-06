// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:9000',
    trace: 'on-first-retry',
    // スクリーンショットの設定
    screenshot: {
      mode: 'on',
      fullPage: true,
    },
    // ビデオを録画
    video: {
      mode: 'retain-on-failure',
      size: { width: 1280, height: 720 }
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npx http-server . -p 9000',
    url: 'http://localhost:9000',
    reuseExistingServer: !process.env.CI,
  },
});
