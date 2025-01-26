describe('Balans bekijken', () => {
    beforeEach( () => {
        // Bezoek de loginpagina
        cy.visit('http://localhost:3000');
 
    });
 
    it('Baslans bekijken', () => {
        // Klik op het account van Melvin
        cy.contains('Melvin').click();
 
        //check voor balans
        cy.get(".accounts__account-balance")
            .should("be.visible")
    });
 
 });