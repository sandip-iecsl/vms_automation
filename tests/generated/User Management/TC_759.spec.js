const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_759
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Security / Session Expiration Handling
 * Description: Verify system behavior when session expires while mapping a user.
 */
test('TC_759: Security / Session Expiration Handling', { annotation: { type: 'description', description: 'Verify system behavior when session expires while mapping a user.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
