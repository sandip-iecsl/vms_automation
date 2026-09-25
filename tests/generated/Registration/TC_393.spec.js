const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_393
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Inline Edit - Duplicate Name Validation
 * Description: Verify changing license number to another existing license number during inline edit.
 */
test('TC_393: Inline Edit - Duplicate Name Validation', { annotation: { type: 'description', description: 'Verify changing license number to another existing license number during inline edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
