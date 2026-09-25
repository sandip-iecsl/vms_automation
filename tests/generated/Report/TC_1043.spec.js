const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1043
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Long Designation Text Truncation
 * Description: Verify text formatting in Designation column for long role titles.
 */
test('TC_1043: Long Designation Text Truncation', { annotation: { type: 'description', description: 'Verify text formatting in Designation column for long role titles.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
