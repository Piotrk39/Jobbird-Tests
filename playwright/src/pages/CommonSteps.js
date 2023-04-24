exports.CommonSteps = class CommonSteps {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {        
        await this.page.goto(url);
    }
}