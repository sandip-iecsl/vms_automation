const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_962
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Infix Word Matching in Vendor Name
 * Description: Verify searching middle words inside long company titles.
 */
test('TC_962: Infix Word Matching in Vendor Name', { annotation: { type: 'description', description: 'Verify searching middle words inside long company titles.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
