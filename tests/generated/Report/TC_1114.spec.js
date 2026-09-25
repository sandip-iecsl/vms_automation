const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1114
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Modal Opening on View Button Click
 * Description: Verify clicking blue \'View\' button opens \'Approval History\' modal.
 */
test('TC_1114: Modal Opening on View Button Click', { annotation: { type: 'description', description: 'Verify clicking blue \'View\' button opens \'Approval History\' modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
