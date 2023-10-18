/// <reference types="cypress" />

describe('Searchs feature', () => {

    it('I am able to search for a flight', () => {
        cy.visit('https://www.us.despegar.com/');
        cy.get('.FLIGHTS > .button-content').click();
        cy.url().should('contains', 'https://www.us.despegar.com/flights/');
        cy.get('[for="ow-sbox5"] .radio-circle').click();
        cy.get('input').contains('Enter destination city').click();
        cy.get('.sbox5-segment--2_IQ3:nth-child(1) .sbox-places-destination--1xd0k .input-tag').click();
        cy.get('.sbox5-segment--2_IQ3:nth-child(1) .sbox-places-destination--1xd0k .input-tag').type('Lille Europe, France');
        cy.get('.home-ui-body').click();
        cy.get('.sbox5-segment--2_IQ3:nth-child(1) .sbox5-dates-input1-container .input-tag').click();
        cy.get('.sbox5-floating-tooltip-opened .sbox5-month-button:nth-child(3) .sbox5-checkbox-svg').click();
        cy.get('.sbox5-floating-tooltip-opened .sbox5-month-button:nth-child(3) .checkbox-tag').click();
        cy.get('.sbox5-floating-tooltip:nth-child(1) .btn-text').click();
        cy.get('.sbox5-box-button-ovr--3LK5x > .btn-text').click();
        cy.url().should('contains', 'https://www.us.despegar.com/flights/nyc/lil/flights-to-lille-from-new+york');

    });
})

