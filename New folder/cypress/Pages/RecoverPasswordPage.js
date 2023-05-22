class RecoverPasswordPage {
    getRecoverPasswordLink() {
        return cy.get('a[href="recover-password.html"]');
      }

    getEmail() {
      return cy.get("#email");
    }

    getRecoverPasswordBtn() {
      return cy.get('button.btn.btn-primary'); 
    }
  }
  
  export default new RecoverPasswordPage();
  
  