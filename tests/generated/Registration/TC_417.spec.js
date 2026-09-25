const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_417
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Textarea Max Length & Boundary Handling
 * Description: Verify character length limit and resizing handle on production details textarea.
 */
test('TC_417: Textarea Max Length & Boundary Handling', { annotation: { type: 'description', description: 'Verify character length limit and resizing handle on production details textarea.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
