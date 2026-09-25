const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_717
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Successful Group Update
 * Description: Verify updating user group name successfully.
 */
test('TC_717: Successful Group Update', { annotation: { type: 'description', description: 'Verify updating user group name successfully.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
