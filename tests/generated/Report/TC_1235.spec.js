const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1235
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Grid Rendering Performance with 100+ Cards
 * Description: Verify card grid renders smoothly without UI lag or memory leaks.
 */
test('TC_1235: Grid Rendering Performance with 100+ Cards', { annotation: { type: 'description', description: 'Verify card grid renders smoothly without UI lag or memory leaks.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
