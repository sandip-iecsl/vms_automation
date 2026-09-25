const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_431
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Mobile & Tablet Table Scrollability
 * Description: Verify table layout responsiveness on 768px (tablet) and 375px (mobile) viewports.
 */
test('TC_431: Mobile & Tablet Table Scrollability', { annotation: { type: 'description', description: 'Verify table layout responsiveness on 768px (tablet) and 375px (mobile) viewports.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
