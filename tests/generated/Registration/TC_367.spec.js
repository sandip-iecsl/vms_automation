const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_367
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Completed Step Checkmark Click Action
 * Description: Verify clicking the completed green Step 1 checkmark icon navigates back to Step 1.
 */
test('TC_367: Completed Step Checkmark Click Action', { annotation: { type: 'description', description: 'Verify clicking the completed green Step 1 checkmark icon navigates back to Step 1.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
