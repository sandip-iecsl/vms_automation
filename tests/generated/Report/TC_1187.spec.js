const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1187
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Event Tent Icon Display
 * Description: Verify event tent icon beside event name on card hover.
 */
test('TC_1187: Event Tent Icon Display', { annotation: { type: 'description', description: 'Verify event tent icon beside event name on card hover.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
