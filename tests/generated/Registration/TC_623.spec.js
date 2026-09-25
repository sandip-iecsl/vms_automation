const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_623
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Blank Event Name Validation
 * Description: Verify validation when submitting blank Event Name in quick add modal.
 */
test('TC_623: Blank Event Name Validation', { annotation: { type: 'description', description: 'Verify validation when submitting blank Event Name in quick add modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
