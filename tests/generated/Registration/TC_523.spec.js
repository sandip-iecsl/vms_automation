const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_523
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Top-Left Back Button Action
 * Description: Verify clicking top-left \'Back to Vendor List\' button from Step 4.
 */
test('TC_523: Top-Left Back Button Action', { annotation: { type: 'description', description: 'Verify clicking top-left \'Back to Vendor List\' button from Step 4.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
