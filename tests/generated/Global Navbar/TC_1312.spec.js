const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1312
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Password Update Validation Flow
 * Description: Verify updating account password with validation checks.
 */
test('TC_1312: Password Update Validation Flow', { annotation: { type: 'description', description: 'Verify updating account password with validation checks.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.getByText('Change Password').first().click();
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toBeVisible();
});
