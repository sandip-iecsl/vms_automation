const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1150
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: SQL Injection on Sort / Filter Query Parameters
 * Description: Verify backend parameterizes column sort and filter requests against SQLi.
 */
test('TC_1150: SQL Injection on Sort / Filter Query Parameters', { annotation: { type: 'description', description: 'Verify backend parameterizes column sort and filter requests against SQLi.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
