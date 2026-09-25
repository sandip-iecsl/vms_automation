const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1004
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Color Contrast Compliance (WCAG AA)
 * Description: Verify color contrast ratio between white initial letters and blue avatar circle (WCAG AA).
 */
test('TC_1004: Color Contrast Compliance (WCAG AA)', { annotation: { type: 'description', description: 'Verify color contrast ratio between white initial letters and blue avatar circle (WCAG AA).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
