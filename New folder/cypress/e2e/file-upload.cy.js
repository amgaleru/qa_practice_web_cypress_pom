/// <reference types="cypress" />
import FileUploadPage from "../Pages/FileUploadPage";
import LeftSideMenuPage from "../Pages/LeftSideMenuPage";

describe("file upload", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("File upload test", () => {
    const fileName = "download.jpg";

    LeftSideMenuPage.getFileUpload().click();
    FileUploadPage.getChooseFile().selectFile("cypress/fixtures/" + fileName);
    FileUploadPage.getSubmitBtn().click();
    cy.contains('You have successfully uploaded "download.jpg').should("be.visible");
  });
});
