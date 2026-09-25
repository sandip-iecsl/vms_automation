const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1071
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Profile Menu Logout Action
 * Description: Verify clicking Logout from top right user menu invalidates session.
 */
test('TC_1071: Profile Menu Logout Action', { annotation: { type: 'description', description: 'Verify clicking Logout from top right user menu invalidates session.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await page.getByText('SANDIPAN TEST').first().click();
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 });
});
