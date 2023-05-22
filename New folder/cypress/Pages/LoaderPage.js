class LoaderPage {
    getMessage() {
      return cy.get("#myDiv");
    }
  }
  
  export default new LoaderPage();
  
  