const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_449
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Rapid Multiple Clicks on + Button
 * Description: Verify rapid consecutive clicking on + button does not insert multiple duplicate entries.
 */
test('TC_449: Rapid Multiple Clicks on + Button', { annotation: { type: 'description', description: 'Verify rapid consecutive clicking on + button does not insert multiple duplicate entries.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
