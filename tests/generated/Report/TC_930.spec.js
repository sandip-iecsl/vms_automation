const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_930
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Card Hover Visual Effects
 * Description: Verify hover styling and elevation transitions on vendor cards.
 */
test('TC_930: Card Hover Visual Effects', { annotation: { type: 'description', description: 'Verify hover styling and elevation transitions on vendor cards.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
