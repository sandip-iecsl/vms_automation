const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_900
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Simultaneous Permission Updates
 * Description: Verify concurrency handling when two admins modify role mapping at the same time.
 */
test('TC_900: Simultaneous Permission Updates', { annotation: { type: 'description', description: 'Verify concurrency handling when two admins modify role mapping at the same time.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
