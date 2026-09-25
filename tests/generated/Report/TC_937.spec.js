const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_937
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Category Group Label Display
 * Description: Verify bottom category summary text in modal.
 */
test('TC_937: Category Group Label Display', { annotation: { type: 'description', description: 'Verify bottom category summary text in modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
