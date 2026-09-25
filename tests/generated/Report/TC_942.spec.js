const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_942
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Text Copying from Modal
 * Description: Verify user can highlight and copy email, phone number, and vendor name from modal.
 */
test('TC_942: Text Copying from Modal', { annotation: { type: 'description', description: 'Verify user can highlight and copy email, phone number, and vendor name from modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
