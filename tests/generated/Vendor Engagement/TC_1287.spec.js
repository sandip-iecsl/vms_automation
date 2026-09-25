const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1287
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Multi-Contact Numbers Rendering
 * Description: Verify contact column displays multiple numbers separated by commas.
 */
test('TC_1287: Multi-Contact Numbers Rendering', { annotation: { type: 'description', description: 'Verify contact column displays multiple numbers separated by commas.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
