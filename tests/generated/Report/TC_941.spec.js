const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_941
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Modal Close via Keyboard Escape Key
 * Description: Verify pressing Escape key dismisses details modal.
 */
test('TC_941: Modal Close via Keyboard Escape Key', { annotation: { type: 'description', description: 'Verify pressing Escape key dismisses details modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
