class ECommercePage {
  getShoppingCart() {
    return cy.contains("SHOPPING CART");
  }

  getAddToCart() {
    return cy.get("div.shop-items div.shop-item:first-child button");
  }

  getCartQuantity() {
    return cy.get("input.cart-quantity-input");
  }

  getProceedCheckOut() {
    return cy.contains("PROCEED TO CHECKOUT");
  }
}

export default new ECommercePage();
