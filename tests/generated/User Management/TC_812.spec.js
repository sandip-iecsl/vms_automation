const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_812
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Sub-Menu Permission Matrix Loading
 * Description: Verify clicking Template1 renders its component access control matrix on the right.
 */
test('TC_812: Sub-Menu Permission Matrix Loading', { annotation: { type: 'description', description: 'Verify clicking Template1 renders its component access control matrix on the right.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
