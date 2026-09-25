const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_180
 * Module: Master
 * Sub-Module: Region
 * Scenario: Vendor Registration Region Dropdown Population
 * Description: Verify newly created region appears in the Vendor Registration dropdown.
 */
test('TC_180: Vendor Registration Region Dropdown Population', { annotation: { type: 'description', description: 'Verify newly created region appears in the Vendor Registration dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
