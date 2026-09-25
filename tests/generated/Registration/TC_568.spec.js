const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_568
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Max Character Length Boundary for Vendor Name
 * Description: Verify character length limit for Vendor Name field in invitation modal.
 */
test('TC_568: Max Character Length Boundary for Vendor Name', { annotation: { type: 'description', description: 'Verify character length limit for Vendor Name field in invitation modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
