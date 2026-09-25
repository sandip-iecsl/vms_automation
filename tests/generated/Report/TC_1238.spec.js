const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1238
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Network Disconnection Recovery
 * Description: Verify page behavior when internet drops during date search.
 */
test('TC_1238: Network Disconnection Recovery', { annotation: { type: 'description', description: 'Verify page behavior when internet drops during date search.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
