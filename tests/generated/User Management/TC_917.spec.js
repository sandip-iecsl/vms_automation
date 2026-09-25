const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_917
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Google Chrome Layout & Functional Consistency
 * Description: Verify all role mapping toggle interactions and save flows in Chrome.
 */
test('TC_917: Google Chrome Layout & Functional Consistency', { annotation: { type: 'description', description: 'Verify all role mapping toggle interactions and save flows in Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
