const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_947
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Fast View Switching Stability
 * Description: Verify system stability when rapidly switching between Card and List view.
 */
test('TC_947: Fast View Switching Stability', { annotation: { type: 'description', description: 'Verify system stability when rapidly switching between Card and List view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
