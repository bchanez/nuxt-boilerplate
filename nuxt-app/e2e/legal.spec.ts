import { expect, test } from '@playwright/test'

test.describe('Mentions légales page', () => {
  test('should load and display the title', async ({ page }) => {
    await page.goto('/mentions-legales')
    await expect(page).toHaveTitle(/Mentions légales/)
  })

  test('should display editor section', async ({ page }) => {
    await page.goto('/mentions-legales')
    await expect(page.getByText('Éditeur du site')).toBeVisible()
  })
})

test.describe('CGU page', () => {
  test('should load and display the title', async ({ page }) => {
    await page.goto('/cgu')
    await expect(page).toHaveTitle(/CGU|Conditions/)
  })
})

test.describe('Politique de confidentialité page', () => {
  test('should load and display the title', async ({ page }) => {
    await page.goto('/politique-confidentialite')
    await expect(page).toHaveTitle(/Confidentialité|Politique/)
  })
})

test.describe('Politique cookies page', () => {
  test('should load and display the title', async ({ page }) => {
    await page.goto('/politique-cookies')
    await expect(page).toHaveTitle(/Cookies|Politique/)
  })
})

test.describe('Plan du site page', () => {
  test('should load and display the title', async ({ page }) => {
    await page.goto('/plan-du-site')
    await expect(page).toHaveTitle(/Plan du site/)
  })
})
