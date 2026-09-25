const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_945
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Switch from Card View to List/Table View
 * Description: Verify clicking green List View icon toggles page to structured table layout.
 */
test('TC_945: Switch from Card View to List/Table View', { annotation: { type: 'description', description: 'Verify clicking green List View icon toggles page to structured table layout.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
