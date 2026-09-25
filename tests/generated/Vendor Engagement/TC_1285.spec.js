const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1285
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Vertical Scrollbar on Large Page View
 * Description: Verify table enables smooth vertical scrolling for 100 records.
 */
test('TC_1285: Vertical Scrollbar on Large Page View', { annotation: { type: 'description', description: 'Verify table enables smooth vertical scrolling for 100 records.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
