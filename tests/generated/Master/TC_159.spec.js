const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_159
 * Module: Master
 * Sub-Module: Region
 * Scenario: Modal / Drawer Opening
 * Description: Verify clicking \'ADD REGION\' opens the add region form modal/drawer.
 */
test('TC_159: Modal / Drawer Opening', { annotation: { type: 'description', description: 'Verify clicking \'ADD REGION\' opens the add region form modal/drawer.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add region/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
