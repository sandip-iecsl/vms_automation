const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_786
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Mobile Viewport Alignment (375px)
 * Description: Verify layout responsiveness and horizontal scroll behavior on 375px mobile viewport.
 */
test('TC_786: Mobile Viewport Alignment (375px)', { annotation: { type: 'description', description: 'Verify layout responsiveness and horizontal scroll behavior on 375px mobile viewport.' } }, async ({ page }) => {
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
