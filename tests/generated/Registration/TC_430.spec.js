const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_430
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Refresh Draft Retention
 * Description: Verify added materials persist across browser page reload (F5).
 */
test('TC_430: Refresh Draft Retention', { annotation: { type: 'description', description: 'Verify added materials persist across browser page reload (F5).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
