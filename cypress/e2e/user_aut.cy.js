/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

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
    cy.get("#message").should("contain", "admin@admin.com, you have successfully logged in!"); // comanda 1

    cy.contains("admin@admin.com, you have successfully logged in!").should("be.visible"); // asta este o varianta la comanda 1
  });

  it("Login with invalid credentials test", () => {
    cy.login("admin@admin.com", "parolagresita");
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "Bad credentials! Please try again! Make sure that you've registered."); // comanda 1

    cy.contains("Bad credentials! Please try again! Make sure that you've registered.").should("be.visible"); // asta este o varianta la comanda 1
  });

  it("Register user test", () => {
    const randomLastName = faker.person.lastName();

    cy.get("#forms").click();
    cy.get('a[href="register.html"]').click();
    cy.get("#firstName").clear().type(faker.person.firstName());
    //cy.pause();
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type("123456789");
    cy.get("select").select("Australia");
    cy.get('input[type="email"]').type(randomLastName + "." + faker.internet.email());
    cy.get('input[name="password"]').type("parola");
    cy.get("#exampleCheck1").click();
    cy.get("button").contains("Register").click();
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "The account has been successfully created!");
  });
});
