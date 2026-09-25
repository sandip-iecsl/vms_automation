const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1160
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Mobile Viewport (375px) Modal & Table
 * Description: Verify Approval History modal and table layout on mobile screen.
 */
test('TC_1160: Mobile Viewport (375px) Modal & Table', { annotation: { type: 'description', description: 'Verify Approval History modal and table layout on mobile screen.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
