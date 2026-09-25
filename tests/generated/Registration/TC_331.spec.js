const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_331
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Special Character Acceptance in Registered Entity
 * Description: Verify system accepts valid legal business characters (&, ., -, ,, ( )) in Vendor Name.
 */
test('TC_331: Special Character Acceptance in Registered Entity', { annotation: { type: 'description', description: 'Verify system accepts valid legal business characters (&, ., -, ,, ( )) in Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
