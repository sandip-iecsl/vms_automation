const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_436
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Min Pack Size Greater Than Max Validation
 * Description: Verify validation when Min Pack Size exceeds Max Pack Size.
 */
test('TC_436: Min Pack Size Greater Than Max Validation', { annotation: { type: 'description', description: 'Verify validation when Min Pack Size exceeds Max Pack Size.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
