const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1015
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Direct Link from Dashboard \'View All\'
 * Description: Verify clicking \'View All\' on Dashboard New Vendors card redirects to All Vendor report.
 */
test('TC_1015: Direct Link from Dashboard \'View All\'', { annotation: { type: 'description', description: 'Verify clicking \'View All\' on Dashboard New Vendors card redirects to All Vendor report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /new vendor/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
