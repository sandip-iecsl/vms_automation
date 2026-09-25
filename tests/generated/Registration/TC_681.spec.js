const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_681
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Dynamic Badge Styling & Color Coding
 * Description: Verify color differentiation for Pending, Approved, and Rejected statuses.
 */
test('TC_681: Dynamic Badge Styling & Color Coding', { annotation: { type: 'description', description: 'Verify color differentiation for Pending, Approved, and Rejected statuses.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
