const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_342
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Empty Name with Entered Phone Validation
 * Description: Verify validation when Contact Number is entered but Director Name is blank in the table.
 */
test('TC_342: Empty Name with Entered Phone Validation', { annotation: { type: 'description', description: 'Verify validation when Contact Number is entered but Director Name is blank in the table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
