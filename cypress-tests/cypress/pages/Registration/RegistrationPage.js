import { EMAIL_INPUT, INVALID_INPUT, NAME_INPUT, PHONE_INPUT, REGISTARTION_BANNER, REQUIRED_ERROR, SUBMIT_BUTTON, SURNAME_INPUT } from "./RegistrationElms";

Cypress.Commands.add('verifyRegistrationFormPresent', () => {
    cy.xpath(REGISTARTION_BANNER).should('have.text', 'Registration form');
});

Cypress.Commands.add('fillInRegistrationForm', ({name, surname, email, phone}) => {
    if (name !== undefined) {
        cy.get(NAME_INPUT).type(name);
    }
    if (surname !== undefined) {
        cy.get(SURNAME_INPUT).type(surname);
    }
    if (email !== undefined) {
        cy.get(EMAIL_INPUT).type(email);
    }
    if (phone !== undefined) {
        cy.get(PHONE_INPUT).type(phone);
    }
});

Cypress.Commands.add('clickRegisterButton', () => {
    cy.xpath(SUBMIT_BUTTON).click();
});

Cypress.Commands.add('verifyErrorCount', (num) => {
    cy.xpath(REQUIRED_ERROR)
        .its('length')
        .should('eq', num);
    
});

Cypress.Commands.add('verifyInvalidInputCount', (num) => {
    cy.xpath(INVALID_INPUT)
        .its('length')
        .should('eq', num);
});
