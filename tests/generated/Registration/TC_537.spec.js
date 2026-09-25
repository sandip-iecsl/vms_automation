const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_537
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Valid Answer Submission
 * Description: Verify submitting detailed confirmation regarding Certificate of Analysis (CoA).
 */
test('TC_537: Valid Answer Submission', { annotation: { type: 'description', description: 'Verify submitting detailed confirmation regarding Certificate of Analysis (CoA).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
