describe('All Packages', () => {
    it('Shows All Packages', () => {
        cy.visit('/allPackages')
        cy.contains('[data-test="pageName"]', 'Vue All Packages')
    })

    it('Shows one package', () => {
        cy.visit('/allPackages')
        cy.contains('[data-test="cardTitle"]', 'bootstrap-vue')
        cy.get('[data-test="cardTitle"').should('have.length', 34)
    })
})