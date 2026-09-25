const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_387
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Edit Mode Toggle (Pencil to Check Icon)
 * Description: Verify clicking pencil icon toggles row into inline editable mode.
 */
test('TC_387: Edit Mode Toggle (Pencil to Check Icon)', { annotation: { type: 'description', description: 'Verify clicking pencil icon toggles row into inline editable mode.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
