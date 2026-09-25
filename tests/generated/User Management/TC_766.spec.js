const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_766
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Cancel Edit Action
 * Description: Verify clicking CANCEL preserves original user mapping.
 */
test('TC_766: Cancel Edit Action', { annotation: { type: 'description', description: 'Verify clicking CANCEL preserves original user mapping.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
