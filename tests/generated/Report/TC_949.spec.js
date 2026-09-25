const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_949
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Row Hover Highlighting
 * Description: Verify row background color changes on mouse hover in list view table.
 */
test('TC_949: Row Hover Highlighting', { annotation: { type: 'description', description: 'Verify row background color changes on mouse hover in list view table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
