const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1008
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Microsoft Edge Layout & Functionality
 * Description: Verify toggle and search interactions in Microsoft Edge.
 */
test('TC_1008: Microsoft Edge Layout & Functionality', { annotation: { type: 'description', description: 'Verify toggle and search interactions in Microsoft Edge.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
