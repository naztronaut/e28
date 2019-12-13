describe('Suggest Package', () => {
    let pack = {
        id: 1,
        name: 'bootstrap-vue'
    };


    it('Show package detail and add to cart', () => {
        cy.visit('/suggestPackage')
        cy.contains('[data-test="packageNameValidation"]').should('not.visible')
        cy.get('[data-test="formName"]').type('H')
        cy.contains('[data-test="packageNameValidation"]', "required")
        cy.get('[data-test="formName"]').type('Hello World')
        cy.contains('[data-test="packageNameValidation"]').should('not.visible')
    })
})