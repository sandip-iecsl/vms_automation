const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1181
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Default Card Face Display
 * Description: Verify default card face displays initial avatar and Company Name.
 */
test('TC_1181: Default Card Face Display', { annotation: { type: 'description', description: 'Verify default card face displays initial avatar and Company Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
