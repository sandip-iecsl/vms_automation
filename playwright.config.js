const { defineConfig, devices } = require('@playwright/test');
// const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['line'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['./reporters/JsonReporter.js', { outputFile: 'reports/custom-report.json' }],
    ['./reporters/MarkdownReporter.js']
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // timeout: 30000, // Maximum test run time (30 seconds)
  // expect: {
  //   timeout: 10000, // Auto-wait up to 10s for expect() assertions to pass
  // },
  // use: {
  //   actionTimeout: 10000,     // Wait up to 10s for clicks, fills, and selections
  //   navigationTimeout: 15000, // Wait up to 15s for page navigation
  //   // Uncomment the line below during local debugging to slow down execution visually:
  //   // launchOptions: { slowMo: 300 }, 
  // },
});
