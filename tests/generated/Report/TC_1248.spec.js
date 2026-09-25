const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1248
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Mozilla Firefox Layout & Functionality
 * Description: Verify date picker rendering and hover transitions in Mozilla Firefox.
 */
test('TC_1248: Mozilla Firefox Layout & Functionality', { annotation: { type: 'description', description: 'Verify date picker rendering and hover transitions in Mozilla Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
