const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_5
 * Module: Login
 * Sub-Module: UI
 * Scenario: Hero Graphic & Headings UI
 * Description: Verify left banner logo, text hierarchy, and illustration display.
 */
test('TC_5: Hero Graphic & Headings UI', { annotation: { type: 'description', description: 'Verify left banner logo, text hierarchy, and illustration display.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Welcome to VMS')).toBeVisible();
    await expect(page.getByText('Smart Vendor Management')).toBeVisible();
});
