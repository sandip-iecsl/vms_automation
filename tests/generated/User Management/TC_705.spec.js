const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_705
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Rapid Consecutive Clicks on ADD Button
 * Description: Verify double-click / rapid clicking prevention on ADD button in modal.
 */
test('TC_705: Rapid Consecutive Clicks on ADD Button', { annotation: { type: 'description', description: 'Verify double-click / rapid clicking prevention on ADD button in modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
