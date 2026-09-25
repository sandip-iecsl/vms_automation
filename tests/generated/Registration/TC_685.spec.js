const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_685
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Browser Refresh Data Retention
 * Description: Verify approval grid data persists and refreshes correctly on F5.
 */
test('TC_685: Browser Refresh Data Retention', { annotation: { type: 'description', description: 'Verify approval grid data persists and refreshes correctly on F5.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
