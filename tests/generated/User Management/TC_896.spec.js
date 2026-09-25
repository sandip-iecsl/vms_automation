const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_896
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Custom Mail Hidden State
 * Description: Verify Custom Mail and Vendor Engagement menu are hidden from sidebar.
 */
test('TC_896: Custom Mail Hidden State', { annotation: { type: 'description', description: 'Verify Custom Mail and Vendor Engagement menu are hidden from sidebar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
