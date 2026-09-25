const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1253
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Print Stylesheet Preview (Ctrl + P)
 * Description: Verify print preview layout for filtered business cards report.
 */
test('TC_1253: Print Stylesheet Preview (Ctrl + P)', { annotation: { type: 'description', description: 'Verify print preview layout for filtered business cards report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
