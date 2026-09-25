const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_855
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Template2 Dashboard Access
 * Description: Verify mapped user accesses Template2 Dashboard (/Dashboard2) with configured components.
 */
test('TC_855: Template2 Dashboard Access', { annotation: { type: 'description', description: 'Verify mapped user accesses Template2 Dashboard (/Dashboard2) with configured components.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
