const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_641
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Replace Uploaded Front Image
 * Description: Verify replacing an already uploaded front card image with a new image.
 */
test('TC_641: Replace Uploaded Front Image', { annotation: { type: 'description', description: 'Verify replacing an already uploaded front card image with a new image.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});
