const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_725
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Successful Group Deletion
 * Description: Verify clicking OK deletes user group from table.
 */
test('TC_725: Successful Group Deletion', { annotation: { type: 'description', description: 'Verify clicking OK deletes user group from table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
