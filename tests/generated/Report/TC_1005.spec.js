const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1005
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: ARIA Labels on View Toggle Buttons
 * Description: Verify accessibility screen reader labels on Card View and List View toggle icons.
 */
test('TC_1005: ARIA Labels on View Toggle Buttons', { annotation: { type: 'description', description: 'Verify accessibility screen reader labels on Card View and List View toggle icons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
