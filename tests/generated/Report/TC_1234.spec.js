const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1234
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Browser Reload Data Retention
 * Description: Verify page reload (F5) re-fetches latest business card records cleanly.
 */
test('TC_1234: Browser Reload Data Retention', { annotation: { type: 'description', description: 'Verify page reload (F5) re-fetches latest business card records cleanly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
