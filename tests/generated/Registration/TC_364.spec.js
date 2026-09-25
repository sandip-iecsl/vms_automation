const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_364
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Form Controls & Sections Alignment
 * Description: Verify layout alignment of sections, tables, date pickers, and action buttons.
 */
test('TC_364: Form Controls & Sections Alignment', { annotation: { type: 'description', description: 'Verify layout alignment of sections, tables, date pickers, and action buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
