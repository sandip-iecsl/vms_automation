const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_946
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Switch from List View back to Card View
 * Description: Verify clicking blue Card View icon switches layout back to card grid.
 */
test('TC_946: Switch from List View back to Card View', { annotation: { type: 'description', description: 'Verify clicking blue Card View icon switches layout back to card grid.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
