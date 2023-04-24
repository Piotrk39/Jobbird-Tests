Cypress.Commands.add('NavigateToURL', (url) => {
    cy.visit(url)
});