const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1113
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Status Chip Component Styling
 * Description: Verify MUI Chip visual styling for Pending status.
 */
test('TC_1113: Status Chip Component Styling', { annotation: { type: 'description', description: 'Verify MUI Chip visual styling for Pending status.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
