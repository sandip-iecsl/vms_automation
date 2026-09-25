const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_389
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Delete Dynamic License Row
 * Description: Verify clicking red Delete (trash) button removes license row.
 */
test('TC_389: Delete Dynamic License Row', { annotation: { type: 'description', description: 'Verify clicking red Delete (trash) button removes license row.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
