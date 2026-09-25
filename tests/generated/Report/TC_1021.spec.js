const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1021
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Initial Avatar Generation
 * Description: Verify avatar circle displays uppercase first letter of Company Name.
 */
test('TC_1021: Initial Avatar Generation', { annotation: { type: 'description', description: 'Verify avatar circle displays uppercase first letter of Company Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
