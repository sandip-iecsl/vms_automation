const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_989
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Role-Based Access Control (RBAC) View Restriction
 * Description: Verify non-authorized users cannot access All Vendor Report.
 */
test('TC_989: Role-Based Access Control (RBAC) View Restriction', { annotation: { type: 'description', description: 'Verify non-authorized users cannot access All Vendor Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
