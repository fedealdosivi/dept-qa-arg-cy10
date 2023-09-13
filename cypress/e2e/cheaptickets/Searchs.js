/// <reference types="cypress" />

describe('Searchs feature', () => {

    it('basic search stays', () => {
        cy.visit('https://www.cheaptickets.com/');
        cy.get('.uitk-form-field-trigger').first().click().then($res => {
            cy.get('input#destination_form_field').click().type('aruba').type('{enter}');
        });
        cy.get('button#search_button').click();
    });

})