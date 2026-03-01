import { defineConfig } from '@playwright/test'

const baseUrl
  = process.env.APP_URL ?? (process.env.CI ? 'http://localhost:3001' : 'http://localhost:3000')

export default defineConfig({
  testDir: '.',
  timeout: 30000,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: baseUrl,
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  snapshotDir: './snapshots',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/playwright-report' }],
    ['junit', { outputFile: 'reports/playwright-report.xml' }],
  ],
})
