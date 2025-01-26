describe('Overboeken Test', () => {
    beforeEach(() => {
      // Bezoek de loginpagina
      cy.visit('http://localhost:3000');
  
      // Klik op het account van Melvin
      cy.contains('Melvin').click();
    });
  
    it('Geld overboeken - 500 euro succesvol', () => {
      // Navigeer naar de overboek URL
      cy.visit('http://localhost:3000/transfer');
  
      // Kies naar rekening
      cy.get('select[name="toaccount"]').select('Sophie de Blaak'); // Kies 'Rekening van Sophie'
  
      // Vul een bedrag in van 500 euro
      cy.get('#amount').type('500');
  
      // Vul een beschrijving in
      cy.get('textarea[name="description"]').type('Overmaken van 500 euro');
  
      // Klik op de knop 'Overboeken'
      cy.get("button").contains('Overboeken').click();
  
      // Controleer dat een succesmelding verschijnt
      cy.contains('Gelukt!')
        .should('exist'); // Succesbericht zichtbaar
    });
  
    // Andere bestaande tests blijven hier ongewijzigd
  });