// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillDateOfBirth', (day, month, year) => {
    cy.get('[placeholder="DD"]').click().type(day);
    cy.get('[placeholder="MM"]').click().type(month);
    cy.get('[placeholder="YYYY"]').click().type(year);
    cy.contains('Enter').click();
});

Cypress.Commands.add('doSearch', (value) => {
    cy.get('[aria-labelledby="title-white-search desc-white-search"] ').click();
    cy.get('[placeholder="Begin typing to search"]').click();
    cy.get('[placeholder="Begin typing to search"]').type(value, { capsLock: true });
});
