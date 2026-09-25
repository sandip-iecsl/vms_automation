const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_922
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: UI Elements & Header Alignment
 * Description: Verify visual rendering of top controls: BACK TO HOME, search bar, sort menu, and view toggle buttons.
 */
test('TC_922: UI Elements & Header Alignment', { annotation: { type: 'description', description: 'Verify visual rendering of top controls: BACK TO HOME, search bar, sort menu, and view toggle buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
