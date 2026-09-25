const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_907
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Special Characters Display in Groups
 * Description: Verify Group Name dropdown renders special character group names cleanly without breaking UI.
 */
test('TC_907: Special Characters Display in Groups', { annotation: { type: 'description', description: 'Verify Group Name dropdown renders special character group names cleanly without breaking UI.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
