import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'desktop-large', width: 1920, height: 1080 },
]

const pages = [
  { path: '/', name: 'home' },
]

for (const viewport of viewports) {
  test.describe(`Visual regression - ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } })

    for (const pageInfo of pages) {
      test(`${pageInfo.name} page should match snapshot`, async ({ page }) => {
        await page.goto(pageInfo.path)
        await page.waitForLoadState('networkidle')
        await expect(page).toHaveScreenshot(`${pageInfo.name}-${viewport.name}.png`, {
          fullPage: true,
          maxDiffPixelRatio: 0.05,
        })
      })
    }
  })
}
