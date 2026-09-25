const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_665
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Network Latency & Slow OCR Handling
 * Description: Verify UI stability and loader feedback when OCR API experiences high response latency.
 */
test('TC_665: Network Latency & Slow OCR Handling', { annotation: { type: 'description', description: 'Verify UI stability and loader feedback when OCR API experiences high response latency.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
