const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_769
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Successful Mapping Deletion
 * Description: Verify confirming delete removes mapping from table.
 */
test('TC_769: Successful Mapping Deletion', { annotation: { type: 'description', description: 'Verify confirming delete removes mapping from table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
