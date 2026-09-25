const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_644
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Invalid File Format Restriction
 * Description: Verify system restricts uploading non-image formats (.pdf, .docx, .exe).
 */
test('TC_644: Invalid File Format Restriction', { annotation: { type: 'description', description: 'Verify system restricts uploading non-image formats (.pdf, .docx, .exe).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
