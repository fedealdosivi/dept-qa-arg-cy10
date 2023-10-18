/// <reference types="cypress" />

const testCases = [
    {
        testName: 'Test with Date of Birth',
        dateOfBirth: { day: '24', month: '05', year: '1996' },
        searchQuery: 'Guinness',
    },

    {
        testName: 'Test with Date of Birth Invalid',
        dateOfBirth: { day: '24', month: '10', year: '2008' },
        searchQuery: 'Guinness',
    },

    {
        testName: 'Test case QUILMES',
        dateOfBirth: { day: '24', month: '10', year: '1996' },
        searchQuery: 'Quilmes',
    },
];

testCases.forEach((testCase) => {
    it(testCase.testName, () => {
        cy.visit('https://www.guinness.diageo.site/en/home');

        cy.fillDateOfBirth(testCase.dateOfBirth.day, testCase.dateOfBirth.month, testCase.dateOfBirth.year);
        cy.doSearch(testCase.searchQuery);
    });
});