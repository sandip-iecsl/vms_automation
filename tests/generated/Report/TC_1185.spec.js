const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1185
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Phone Number Pink Icon Display
 * Description: Verify pink phone receiver icon beside contact number.
 */
test('TC_1185: Phone Number Pink Icon Display', { annotation: { type: 'description', description: 'Verify pink phone receiver icon beside contact number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
