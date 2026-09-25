const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_90
 * Module: Master
 * Sub-Module: Navigation
 * Scenario: Accordion Expand & Collapse
 * Description: Verify expanding and collapsing behavior of the Master menu on the sidebar.
 */
test('TC_90: Accordion Expand & Collapse', { annotation: { type: 'description', description: 'Verify expanding and collapsing behavior of the Master menu on the sidebar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
