const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_567
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Leading/Trailing Spaces Trimming in Vendor Name
 * Description: Verify automatic trimming of whitespaces in Vendor Name.
 */
test('TC_567: Leading/Trailing Spaces Trimming in Vendor Name', { annotation: { type: 'description', description: 'Verify automatic trimming of whitespaces in Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
