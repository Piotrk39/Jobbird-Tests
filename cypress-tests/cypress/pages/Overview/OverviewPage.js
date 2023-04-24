import { NEW_REGISTRATION_BUTTON, selectCell } from "./OverviewElms";

Cypress.Commands.add('navigateNewRegistration', () => {
    cy.xpath(NEW_REGISTRATION_BUTTON).click();
});

Cypress.Commands.add('verifyRow', ({name, surname, email}) => {
    if (name !== undefined) {
        cy.xpath(selectCell(1)).contains(name);
    }
    if (surname !== undefined) {
        cy.xpath(selectCell(2)).contains(surname);
    }
    if (email !== undefined) {
        cy.xpath(selectCell(3)).contains(email);
    }
})
