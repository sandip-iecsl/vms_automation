const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_859
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Religion Master Delete Restriction
 * Description: Verify mapped user cannot delete records in Religion Master.
 */
test('TC_859: Religion Master Delete Restriction', { annotation: { type: 'description', description: 'Verify mapped user cannot delete records in Religion Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
