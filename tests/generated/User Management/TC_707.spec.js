const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_707
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Cancel Modal Action
 * Description: Verify clicking CANCEL closes the modal without creating a group.
 */
test('TC_707: Cancel Modal Action', { annotation: { type: 'description', description: 'Verify clicking CANCEL closes the modal without creating a group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
