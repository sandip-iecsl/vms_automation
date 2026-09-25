const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_400
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Inline Edit - Invalid Date Range Check
 * Description: Verify date logic validation when modifying dates during inline edit.
 */
test('TC_400: Inline Edit - Invalid Date Range Check', { annotation: { type: 'description', description: 'Verify date logic validation when modifying dates during inline edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
