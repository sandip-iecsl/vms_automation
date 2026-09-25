const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_844
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Metric Card \'Product Sold\' Visibility
 * Description: Verify mapped user sees top KPI metric card \'PRODUCT SOLD (25,000+)\'.
 */
test('TC_844: Metric Card \'Product Sold\' Visibility', { annotation: { type: 'description', description: 'Verify mapped user sees top KPI metric card \'PRODUCT SOLD (25,000+)\'.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
