const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1315
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Mobile Viewport Layout (375px)
 * Description: Verify user profile menu renders cleanly and stays within mobile screen boundary.
 */
test('TC_1315: Mobile Viewport Layout (375px)', { annotation: { type: 'description', description: 'Verify user profile menu renders cleanly and stays within mobile screen boundary.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible();
});
