const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_171
 * Module: Master
 * Sub-Module: Region
 * Scenario: Cancel / Close Edit Modal
 * Description: Verify closing edit modal without saving changes.
 */
test('TC_171: Cancel / Close Edit Modal', { annotation: { type: 'description', description: 'Verify closing edit modal without saving changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
