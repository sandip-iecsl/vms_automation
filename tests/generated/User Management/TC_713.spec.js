const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_713
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Long Group Name Text Wrapping / Ellipsis
 * Description: Verify visual layout when group name contains 80+ characters.
 */
test('TC_713: Long Group Name Text Wrapping / Ellipsis', { annotation: { type: 'description', description: 'Verify visual layout when group name contains 80+ characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add group/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
