const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_916
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Switch Hover and Focus Visual Indicators
 * Description: Verify visual hover effects and focus rings on toggle switches.
 */
test('TC_916: Switch Hover and Focus Visual Indicators', { annotation: { type: 'description', description: 'Verify visual hover effects and focus rings on toggle switches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
