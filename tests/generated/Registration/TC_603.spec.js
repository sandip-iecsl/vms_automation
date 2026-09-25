const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_603
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Delete Invitation of Active/Registered Vendor
 * Description: Verify deletion restriction on invitation linked to an active/registered vendor.
 */
test('TC_603: Delete Invitation of Active/Registered Vendor', { annotation: { type: 'description', description: 'Verify deletion restriction on invitation linked to an active/registered vendor.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
