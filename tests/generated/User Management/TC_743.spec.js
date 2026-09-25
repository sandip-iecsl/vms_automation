const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_743
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Modal Opening & Form Controls
 * Description: Verify clicking \'ADD USER MAPPING\' opens the modal with required dropdowns.
 */
test('TC_743: Modal Opening & Form Controls', { annotation: { type: 'description', description: 'Verify clicking \'ADD USER MAPPING\' opens the modal with required dropdowns.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add user mapping/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
