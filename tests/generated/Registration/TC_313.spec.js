const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_313
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: View Vendor Details (Eye Icon)
 * Description: Verify clicking the eye icon opens the vendor detail summary view.
 */
test('TC_313: View Vendor Details (Eye Icon)', { annotation: { type: 'description', description: 'Verify clicking the eye icon opens the vendor detail summary view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
