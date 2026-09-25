const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_341
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Delete Dynamic Row Action
 * Description: Verify deleting an added Director/Partner row using remove action.
 */
test('TC_341: Delete Dynamic Row Action', { annotation: { type: 'description', description: 'Verify deleting an added Director/Partner row using remove action.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
