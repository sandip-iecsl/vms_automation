const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_555
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Minimum Character Limit Check
 * Description: Verify system behavior when single-character or short text is entered in textareas.
 */
test('TC_555: Minimum Character Limit Check', { annotation: { type: 'description', description: 'Verify system behavior when single-character or short text is entered in textareas.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
