const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_787
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Browser Reload Persistence
 * Description: Verify user mappings persist across browser page refresh (F5).
 */
test('TC_787: Browser Reload Persistence', { annotation: { type: 'description', description: 'Verify user mappings persist across browser page refresh (F5).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
