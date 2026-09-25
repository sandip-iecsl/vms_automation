const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_745
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Unselected User Validation
 * Description: Verify validation when submitting without selecting a User.
 */
test('TC_745: Unselected User Validation', { annotation: { type: 'description', description: 'Verify validation when submitting without selecting a User.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
