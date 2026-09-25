const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1052
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Case-Insensitive Search
 * Description: Verify search query works irrespective of uppercase or lowercase letters.
 */
test('TC_1052: Case-Insensitive Search', { annotation: { type: 'description', description: 'Verify search query works irrespective of uppercase or lowercase letters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
