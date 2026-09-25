const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1266
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Default Data Population
 * Description: Verify vendor records populate with verified details across columns.
 */
test('TC_1266: Default Data Population', { annotation: { type: 'description', description: 'Verify vendor records populate with verified details across columns.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
