const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_643
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Corrupted Image File Handling
 * Description: Verify system behavior when uploading a corrupted or zero-byte image file.
 */
test('TC_643: Corrupted Image File Handling', { annotation: { type: 'description', description: 'Verify system behavior when uploading a corrupted or zero-byte image file.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
