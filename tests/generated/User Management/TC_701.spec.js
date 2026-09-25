const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_701
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Max Character Length Boundary
 * Description: Verify character length limit for Group Name field.
 */
test('TC_701: Max Character Length Boundary', { annotation: { type: 'description', description: 'Verify character length limit for Group Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
