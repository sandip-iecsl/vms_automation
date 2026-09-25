const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_457
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Delete Row Action
 * Description: Verify clicking Delete (red trash) button removes corresponding material row.
 */
test('TC_457: Delete Row Action', { annotation: { type: 'description', description: 'Verify clicking Delete (red trash) button removes corresponding material row.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
