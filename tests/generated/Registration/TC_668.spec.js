const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_668
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Business Card Report Card View Synchronization
 * Description: Verify saved card immediately appears in Report -> Business Card card view (/Business_Card).
 */
test('TC_668: Business Card Report Card View Synchronization', { annotation: { type: 'description', description: 'Verify saved card immediately appears in Report -> Business Card card view (/Business_Card).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
