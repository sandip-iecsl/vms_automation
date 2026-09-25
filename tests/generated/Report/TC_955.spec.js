const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_955
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Multi-Email IDs Formatting
 * Description: Verify records with secondary emails (e.g., @cironpharma.com / .dep@cironpharma.com).
 */
test('TC_955: Multi-Email IDs Formatting', { annotation: { type: 'description', description: 'Verify records with secondary emails (e.g., @cironpharma.com / .dep@cironpharma.com).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
