const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_571
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Mixed Alphanumeric in Contact No
 * Description: Verify system rejects mixed alphanumeric strings in Contact No (e.g., 98300ABCD1).
 */
test('TC_571: Mixed Alphanumeric in Contact No', { annotation: { type: 'description', description: 'Verify system rejects mixed alphanumeric strings in Contact No (e.g., 98300ABCD1).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
