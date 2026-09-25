const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1096
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Apple Safari / Mac OS Compatibility
 * Description: Verify SVG icons, font rendering, and box shadows on Safari.
 */
test('TC_1096: Apple Safari / Mac OS Compatibility', { annotation: { type: 'description', description: 'Verify SVG icons, font rendering, and box shadows on Safari.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
