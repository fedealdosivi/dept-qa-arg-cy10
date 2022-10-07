/// <reference types="cypress" />

describe('CHALLENGE SPACEX', () => {
    beforeEach(() => {
        cy.intercept('https://api.spacexdata.com/v3/rockets').as('getRockets')
        cy.visit('http://csb-x6dpt1.netlify.app/')
        cy.wait('@getRockets').then(intercept => {
            cy.log(intercept.response.body);
            expect(Array[4], intercept.response.body);
        })
    })

    it('Checks home page loads', () => {
        cy.fixture('spacexData').then((data) => {
            cy.get('.launches-list-container').should('contain.text', data.LAUNCHE);
        });
    })
})