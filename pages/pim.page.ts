import { expect, Locator, Page } from "@playwright/test";

export class PIMpage {

    readonly pimOption: Locator;
    readonly headerPIMTitle: Locator;
    readonly addEmployeeheader: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly saveButton: Locator;

    constructor (private page:Page) {
        this.pimOption = this.page.locator("//li[@class='oxd-main-menu-item-wrapper']", {hasText: 'PIM'});
        this.headerPIMTitle = this.page.locator('//h6[text()="PIM"]')
        this.addEmployeeheader = this.page.locator('//h6[text()="Add Employee"]')
        this.firstName = this.page.getByPlaceholder('First Name');
        this.lastName = this.page.getByPlaceholder('Last Name');
        this.saveButton = this.page.locator("//button[text()=' Save ']");
    }

    async selectPIM() {
        await this.pimOption.click();
    }

    async validatePIMPage() {
        await expect(this.headerPIMTitle).toBeVisible();
    }

    async clickOnAnEmployee(op: string) {
        await this.page.getByRole("navigation").getByText(op).click();
    }

    async validateAddEmployeeText() {
        await expect(this.addEmployeeheader).toBeVisible();
    }

    async addImage() {
        await this.page.setInputFiles("//input[@class='oxd-file-input']",'fixtures/logo4.jpeg');
    }

    async addFirstName(firstname: string) {
        await this.firstName.fill(firstname);
    }

    async addLastName(lastname: string) {
        await this.firstName.fill(lastname);
    }

    async clickOnSaveButton() {
        await this.saveButton.click();
    }
}