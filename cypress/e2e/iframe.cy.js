/// <reference types="cypress" />
import LeftSideMenuPage from "../Pages/LeftSideMenuPage";

describe("Iframe test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("Iframe test", () => {
    LeftSideMenuPage.getIframe().click();
    cy.frameLoaded("#iframe-checkboxes");
    cy.iframe().find("#learn-more").click();
    cy.iframe().find("#show-text").should("be.visible");
  });
});
