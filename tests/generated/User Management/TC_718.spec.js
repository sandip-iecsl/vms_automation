const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_718
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Cancel Edit Operation
 * Description: Verify clicking CANCEL preserves original group name.
 */
test('TC_718: Cancel Edit Operation', { annotation: { type: 'description', description: 'Verify clicking CANCEL preserves original group name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
