import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});
