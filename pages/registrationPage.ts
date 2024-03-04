import { Page } from "@playwright/test";
export default class RegisterPage {
  constructor(public page: Page) {}

  async enterFirstName(firstName: string) {
    await this.page.locator("#input-firstname").type(firstName);
  }
  async enterLastName(lastName: string) {
    await this.page.locator("#input[name='lastname']").type(lastName);
  }

  async enterEmail(email: string) {
    await this.page.locator("#input[name='email']").type(email);
  }

  async enterPhone(phone: string) {
    await this.page.locator("#input[name='telephone']").type(phone);
  }
  async enterPassword(password: string) {
    await this.page.locator("#input[name='password']").type(password);
  }
  async enterConfirmPassword(password: string) {
    await this.page.locator("#input[name='confirm']").type(password);
  }
}
