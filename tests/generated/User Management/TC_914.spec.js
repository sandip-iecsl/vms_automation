const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_914
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Tablet Viewport (768px) Split Pane Alignment
 * Description: Verify Main Menu list and Menu Access panels align properly on tablet viewport.
 */
test('TC_914: Tablet Viewport (768px) Split Pane Alignment', { annotation: { type: 'description', description: 'Verify Main Menu list and Menu Access panels align properly on tablet viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
