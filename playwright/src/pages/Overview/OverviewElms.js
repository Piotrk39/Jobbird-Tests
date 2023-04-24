exports.OverviewElms = class OverviewElms {
    static NEW_REGISTRATION_BUTTON = "//a[text()='New registration']";

    static selectCell(number) {
        return `//table/tbody/tr/td[${number}]`
    }
}