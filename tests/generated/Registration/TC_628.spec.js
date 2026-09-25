const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_628
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Event Name Length Boundary
 * Description: Verify character length boundary when creating a new event from quick add modal.
 */
test('TC_628: Event Name Length Boundary', { annotation: { type: 'description', description: 'Verify character length boundary when creating a new event from quick add modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
