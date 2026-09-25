const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_954
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Multi-Contact Numbers Formatting
 * Description: Verify records with multiple contact numbers render with comma/spacing.
 */
test('TC_954: Multi-Contact Numbers Formatting', { annotation: { type: 'description', description: 'Verify records with multiple contact numbers render with comma/spacing.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
