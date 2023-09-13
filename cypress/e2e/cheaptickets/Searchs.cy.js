/// <reference types="cypress" />

describe('Searchs feature', () => {

    it('basic search stays', () => {
        cy.visit('https://www.cheaptickets.com/');
        cy.get('.uitk-form-field-trigger').first().click().then($res => {
            cy.get('input#destination_form_field').click().type('aruba').type('{enter}');
        });
        cy.get('button#search_button').contains('Search').click();

        cy.get('[data-stid="section-results"]').should('be.visible')
            .find('[data-stid="lodging-card-responsive"]')
            ((td) => {
                // synchronously find the target element
                if (td.text().includes('Aruba')) {
                    cy.log('ARUBA EXISTE')
                } else {
                    cy.log('ARUBA NO EXISTE')
                }
            })
    });
})