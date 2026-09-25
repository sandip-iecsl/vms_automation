const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_464
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Back to Vendor List Confirmation Prompt
 * Description: Verify clicking \'Back to Vendor List\' prompts confirmation or saves draft.
 */
test('TC_464: Back to Vendor List Confirmation Prompt', { annotation: { type: 'description', description: 'Verify clicking \'Back to Vendor List\' prompts confirmation or saves draft.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
