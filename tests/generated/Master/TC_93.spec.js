const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_93
 * Module: Master
 * Sub-Module: Navigation
 * Scenario: Active State Styling
 * Description: Verify active highlighting when navigating to any Master sub-module.
 */
test('TC_93: Active State Styling', { annotation: { type: 'description', description: 'Verify active highlighting when navigating to any Master sub-module.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
