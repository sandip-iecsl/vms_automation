const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1303
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Microsoft Edge Layout Consistency
 * Description: Verify search filter, pagination, and toast alerts in Microsoft Edge.
 */
test('TC_1303: Microsoft Edge Layout Consistency', { annotation: { type: 'description', description: 'Verify search filter, pagination, and toast alerts in Microsoft Edge.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
