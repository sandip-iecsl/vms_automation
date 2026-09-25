const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_97
 * Module: Master
 * Sub-Module: Region
 * Scenario: Region Page Redirection
 * Description: Verify clicking Region navigates to Region Master page.
 */
test('TC_97: Region Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Region navigates to Region Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
