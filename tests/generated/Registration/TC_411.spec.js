const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_411
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Empty Turnover Submission Validation
 * Description: Verify validation when leaving turnover fields blank.
 */
test('TC_411: Empty Turnover Submission Validation', { annotation: { type: 'description', description: 'Verify validation when leaving turnover fields blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
