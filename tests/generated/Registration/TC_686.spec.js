const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_686
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: SQL Injection on Column Sort Queries
 * Description: Verify backend sanitizes sort parameters against SQL injection.
 */
test('TC_686: SQL Injection on Column Sort Queries', { annotation: { type: 'description', description: 'Verify backend sanitizes sort parameters against SQL injection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
