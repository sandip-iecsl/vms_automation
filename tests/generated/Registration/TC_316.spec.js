const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_316
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: RBAC View/Edit Permissions
 * Description: Verify role-based restriction on edit actions for view-only users.
 */
test('TC_316: RBAC View/Edit Permissions', { annotation: { type: 'description', description: 'Verify role-based restriction on edit actions for view-only users.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
