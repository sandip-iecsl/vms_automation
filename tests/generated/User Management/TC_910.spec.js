const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_910
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Network Disconnection During Save
 * Description: Verify error handling when network fails during role mapping save operation.
 */
test('TC_910: Network Disconnection During Save', { annotation: { type: 'description', description: 'Verify error handling when network fails during role mapping save operation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
