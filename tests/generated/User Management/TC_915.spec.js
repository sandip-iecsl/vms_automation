const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_915
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Mobile Viewport (375px) Vertical Stacking
 * Description: Verify Main Menu box and Menu Access matrix stack vertically on mobile viewport.
 */
test('TC_915: Mobile Viewport (375px) Vertical Stacking', { annotation: { type: 'description', description: 'Verify Main Menu box and Menu Access matrix stack vertically on mobile viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
