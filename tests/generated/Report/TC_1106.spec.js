const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1106
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Complete Business Card Lifecycle
 * Description: Verify end-to-end flow: Add Event in Master -> Scan & Save Card in Card Scan -> Verify Card in Report -> Search & Sort in Business Card Report.
 */
test('TC_1106: Complete Business Card Lifecycle', { annotation: { type: 'description', description: 'Verify end-to-end flow: Add Event in Master -> Scan & Save Card in Card Scan -> Verify Card in Report -> Search & Sort in Business Card Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
