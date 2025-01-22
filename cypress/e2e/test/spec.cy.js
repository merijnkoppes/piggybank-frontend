describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.login__account').first().click();
    cy.contains('Overboeken').click();
    cy.get('select[name="account"]').select(0);
    cy.get('select[name="account"]').select(1);
  })
})