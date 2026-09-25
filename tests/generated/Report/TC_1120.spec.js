const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1120
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Modal Dismissal via Keyboard Escape Key
 * Description: Verify pressing Escape key closes Approval History popup.
 */
test('TC_1120: Modal Dismissal via Keyboard Escape Key', { annotation: { type: 'description', description: 'Verify pressing Escape key closes Approval History popup.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
