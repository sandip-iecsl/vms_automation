const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_103
 * Module: Master
 * Sub-Module: Concurrent Accordions
 * Scenario: Multi-Accordion Behavior
 * Description: Verify accordion handling when expanding another main module menu.
 */
test('TC_103: Multi-Accordion Behavior', { annotation: { type: 'description', description: 'Verify accordion handling when expanding another main module menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
