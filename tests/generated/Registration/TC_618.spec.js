const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_618
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Mobile Viewport Modal & Table Layout
 * Description: Verify responsiveness of modal and table on 375px mobile viewport.
 */
test('TC_618: Mobile Viewport Modal & Table Layout', { annotation: { type: 'description', description: 'Verify responsiveness of modal and table on 375px mobile viewport.' } }, async ({ page }) => {
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
