/// <reference types="cypress" />

describe("file upload", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("File upload test", () => {
    const fileName = "download.jpg";

    cy.get("#file-upload-item").click();
    cy.get("#file_upload").selectFile("cypress/fixtures/" + fileName);
    cy.get("button").contains("Submit").click();
    cy.contains('You have successfully uploaded "download.jpg').should("be.visible");
  });
});
