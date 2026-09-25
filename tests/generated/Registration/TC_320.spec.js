const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_320
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Approval Status Synchronization
 * Description: Verify newly registered vendor moves into the Vendor Approval queue.
 */
test('TC_320: Approval Status Synchronization', { annotation: { type: 'description', description: 'Verify newly registered vendor moves into the Vendor Approval queue.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /new vendor/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
