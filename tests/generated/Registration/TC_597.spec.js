const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_597
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Edit Category Dropdown Selection
 * Description: Verify modifying assigned Category for an invited vendor.
 */
test('TC_597: Edit Category Dropdown Selection', { annotation: { type: 'description', description: 'Verify modifying assigned Category for an invited vendor.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
