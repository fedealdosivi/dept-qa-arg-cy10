/// <reference types="cypress" />

describe('CHALLENGE SPACEX', () => {
    beforeEach(() => {
        cy.visit('http://csb-x6dpt1.netlify.app/')
    })

    it('Checks home page loads', () => {
        cy.fixture('spacexData').then((data) => {
            cy.get('.launches-list-container').should('contain.text', data.LAUNCHE);
        });
    })
})