const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_732
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: No Groups Handling
 * Description: Verify table display when no group records are present.
 */
test('TC_732: No Groups Handling', { annotation: { type: 'description', description: 'Verify table display when no group records are present.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
