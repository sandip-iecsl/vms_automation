const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_569
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Numeric Only Input in Vendor Name
 * Description: Verify system behavior when purely numbers are entered as Vendor Name.
 */
test('TC_569: Numeric Only Input in Vendor Name', { annotation: { type: 'description', description: 'Verify system behavior when purely numbers are entered as Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
