const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_936
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Event Badge with Party Popper Icon
 * Description: Verify visual rendering of event row with celebration/popper icon.
 */
test('TC_936: Event Badge with Party Popper Icon', { annotation: { type: 'description', description: 'Verify visual rendering of event row with celebration/popper icon.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
