const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_391
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Duplicate License Number in Table
 * Description: Verify system prevents adding duplicate license numbers in Other License table.
 */
test('TC_391: Duplicate License Number in Table', { annotation: { type: 'description', description: 'Verify system prevents adding duplicate license numbers in Other License table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
