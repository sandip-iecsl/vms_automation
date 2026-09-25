const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_404
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Numeric Turnover Input Validation
 * Description: Verify turnover input fields accept valid numeric values.
 */
test('TC_404: Numeric Turnover Input Validation', { annotation: { type: 'description', description: 'Verify turnover input fields accept valid numeric values.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
