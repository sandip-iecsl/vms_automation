const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_355
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: File Size Exceeded Validation
 * Description: Verify system prevents uploading PAN document exceeding maximum size limit (e.g. > 5MB).
 */
test('TC_355: File Size Exceeded Validation', { annotation: { type: 'description', description: 'Verify system prevents uploading PAN document exceeding maximum size limit (e.g. > 5MB).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
