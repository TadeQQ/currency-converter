describe('The Converter Page', () => {
  it('successfully loads', () => {
    cy.visit('/converter');
    cy.url().should('include', '/converter');

    cy.get('input[type="number"]').type('100');

    cy.get('label[for="from"]')
      .next()
      .get('button')
      .first()
      .click({ multiple: true });
    //Nie da sie dostać do danej waluty

    // cy.get('label[for="to"]')
    //   .next()
    //   .get('button')
    //   .first()
    //   .click({ multiple: true })
    //   .next()
    //   .get('span')
    //   .first()
    //   .click({ force: true })
    //   .get('input')
    //   .type('USD');
    // cy.get('button[type="submit"]').click();
  });
});
