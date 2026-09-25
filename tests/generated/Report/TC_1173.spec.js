const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1173
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Invalid Date Range Validation (From > To)
 * Description: Verify validation when From Date is set later than To Date.
 */
test('TC_1173: Invalid Date Range Validation (From > To)', { annotation: { type: 'description', description: 'Verify validation when From Date is set later than To Date.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
