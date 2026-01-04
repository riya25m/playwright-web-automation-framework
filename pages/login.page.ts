import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

  readonly username:Locator;
  readonly password: Locator;
  readonly submitButton: Locator;
  readonly headerDashboard: Locator;

  constructor(private page:Page) {
    this.username = this.page.getByPlaceholder('Username');
    this.password = this.page.getByPlaceholder('Password');
    this.submitButton = this.page.locator("//button[@type='submit']")
    this.headerDashboard = this.page.locator('//h6[text()="Dashboard"]');
  }

  async redirectToURL() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async enterUsername(username: string) {
    await this.username.fill(username);
  }

  async enterPassowrd(password: string) {
    await this.password.fill(password);
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
  }

  async validateHeaderDashboard() {
    await expect(this.headerDashboard).toBeVisible();
  }

}