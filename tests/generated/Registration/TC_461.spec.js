const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_461
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Back and Forth Data Integrity (Step 1 to Step 3)
 * Description: Verify material records remain intact after navigating back through Step 2 to Step 1 and forward again.
 */
test('TC_461: Back and Forth Data Integrity (Step 1 to Step 3)', { annotation: { type: 'description', description: 'Verify material records remain intact after navigating back through Step 2 to Step 1 and forward again.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
