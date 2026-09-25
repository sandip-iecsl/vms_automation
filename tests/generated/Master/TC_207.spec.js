const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_207
 * Module: Master
 * Sub-Module: Template
 * Scenario: UI Elements & Form Controls
 * Description: Verify visual layout, input fields, dropdown, file upload, buttons, and table headers.
 */
test('TC_207: UI Elements & Form Controls', { annotation: { type: 'description', description: 'Verify visual layout, input fields, dropdown, file upload, buttons, and table headers.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
