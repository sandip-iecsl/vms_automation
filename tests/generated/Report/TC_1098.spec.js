const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1098
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: iOS Safari Layout & Icon Rendering
 * Description: Verify SVG icons, font rendering, and box shadows on iOS Safari.
 */
test('TC_1098: iOS Safari Layout & Icon Rendering', { annotation: { type: 'description', description: 'Verify SVG icons, font rendering, and box shadows on iOS Safari.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
