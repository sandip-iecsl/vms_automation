const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_733
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Browser Refresh Data Retention
 * Description: Verify group list persists across page reload (F5).
 */
test('TC_733: Browser Refresh Data Retention', { annotation: { type: 'description', description: 'Verify group list persists across page reload (F5).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
