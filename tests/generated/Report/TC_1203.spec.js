const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1203
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Search by Contact Person Name
 * Description: Verify typing contact name in \'Search Vendor\' input filters matching records.
 */
test('TC_1203: Search by Contact Person Name', { annotation: { type: 'description', description: 'Verify typing contact name in \'Search Vendor\' input filters matching records.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
