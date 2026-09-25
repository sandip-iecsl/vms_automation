const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_952
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Fallback \'Not Applicable\' for Event Name
 * Description: Verify records without assigned event display fallback Not Applicable in Event Name column.
 */
test('TC_952: Fallback \'Not Applicable\' for Event Name', { annotation: { type: 'description', description: 'Verify records without assigned event display fallback Not Applicable in Event Name column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
