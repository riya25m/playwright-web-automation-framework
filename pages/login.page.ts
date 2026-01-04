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

export class Logout {

  readonly userProfile: Locator;
  readonly userProfileOptions: Locator;
  readonly logintext: Locator;

  constructor (private page: Page) {
    this.userProfile = this.page.locator('//div[@class="oxd-topbar-header-userarea"]');
    this.userProfileOptions = this.page.locator('//a[@class="oxd-userdropdown-link"]', {hasText: 'Logout'});
    this.logintext = this.page.locator('//h5[text()="Login"]');
  }

  async clickOnUserProfileOnHeader() {
    await this.userProfile.click();
  }

  async clickOnLogoutoption() {
    await this.userProfileOptions.click();
  }

  async validateLoginScreen() {
    await expect(this.logintext).toBeVisible();
  }
}
