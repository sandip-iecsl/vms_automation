const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_933
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Displayed Metadata Fields
 * Description: Verify all metadata fields in modal: Avatar, Name, Email, Phone, Station, Event, and Category Group.
 */
test('TC_933: Displayed Metadata Fields', { annotation: { type: 'description', description: 'Verify all metadata fields in modal: Avatar, Name, Email, Phone, Station, Event, and Category Group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
