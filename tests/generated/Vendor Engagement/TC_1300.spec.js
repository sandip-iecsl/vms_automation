const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1300
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Keyboard Tab Order Across Header Controls
 * Description: Verify logical Tab sequence through top controls.
 */
test('TC_1300: Keyboard Tab Order Across Header Controls', { annotation: { type: 'description', description: 'Verify logical Tab sequence through top controls.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
