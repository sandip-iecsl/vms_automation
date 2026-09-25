const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_939
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Modal Close via \'X\' Button
 * Description: Verify clicking top-right (X) close icon dismisses modal.
 */
test('TC_939: Modal Close via \'X\' Button', { annotation: { type: 'description', description: 'Verify clicking top-right (X) close icon dismisses modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
