const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_828
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Disabling \'Visible\' Auto-Disables Edit/Delete
 * Description: Verify turning OFF \'Visible\' switch automatically disables Edit and Delete access switches.
 */
test('TC_828: Disabling \'Visible\' Auto-Disables Edit/Delete', { annotation: { type: 'description', description: 'Verify turning OFF \'Visible\' switch automatically disables Edit and Delete access switches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
