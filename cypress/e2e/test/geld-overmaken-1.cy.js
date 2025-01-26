describe('Overboeken Test', () => {
  beforeEach(() => {
    // Bezoek de loginpagina
    cy.visit('http://localhost:3000');

    // Klik op het account van Melvin
    cy.contains('Melvin').click();
  });

  it('Geld overboeken - Onvoldoende saldo', () => {
    // Navigeer naar de overboek URL
    cy.visit('http://localhost:3000/transfer');

    // Kies naar rekening
    cy.get('select[name="toaccount"]').select('Sophie de Blaak'); // Kies 'Rekening van Sophie'

    // Vul een bedrag in dat hoger is dan het beschikbare saldo
    cy.get('#amount').type('2000');

    // Vul een beschrijving in
    cy.get('textarea[name="description"]').type('Onvoldoende saldo test');

    // Klik op de knop 'Overboeken'
    cy.get("button").contains('Overboeken').click();

    // Controleer dat een foutmelding verschijnt voor onvoldoende saldo
    cy.contains('Onvoldoende saldo')
      .should('exist'); // Foutmelding zichtbaar

    // Controleer dat geen succesmelding verschijnt
    cy.contains('Gelukt!')
      .should('not.exist'); // Geen succesbericht zichtbaar

    // Controleer dat de betaling niet is gelukt
    cy.contains('Betaling verwerkt')
      .should('not.exist'); // Betaling mag niet verwerkt zijn
  });

  // Andere bestaande tests blijven hier ongewijzigd
});
