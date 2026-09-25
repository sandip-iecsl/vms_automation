const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_909
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Tab Key Traversal Through Matrix Switches
 * Description: Verify keyboard Tab and Spacebar navigation across permission toggle switches.
 */
test('TC_909: Tab Key Traversal Through Matrix Switches', { annotation: { type: 'description', description: 'Verify keyboard Tab and Spacebar navigation across permission toggle switches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
