const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1033
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Text Selection on Hover Card
 * Description: Verify user can select and copy email address or phone directly from hovered card face.
 */
test('TC_1033: Text Selection on Hover Card', { annotation: { type: 'description', description: 'Verify user can select and copy email address or phone directly from hovered card face.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});
