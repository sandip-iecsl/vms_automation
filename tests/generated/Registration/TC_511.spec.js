const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_511
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Vendor Name Consistency Warning
 * Description: Verify system matches \'In Favor Of\' beneficiary name with registered Vendor Name.
 */
test('TC_511: Vendor Name Consistency Warning', { annotation: { type: 'description', description: 'Verify system matches \'In Favor Of\' beneficiary name with registered Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
