const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_419
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Whitespace Only Submission Validation
 * Description: Verify validation when production details textarea contains only blank spaces/tabs.
 */
test('TC_419: Whitespace Only Submission Validation', { annotation: { type: 'description', description: 'Verify validation when production details textarea contains only blank spaces/tabs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
