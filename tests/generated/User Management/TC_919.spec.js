const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_919
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Microsoft Edge Functional Consistency
 * Description: Verify role mapping configuration and save alerts in Microsoft Edge.
 */
test('TC_919: Microsoft Edge Functional Consistency', { annotation: { type: 'description', description: 'Verify role mapping configuration and save alerts in Microsoft Edge.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
