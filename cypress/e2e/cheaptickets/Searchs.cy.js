/// <reference types="cypress" />

describe('Searchs feature', () => {

    it('I am in the main page of Cheaptickets', () => {
        let lodgingCard = '[data-stid="lodging-card-responsive"]';
        let findPrice = '475';

        cy.visit('https://www.cheaptickets.com/');
        cy.get('.uitk-form-field-trigger').first().click().then($res => {
            cy.get('input#destination_form_field').click().type('aruba').type('{enter}');
        });
        cy.get('button#search_button').contains('Search').click();

        cy.get('[data-stid="section-results"]').should('be.visible')
            .then((td) => {
                // synchronously find the target element
                if (td.text().includes(findPrice)) {
                    cy.log('Exist')
                } else {
                    cy.log('Does not exist')
                    cy.contains('Show More').click();
                }
            })
    });
})