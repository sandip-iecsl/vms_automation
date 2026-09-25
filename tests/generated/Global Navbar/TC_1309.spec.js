const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1309
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Menu Dismissal via Escape Key
 * Description: Verify pressing Escape key closes active profile menu.
 */
test('TC_1309: Menu Dismissal via Escape Key', { annotation: { type: 'description', description: 'Verify pressing Escape key closes active profile menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menuitem', { name: 'Logout' })).not.toBeVisible();
});
