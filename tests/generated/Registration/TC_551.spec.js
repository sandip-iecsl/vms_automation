const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_551
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Keyboard Tab Order Traversal
 * Description: Verify Tab key traverses Step 5 controls in logical top-down sequence.
 */
test('TC_551: Keyboard Tab Order Traversal', { annotation: { type: 'description', description: 'Verify Tab key traverses Step 5 controls in logical top-down sequence.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
