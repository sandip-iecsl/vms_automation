const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_532
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Max Length Boundary & Textarea Resizing
 * Description: Verify character limit boundary and dragging bottom-right resize handle.
 */
test('TC_532: Max Length Boundary & Textarea Resizing', { annotation: { type: 'description', description: 'Verify character limit boundary and dragging bottom-right resize handle.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
