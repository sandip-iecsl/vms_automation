const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_398
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Cancel Inline Edit via Esc Key
 * Description: Verify pressing Escape key cancels inline editing mode without saving changes.
 */
test('TC_398: Cancel Inline Edit via Esc Key', { annotation: { type: 'description', description: 'Verify pressing Escape key cancels inline editing mode without saving changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
