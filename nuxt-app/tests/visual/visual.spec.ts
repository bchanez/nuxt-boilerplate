import { createPage } from '@nuxt/test-utils'
import { expect, test } from '@nuxt/test-utils/playwright'

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'laptop', width: 1366, height: 768 },
  { name: 'desktop', width: 1920, height: 1080 },
]

const routes = ['/']

for (const route of routes) {
  for (const viewport of viewports) {
    test(`should match snapshot on ${route} (${viewport.name})`, async () => {
      const page = await createPage(route)
      await page.setViewportSize({ width: viewport.width, height: viewport.height })

      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
        `${viewport.name}${route.replace(/\W+/g, '_')}.png`,
      )
    })
  }
}
