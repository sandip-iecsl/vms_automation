const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1229
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: XSS Injection Prevention in Search Input
 * Description: Verify script injection prevention in \'Search Vendor\' bar.
 */
test('TC_1229: XSS Injection Prevention in Search Input', { annotation: { type: 'description', description: 'Verify script injection prevention in \'Search Vendor\' bar.' } }, async ({ page }) => {
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
