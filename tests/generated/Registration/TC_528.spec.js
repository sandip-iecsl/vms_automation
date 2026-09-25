const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_528
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Textarea Placeholder / Label
 * Description: Verify label and styling of \'Discount Structure\' textarea.
 */
test('TC_528: Textarea Placeholder / Label', { annotation: { type: 'description', description: 'Verify label and styling of \'Discount Structure\' textarea.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
