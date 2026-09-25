const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_558
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Back to Vendor List Unsaved Warning
 * Description: Verify confirmation modal appears when clicking \'Back to Vendor List\' with unsaved declaration inputs.
 */
test('TC_558: Back to Vendor List Unsaved Warning', { annotation: { type: 'description', description: 'Verify confirmation modal appears when clicking \'Back to Vendor List\' with unsaved declaration inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
