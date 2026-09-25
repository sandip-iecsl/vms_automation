const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_598
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Edit Vendor Email ID Modification
 * Description: Verify updating the email address of an invited vendor.
 */
test('TC_598: Edit Vendor Email ID Modification', { annotation: { type: 'description', description: 'Verify updating the email address of an invited vendor.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
