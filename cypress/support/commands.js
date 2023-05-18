// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.get('#forms').click();
    cy.get('a[href="login.html"]').click();
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#submitLoginBtn').click();
 })
//
