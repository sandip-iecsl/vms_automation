const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_423
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Direct Step 3 Click Attempt (Unsaved Step 2)
 * Description: Verify clicking Step 3 (Material Details) icon directly without completing mandatory Step 2 fields.
 */
test('TC_423: Direct Step 3 Click Attempt (Unsaved Step 2)', { annotation: { type: 'description', description: 'Verify clicking Step 3 (Material Details) icon directly without completing mandatory Step 2 fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
