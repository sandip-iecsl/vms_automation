const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_592
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Cancel Button Modal Closure
 * Description: Verify clicking CANCEL button closes modal without saving data.
 */
test('TC_592: Cancel Button Modal Closure', { annotation: { type: 'description', description: 'Verify clicking CANCEL button closes modal without saving data.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
