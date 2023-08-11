/// <reference types="cypress" />

describe('CHALLENGE SPACEX', () => {
    beforeEach(() => {
        cy.intercept('https://api.spacexdata.com/v3/rockets').as('getRockets')
        cy.intercept('https://api.spacexdata.com/v3/launches').as('getLaunches')
        cy.visit('http://csb-x6dpt1.netlify.app/')
        cy.wait('@getRockets').then(intercept => {
            cy.log('Rockets loaded succesfully' + intercept.response.body);
            expect(Array[4], intercept.response.body);
        })
        cy.wait('@getLaunches').then(intercept => {
            cy.log('Launches loaded succesfully' + intercept.response.body);
        })
    })

    it('Checks home page loads', () => {
        cy.fixture('spacexData').then((data) => {
            cy.get('.launches-list-container').should('contain.text', data.LAUNCHE);
        });
    })

    it('Checks for value that does not exist', () => {
        cy.fixture('spacexData').then((data) => {
            cy.get('.launches-list-container').should('not.contain.text', data.no_existe);
        });
    })
})