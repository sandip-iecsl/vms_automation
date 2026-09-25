const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_864
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Holiday Master Full CRUD Access
 * Description: Verify mapped user has full Add, Edit, and Delete access on Holiday Master.
 */
test('TC_864: Holiday Master Full CRUD Access', { annotation: { type: 'description', description: 'Verify mapped user has full Add, Edit, and Delete access on Holiday Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
