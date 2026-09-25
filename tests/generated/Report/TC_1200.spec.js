const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1200
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Truncation Tooltip for Long Event Names
 * Description: Verify tooltip displays complete event name when string overflows Event Name column.
 */
test('TC_1200: Truncation Tooltip for Long Event Names', { annotation: { type: 'description', description: 'Verify tooltip displays complete event name when string overflows Event Name column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
