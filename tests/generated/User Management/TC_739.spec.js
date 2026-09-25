const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_739
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Mobile Viewport Modal & Action Buttons Layout
 * Description: Verify layout alignment on 375px mobile viewport.
 */
test('TC_739: Mobile Viewport Modal & Action Buttons Layout', { annotation: { type: 'description', description: 'Verify layout alignment on 375px mobile viewport.' } }, async ({ page }) => {
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
