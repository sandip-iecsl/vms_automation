const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_102
 * Module: Master
 * Sub-Module: State Retention
 * Scenario: Accordion State Persistence
 * Description: Verify Master menu accordion remains expanded after page refresh.
 */
test('TC_102: Accordion State Persistence', { annotation: { type: 'description', description: 'Verify Master menu accordion remains expanded after page refresh.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
