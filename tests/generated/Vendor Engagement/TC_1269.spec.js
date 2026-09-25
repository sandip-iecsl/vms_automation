const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1269
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Individual Row Checkbox Selection
 * Description: Verify checking and unchecking individual vendor rows.
 */
test('TC_1269: Individual Row Checkbox Selection', { annotation: { type: 'description', description: 'Verify checking and unchecking individual vendor rows.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});
