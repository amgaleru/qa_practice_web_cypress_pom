class LeftSideMenuPage {
  getForms() {
    return cy.get("#forms");
  }
  getTables() {
    return cy.get('a[href="#table"]');
  }

  getFileUpload() {
    return cy.get("#file-upload-item");
  }

  getLoginFormLink() {
    return cy.get('a[href="login.html"]');
  }

  getRecoverPassword() {
    return cy.get('a[href="recover-password.html"]');
  }

  getPagination() {
    return cy.get('a[href="pagination.html"]');
  }

  getLoader() {
    return cy.get('a[href="loader.html"]');
  }

  getDatePickers() {
    return cy.get("a[href='calendar.html]");
  }
}

export default new LeftSideMenuPage();
