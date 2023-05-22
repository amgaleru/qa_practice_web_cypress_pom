/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import LeftSideMenuPage from "../Pages/LeftSideMenuPage";
import RegisterPage from "../Pages/RegisterPage";
import RecoverPasswordPage from "../Pages/RecoverPasswordPage";
import PaginationPage from "../Pages/PaginationPage";
import LoaderPage from "../Pages/LoaderPage";

describe("user auth test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("Login with valid credentials test", () => {
    // cy.get('#forms').click();
    // cy.get('a[href="login.html"]').click();
    // cy.get('#email').type('admin@admin.com');
    // cy.get('#password').type('admin123');
    // cy.get('#submitLoginBtn').click();
    cy.login("admin@admin.com", "admin123");
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "admin@admin.com, you have successfully logged in!");

    cy.contains("admin@admin.com, you have successfully logged in!").should("be.visible");
  });

  it("Login with invalid credentials test", () => {
    cy.login("admin@admin.com", "parolagresita");
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "Bad credentials! Please try again! Make sure that you've registered.");

    cy.contains("Bad credentials! Please try again! Make sure that you've registered.").should("be.visible");
  });

  it("Register user test", () => {
    const randomLastName = faker.person.lastName();

    LeftSideMenuPage.getForms().click();
    RegisterPage.getRegisterLink().click();
    RegisterPage.getFirstName().clear().type(faker.person.firstName());
    //cy.pause();
    RegisterPage.getLastName().type(randomLastName);
    RegisterPage.getPhone().type("123456789");
    RegisterPage.getSelectCountry("Australia");
    RegisterPage.getEmail().type(randomLastName + "." + faker.internet.email());
    RegisterPage.getPassword().type("parola");
    RegisterPage.getTermsAndConsCheckbox().click();
    RegisterPage.getRegisterBtn().click();
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "The account has been successfully created!");
  });

  it("Recover password test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRecoverPassword().forceClick();
    RecoverPasswordPage.getRecoverPasswordLink().forceClick();
    RecoverPasswordPage.getEmail().type("admin@admin.com");
    //debugger;
    RecoverPasswordPage.getRecoverPasswordBtn().forceClick();
    cy.wait(5000);
    cy.get("#message")
      .contains("An email with the new password has been sent to admin@admin.com. Please verify your inbox!")
      .isVisible();
  });

  it("Pagination test", () => {
    LeftSideMenuPage.getPagination().click();
    cy.wait(2000);
    PaginationPage.getPages();
  });

    it.only("Loader test", () => {
      LeftSideMenuPage.getLoader().click();
      cy.wait(3000);
      LoaderPage.getMessage().contains("Tada! Some text in my newly loaded page..").isVisible();
  });

it("Pick date test", ())

});
