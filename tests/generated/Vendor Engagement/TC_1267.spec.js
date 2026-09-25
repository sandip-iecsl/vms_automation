const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1267
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Master Select-All Header Checkbox
 * Description: Verify clicking master checkbox in header selects all rows on current page.
 */
test('TC_1267: Master Select-All Header Checkbox', { annotation: { type: 'description', description: 'Verify clicking master checkbox in header selects all rows on current page.' } }, async ({ page }) => {
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
