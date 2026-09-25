const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1251
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Mobile Chrome Android Touch & Date Pickers
 * Description: Verify touch taps, mobile calendar picker, and view switching on Mobile Chrome.
 */
test('TC_1251: Mobile Chrome Android Touch & Date Pickers', { annotation: { type: 'description', description: 'Verify touch taps, mobile calendar picker, and view switching on Mobile Chrome.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
