class FinalizedOrderPage {
  getPhone() {
    return cy.get("#phone");
  }

  getStreet() {
    return cy.get("input[name='street']");
  }

  getCity() {
    return cy.get("input[name='city']");
  }

  getCountry() {
    return cy.get("select");
  }

  getSubmitOrderBtn() {
    return cy.get("#submitOrderBtn");
  }
}

export default new FinalizedOrderPage();
