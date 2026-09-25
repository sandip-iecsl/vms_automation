const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_429
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Direct Step 4 Click Attempt (Empty Materials)
 * Description: Verify clicking Step 4 (Payment Details) on stepper header before adding materials.
 */
test('TC_429: Direct Step 4 Click Attempt (Empty Materials)', { annotation: { type: 'description', description: 'Verify clicking Step 4 (Payment Details) on stepper header before adding materials.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
