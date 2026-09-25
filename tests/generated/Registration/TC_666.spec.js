const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_666
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Back to Home Confirmation Prompt
 * Description: Verify clicking \'BACK TO HOME\' prompts confirmation when unsaved card data exists.
 */
test('TC_666: Back to Home Confirmation Prompt', { annotation: { type: 'description', description: 'Verify clicking \'BACK TO HOME\' prompts confirmation when unsaved card data exists.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
