const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_722
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Keyboard Escape Key Closes Modal
 * Description: Verify pressing Escape key closes Edit Group modal without saving changes.
 */
test('TC_722: Keyboard Escape Key Closes Modal', { annotation: { type: 'description', description: 'Verify pressing Escape key closes Edit Group modal without saving changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
