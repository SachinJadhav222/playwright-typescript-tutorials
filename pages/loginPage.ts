import { Page } from "@playwright/test";
export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(email: string) {
    await this.page.locator("#input-firstname").type(email);
  }
  async enterPassword(password: string) {
    await this.page.locator("#input[name='lastname']").type(password);
  }

}
