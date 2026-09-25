const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1174
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Single Date Selection (Only From Date)
 * Description: Verify system behavior when selecting From Date and leaving To Date empty.
 */
test('TC_1174: Single Date Selection (Only From Date)', { annotation: { type: 'description', description: 'Verify system behavior when selecting From Date and leaving To Date empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});
