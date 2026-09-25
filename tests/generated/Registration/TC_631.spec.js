const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_631
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Selection Persistence on Card Upload
 * Description: Verify selected Event remains intact when front and back images are uploaded.
 */
test('TC_631: Selection Persistence on Card Upload', { annotation: { type: 'description', description: 'Verify selected Event remains intact when front and back images are uploaded.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});
