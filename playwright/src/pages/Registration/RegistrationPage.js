const { test, expect } = require("@playwright/test");
const { NavigationBase } = require("../NavigationBase");
const { RegistrationElms } = require("./RegistrationElms");
const { TestUtil } = require("../../util/TestUtil");

exports.RegistrationPage = class RegistrationPage extends NavigationBase{

    constructor(page) {
        super(page);
    }

    async verifyRegistrationFormPresent() {
        await this.waitForElementToHaveText(RegistrationElms.REGISTARTION_BANNER, 'Registration form');
    }

    async fillInRegistrationForm({name, surname, email, phone}) {
        if (name !== undefined) {
            await this.type(RegistrationElms.NAME_INPUT, name);
        }
        if (surname !== undefined) {
            await this.type(RegistrationElms.SURNAME_INPUT, surname);
        }
        if (email !== undefined) {
            await this.type(RegistrationElms.EMAIL_INPUT, email);
        }
        if (phone !== undefined) {
            await this.type(RegistrationElms.PHONE_INPUT, phone);
        }
    }

    async clickRegisterButton() {
        await this.click(RegistrationElms.SUBMIT_BUTTON);
    }

    async verifyErrorCount(num) {
        const errorCount = await this.getCountOfElements(RegistrationElms.REQUIRED_ERROR)
        if ( errorCount === num) {
            console.log('Count of Errors is correct ' + num);
        } else if (errorCount != num) {
            throw Error('Error count does not match. Errors found: ' + errorCount + ' instead of: ' + num)
        }
    }

    async verifyInvalidInputCount(num) {
        const invalidInputCount = await this.getCountOfElements(RegistrationElms.INVALID_INPUT)
        if ( invalidInputCount === num) {
            console.log('Count of Errors is correct ' + num);
        } else if (invalidInputCount != num) {
            throw Error('Error count does not match. Errors found: ' + invalidInputCount + ' instead of: ' + num)
        }
    }
}