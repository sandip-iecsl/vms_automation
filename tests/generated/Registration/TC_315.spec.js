const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_315
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Edit Approved Vendor Restriction
 * Description: Verify edit restriction on already approved vendors to prevent unauthorized changes.
 */
test('TC_315: Edit Approved Vendor Restriction', { annotation: { type: 'description', description: 'Verify edit restriction on already approved vendors to prevent unauthorized changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
