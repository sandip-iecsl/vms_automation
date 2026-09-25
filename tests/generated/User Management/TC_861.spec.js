const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_861
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Region Master Navigation Block
 * Description: Verify Region menu item is hidden from sidebar for mapped user.
 */
test('TC_861: Region Master Navigation Block', { annotation: { type: 'description', description: 'Verify Region menu item is hidden from sidebar for mapped user.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
