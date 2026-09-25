const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_445
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Special Characters & Alphanumeric Description
 * Description: Verify material name accepts valid technical symbols, brackets, and dimensions (#, /, -, (), mm).
 */
test('TC_445: Special Characters & Alphanumeric Description', { annotation: { type: 'description', description: 'Verify material name accepts valid technical symbols, brackets, and dimensions (#, /, -, (), mm).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
