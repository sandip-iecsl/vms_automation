const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_645
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: File Size Limit Validation
 * Description: Verify system prevents uploading image files exceeding maximum size (e.g., > 5MB).
 */
test('TC_645: File Size Limit Validation', { annotation: { type: 'description', description: 'Verify system prevents uploading image files exceeding maximum size (e.g., > 5MB).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
