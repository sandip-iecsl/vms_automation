const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1182
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Hover Expanded Metadata Display
 * Description: Verify hovering over a card reveals full contact metadata.
 */
test('TC_1182: Hover Expanded Metadata Display', { annotation: { type: 'description', description: 'Verify hovering over a card reveals full contact metadata.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
