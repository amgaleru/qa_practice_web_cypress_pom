class RegisterPage {
  getRegisterLink() {
    return cy.get('a[href="register.html"]');
  }

  getFirstName() {
    return cy.get("#firstName");
  }

  getLastName() {
    return cy.get("#lastName");
  }

  getPhone() {
    return cy.get("#phone");
  }

  getSelectCountry(countryName) {
    return cy.get("select").select(countryName);
  }

  getEmail() {
    return cy.get('input[type="email"]');
  }

  getSubmitBtn() {
    return cy.get("#submitLoginBtn");
  }

  getPassword() {
    return cy.get('input[name="password"]');
  }

  getTermsAndConsCheckbox() {
    return cy.get("#exampleCheck1");
  }

  getRegisterBtn() {
    return cy.get("button").contains("Register");
  }
}

export default new RegisterPage();
