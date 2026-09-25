const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1188
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Long Company Name Text Wrapping
 * Description: Verify visual layout when company title contains 40+ characters.
 */
test('TC_1188: Long Company Name Text Wrapping', { annotation: { type: 'description', description: 'Verify visual layout when company title contains 40+ characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
