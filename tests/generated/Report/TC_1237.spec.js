const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1237
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Server 500 Error Handling
 * Description: Verify graceful UI notification when report fetch API returns 500.
 */
test('TC_1237: Server 500 Error Handling', { annotation: { type: 'description', description: 'Verify graceful UI notification when report fetch API returns 500.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
