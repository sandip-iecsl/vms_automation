const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_622
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Quick Add Event Modal Opening
 * Description: Verify clicking + button next to Event dropdown opens the \'Add Event\' modal.
 */
test('TC_622: Quick Add Event Modal Opening', { annotation: { type: 'description', description: 'Verify clicking + button next to Event dropdown opens the \'Add Event\' modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
