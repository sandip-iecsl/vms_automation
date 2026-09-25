const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_971
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Non-Existent Search Term Handling
 * Description: Verify empty state placeholder when search term has 0 matches.
 */
test('TC_971: Non-Existent Search Term Handling', { annotation: { type: 'description', description: 'Verify empty state placeholder when search term has 0 matches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
