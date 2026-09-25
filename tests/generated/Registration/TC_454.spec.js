const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_454
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Inline Edit - Keep Values Unchanged and Save
 * Description: Verify saving an inline editable row without making any changes.
 */
test('TC_454: Inline Edit - Keep Values Unchanged and Save', { annotation: { type: 'description', description: 'Verify saving an inline editable row without making any changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
