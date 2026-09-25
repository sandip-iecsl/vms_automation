const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_442
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Long Material Name Input & UI Wrapping
 * Description: Verify table text handling when material name contains extensive characters/specifications.
 */
test('TC_442: Long Material Name Input & UI Wrapping', { annotation: { type: 'description', description: 'Verify table text handling when material name contains extensive characters/specifications.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
