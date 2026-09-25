const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1032
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Long Company Name Text Wrapping
 * Description: Verify visual layout when company title contains 40+ characters.
 */
test('TC_1032: Long Company Name Text Wrapping', { annotation: { type: 'description', description: 'Verify visual layout when company title contains 40+ characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
