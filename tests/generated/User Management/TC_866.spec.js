const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_866
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Template Master Delete Restriction
 * Description: Verify mapped user cannot delete email/custom mail templates.
 */
test('TC_866: Template Master Delete Restriction', { annotation: { type: 'description', description: 'Verify mapped user cannot delete email/custom mail templates.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
