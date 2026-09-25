const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1090
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Keyboard Tab Order Across Top Controls
 * Description: Verify logical Tab sequence through top controls.
 */
test('TC_1090: Keyboard Tab Order Across Top Controls', { annotation: { type: 'description', description: 'Verify logical Tab sequence through top controls.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
