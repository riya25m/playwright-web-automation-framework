import { Page, expect } from "@playwright/test";

export async function loginScenario(page: Page) {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
}