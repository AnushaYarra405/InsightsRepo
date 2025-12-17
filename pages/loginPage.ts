import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly clearSessionButton: Locator;
  readonly msSignInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.clearSessionButton = page.getByRole('button', { name: 'Clear Session' });
    this.msSignInButton = page.getByRole('button', { name: 'Sign in with Microsoft' });
  }

  async goto() {
    await this.page.goto('https://d38e0ppz3ehxvv.cloudfront.net/login');
  }

  async login(username: string, password: string) {
    await expect(this.usernameField).toBeVisible();
    await this.usernameField.fill(username);

    await expect(this.passwordField).toBeVisible();
    await this.passwordField.fill(password);

    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  async assertDashboardVisible(url:string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertMicrosoftButtonVisible() {
    await expect(this.msSignInButton).toBeVisible();
    await expect(this.msSignInButton).toBeEnabled();
  }
}
