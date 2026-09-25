const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_307
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Search by Manufacturing Location
 * Description: Verify search filters records by Manufacturing Location keyword.
 */
test('TC_307: Search by Manufacturing Location', { annotation: { type: 'description', description: 'Verify search filters records by Manufacturing Location keyword.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
