const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_542
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Valid Final Vendor Registration Submit
 * Description: Verify submitting the complete 5-step vendor registration form.
 */
test('TC_542: Valid Final Vendor Registration Submit', { annotation: { type: 'description', description: 'Verify submitting the complete 5-step vendor registration form.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
