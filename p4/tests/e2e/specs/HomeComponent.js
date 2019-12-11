// https://docs.cypress.io/api/introduction/api.html

describe('Home Component', () => {
    it('Visits the homepage, checks the title and makes sure there are 3 random packages', () => {
        cy.visit('/')
        cy.contains('h4', 'Vue Package Manager')
        cy.get('[data-test="cardTitle"').should('have.length', 3)
    })
})
