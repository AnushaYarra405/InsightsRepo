import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,          // show browser UI while debugging
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  // 👇 slowMo belongs here, not inside "use"
  workers: 1,                 // optional: run tests one by one for clarity
  timeout: 50000,             // optional: increase timeout if needed
 projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'webkit', // Safari
      use: { browserName: 'webkit' },
    },
  ],
});
