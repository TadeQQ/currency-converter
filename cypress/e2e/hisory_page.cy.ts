describe('The History Page', () => {
  it('successfully loads and adtef click clears history', () => {
    cy.visit('/history');

    cy.get('button').click();
    cy.wait(1000);
    cy.url().should('equal', 'http://localhost:3000/history');
  });
});
