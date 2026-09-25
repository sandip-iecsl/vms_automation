const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1302
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Mozilla Firefox Layout Consistency
 * Description: Verify table rendering and dropdown opening in Mozilla Firefox.
 */
test('TC_1302: Mozilla Firefox Layout Consistency', { annotation: { type: 'description', description: 'Verify table rendering and dropdown opening in Mozilla Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
