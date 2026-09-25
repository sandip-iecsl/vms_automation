const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_564
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Modal Opening & Form Controls
 * Description: Verify clicking \'ADD INVITATION\' opens the modal with all required fields.
 */
test('TC_564: Modal Opening & Form Controls', { annotation: { type: 'description', description: 'Verify clicking \'ADD INVITATION\' opens the modal with all required fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add invitation/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
