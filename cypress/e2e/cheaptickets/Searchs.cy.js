/// <reference types="cypress" />

const LODGING_CARD = '[data-stid="lodging-card-responsive"]';
const SEARCH_BUTTON = 'button#search_button';
const DESTINATION_INPUT = 'input#destination_form_field';
const RESULTS_SECTION = '[data-stid="section-results"]';

/**
 * Utility function to perform the search.
 */
const performSearch = (destination) => {
    cy.get('.uitk-form-field-trigger').first().click();
    cy.get(DESTINATION_INPUT).type(destination).type('{enter}');
    cy.get(SEARCH_BUTTON).contains('Search').click();
};

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
                    cy.wrap(td).click();
                } else {
                    cy.log('Does not exist')
                    cy.contains('Show More').click();
                    cy.get('[data-stid="section-results"]').find('a').last().click();
                }
            })
    });
})