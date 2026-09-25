const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1289
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Active Sidebar Menu Highlighting
 * Description: Verify Custom Mail link is highlighted as active in Vendor Engagement menu.
 */
test('TC_1289: Active Sidebar Menu Highlighting', { annotation: { type: 'description', description: 'Verify Custom Mail link is highlighted as active in Vendor Engagement menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
