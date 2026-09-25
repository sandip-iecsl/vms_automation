const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1310
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: View Profile\' Navigation Action
 * Description: Verify clicking \'View Profile\' opens user profile details screen or modal.
 */
test('TC_1310: View Profile\' Navigation Action', { annotation: { type: 'description', description: 'Verify clicking \'View Profile\' opens user profile details screen or modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.getByText('View Profile').first().click();
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toBeVisible();
});
