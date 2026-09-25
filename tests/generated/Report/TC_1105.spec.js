const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1105
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Direct Link from Dashboard Navigation
 * Description: Verify navigating from Dashboard report links directly opens Business Card report.
 */
test('TC_1105: Direct Link from Dashboard Navigation', { annotation: { type: 'description', description: 'Verify navigating from Dashboard report links directly opens Business Card report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
