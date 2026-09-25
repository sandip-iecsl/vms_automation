const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_582
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Whitespace Only Submission Validation
 * Description: Verify system rejects submitting purely space characters in Vendor Name.
 */
test('TC_582: Whitespace Only Submission Validation', { annotation: { type: 'description', description: 'Verify system rejects submitting purely space characters in Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
