describe('Suggest Package', () => {

    it('Show package detail and check validations', () => {
        cy.visit('/suggestPackage')
        cy.contains('[data-test="packageLenValidation"]').should('not.visible')
        cy.contains('[data-test="packageNameValidation"]').should('not.visible')
        cy.get('[data-test="formName"]').type('H')
        cy.get('[data-test="packageLenValidation"]').should('be.visible');
        cy.get('[data-test="formName"]').type('ello World')
        cy.contains('[data-test="packageLenValidation"]').should('not.visible')
        cy.get('[data-test="formName"]').clear()
        cy.get('[data-test="packageNameValidation"]').should('be.visible')
    })
})