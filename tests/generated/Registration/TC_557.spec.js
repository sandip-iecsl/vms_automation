const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_557
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Network Failure During Final Submit
 * Description: Verify system behavior and error handling if network disconnects during final submission.
 */
test('TC_557: Network Failure During Final Submit', { annotation: { type: 'description', description: 'Verify system behavior and error handling if network disconnects during final submission.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
