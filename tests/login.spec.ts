import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login smoke tests', () => {
  test('valid user can login successfully', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('Admin', 'admin123');
    await login.assertLoginSuccess();

    await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
  });
});
 