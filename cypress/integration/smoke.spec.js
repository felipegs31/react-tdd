
describe('Smoke Text', () => {

  it('Makes sure the new welcome message comes up', () => {
    cy.visit('http://localhost:1234')
      .contains('Hello');
  });

});
