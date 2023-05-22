import FileUploadPage from "../Pages/FileUploadPage";
import LeftSideMenuPage from "../Pages/LeftSideMenuPage";
import LoginPage from "../Pages/LoginPage";

Cypress.Commands.add("login", (email, password) => {
  LeftSideMenuPage.getForms().click();
  LeftSideMenuPage.getLoginFormLink().click();
  LoginPage.getEmail().type(email);
  LoginPage.getPassword().type(password);
  LoginPage.getSubmitBtn().click();
});

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
    cy.wrap(subject).click({force: true})
  });

  Cypress.Commands.add('isVisible', {prevSubject: true}, (subject) => {
    const isVisible = (elem) => !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    )
    expect(isVisible(subject[0])).to.be.true
  })