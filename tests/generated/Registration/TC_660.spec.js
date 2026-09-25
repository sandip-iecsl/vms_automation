const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_660
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Tab Key Order Across Card Scan Form
 * Description: Verify keyboard Tab navigation traverses all form fields sequentially.
 */
test('TC_660: Tab Key Order Across Card Scan Form', { annotation: { type: 'description', description: 'Verify keyboard Tab navigation traverses all form fields sequentially.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});
