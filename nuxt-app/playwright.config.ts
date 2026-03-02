import { defineConfig } from '@playwright/test'

const baseUrl
  = process.env.APP_URL ?? (process.env.CI ? 'http://localhost:3001' : 'http://localhost:3000')

export default defineConfig({
  use: {
    baseURL: baseUrl,
    headless: true,
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/playwright-report', open: 'never' }],
    ['junit', { outputFile: 'reports/playwright-report.xml' }],
  ],
  projects: [
    {
      name: 'visual',
      testDir: './tests/visual',
    },
    {
      name: 'e2e',
      testDir: './tests/e2e',
      timeout: 30000,
      retries: process.env.CI ? 2 : 0,
      use: {
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
      },
    },
  ],
})
