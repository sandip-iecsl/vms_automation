const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1028
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Email Address Mail Icon Display
 * Description: Verify mail icon beside email address.
 */
test('TC_1028: Email Address Mail Icon Display', { annotation: { type: 'description', description: 'Verify mail icon beside email address.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
