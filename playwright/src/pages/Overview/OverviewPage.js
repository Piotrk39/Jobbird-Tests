const { test, expect } = require("@playwright/test");
const { NavigationBase } = require("../NavigationBase");
const { OverviewElms } = require("../Overview/OverviewElms");

exports.OverviewPage = class OverviewPage extends NavigationBase{

    constructor(page) {
        super(page);
    }

    async navigateNewRegistration() {
        await this.click(OverviewElms.NEW_REGISTRATION_BUTTON);
    }

    async verifyRow({name, surname, email}) {
        if (name !== undefined) {
            await this.waitForElementToContainText(OverviewElms.selectCell(1), name);
        }
        if (surname !== undefined) {
            await this.waitForElementToContainText(OverviewElms.selectCell(2), surname);
        }
        if (email !== undefined) {
            await this.waitForElementToContainText(OverviewElms.selectCell(3), email);
        }
    }
}