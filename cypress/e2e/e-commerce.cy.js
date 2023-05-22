/// <reference types="cypress" />
import ShoppingCartPage from "../Pages/ShoppingCartPage";
import LeftSideMenuPage from "../Pages/LeftSideMenuPage";
import LoginPage from "../Pages/LoginPage";
import FinalizeOrderPage from "../Pages/FinalizeOrderPage";

describe("E-commerce test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("Submit order test", () => {
    LeftSideMenuPage.getEcommerceShop().click();
    LoginPage.getEmail().type("admin@admin.com");
    LoginPage.getPassword().type("admin123");
    LoginPage.getSubmitBtn().click();
    ShoppingCartPage.getShoppingCart().should("be.visible");
    ShoppingCartPage.getAddToCart().click();
    ShoppingCartPage.getCartQuantity().should("be.visible");
    ShoppingCartPage.getProceedCheckOut().click();
    FinalizeOrderPage.getPhone().type("0763636363");
    FinalizeOrderPage.getStreet().type("Strada Baicului");
    FinalizeOrderPage.getCity().type("Bucuresti");
    FinalizeOrderPage.getCountry().select("Austria");
    FinalizeOrderPage.getSubmitOrderBtn().click();
    cy.contains("Congrats! Your order of").should("be.visible");
  });
});
