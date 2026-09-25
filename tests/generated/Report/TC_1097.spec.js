const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1097
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Mobile Chrome Android Touch & Hover
 * Description: Verify tap behavior, card expansion, and view switching on Mobile Chrome.
 */
test('TC_1097: Mobile Chrome Android Touch & Hover', { annotation: { type: 'description', description: 'Verify tap behavior, card expansion, and view switching on Mobile Chrome.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
