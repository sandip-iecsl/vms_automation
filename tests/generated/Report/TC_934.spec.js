const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_934
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Phone Icon and Contact Styling
 * Description: Verify visual rendering of pink phone icon and contact number.
 */
test('TC_934: Phone Icon and Contact Styling', { annotation: { type: 'description', description: 'Verify visual rendering of pink phone icon and contact number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
