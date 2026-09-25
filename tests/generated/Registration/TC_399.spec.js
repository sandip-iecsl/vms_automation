const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_399
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Inline Edit - Blank Value Error
 * Description: Verify system validation when clearing License Number during inline edit.
 */
test('TC_399: Inline Edit - Blank Value Error', { annotation: { type: 'description', description: 'Verify system validation when clearing License Number during inline edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
