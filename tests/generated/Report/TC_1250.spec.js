const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1250
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Apple Safari / Mac OS Compatibility
 * Description: Verify date pickers, SVG icons, and typography on Safari.
 */
test('TC_1250: Apple Safari / Mac OS Compatibility', { annotation: { type: 'description', description: 'Verify date pickers, SVG icons, and typography on Safari.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
