describe('Package Detail', () => {
    let pack = {
        id: 1,
        name: 'bootstrap-vue'
    };


    it('Show package detail and add to cart', () => {
        cy.visit('/packageDetail/' + pack.id)
        cy.contains('[data-test="cardTitle"]', 'bootstrap-vue')
        cy.get('[data-test="addPackage"]').click();
        cy.visit('/myPackages');
        cy.contains('[data-test="cardTitle"]', pack.name);
    })
})