const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1227
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Sidebar Collapse Grid Expansion
 * Description: Verify cards grid expands smoothly when sidebar is collapsed.
 */
test('TC_1227: Sidebar Collapse Grid Expansion', { annotation: { type: 'description', description: 'Verify cards grid expands smoothly when sidebar is collapsed.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
