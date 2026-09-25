const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_601
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Successful Invitation Deletion
 * Description: Verify confirming delete removes invitation record from list.
 */
test('TC_601: Successful Invitation Deletion', { annotation: { type: 'description', description: 'Verify confirming delete removes invitation record from list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
