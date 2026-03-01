import { defineConfig } from '@playwright/test'

const baseUrl
  = process.env.APP_URL ?? (process.env.CI ? 'http://localhost:3001' : 'http://localhost:3000')

export default defineConfig({
  testDir: './tests/visual',
  use: {
    baseURL: baseUrl,
    headless: true,
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
})
