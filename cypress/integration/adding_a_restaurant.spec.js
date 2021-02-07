
describe('Adding a restaurant', () => {

  it('shoud display the restaurant in the list', () => {
    const restaurantName = "Sushi Place"

    cy.visit('http://localhost:1234');

    // confirm newRestaurantName field is not shown

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible')

    cy.get('[data-test="addRestaurantButton"]')
      .click()

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName, { force: true })

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click()

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible')

    cy.contains(restaurantName)
  });

});
