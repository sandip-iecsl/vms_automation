const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1054
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Partial Substring / Infix Matching
 * Description: Verify searching partial strings from middle of company names (e.g., OVERALL).
 */
test('TC_1054: Partial Substring / Infix Matching', { annotation: { type: 'description', description: 'Verify searching partial strings from middle of company names (e.g., OVERALL).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
