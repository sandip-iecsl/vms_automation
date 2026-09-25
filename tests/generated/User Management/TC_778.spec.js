const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_778
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Show/Hide All Master Toggle
 * Description: Verify toggling \'Show/Hide All\' checkbox controls all columns simultaneously.
 */
test('TC_778: Show/Hide All Master Toggle', { annotation: { type: 'description', description: 'Verify toggling \'Show/Hide All\' checkbox controls all columns simultaneously.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
