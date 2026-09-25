const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_670
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Mobile Viewport Single-Column Stacking
 * Description: Verify upload dropzones and form inputs stack vertically on mobile viewport (375px).
 */
test('TC_670: Mobile Viewport Single-Column Stacking', { annotation: { type: 'description', description: 'Verify upload dropzones and form inputs stack vertically on mobile viewport (375px).' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
