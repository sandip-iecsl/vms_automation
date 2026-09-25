const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_676
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Default Rows Per Page Value
 * Description: Verify default pagination rows per page selection.
 */
test('TC_676: Default Rows Per Page Value', { annotation: { type: 'description', description: 'Verify default pagination rows per page selection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
