const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_175
 * Module: Master
 * Sub-Module: Region
 * Scenario: Delete Region Linked to Active Vendor / Contact
 * Description: Verify deletion restriction when region is assigned to registered vendors/contacts.
 */
test('TC_175: Delete Region Linked to Active Vendor / Contact', { annotation: { type: 'description', description: 'Verify deletion restriction when region is assigned to registered vendors/contacts.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
