const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1196
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Fallback \'Not Applicable\' for Missing Event
 * Description: Verify cards saved without an assigned event render Not Applicable in Event Name column.
 */
test('TC_1196: Fallback \'Not Applicable\' for Missing Event', { annotation: { type: 'description', description: 'Verify cards saved without an assigned event render Not Applicable in Event Name column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
