export class ProductDetailPage {
  // Seletores
  private productName = '.product-information h2';
  private productCategory = '.product-information p:contains("Category")';
  private productPrice = '.product-information span span';
  private productAvailability = '.product-information p:contains("Availability")';
  private productCondition = '.product-information p:contains("Condition")';
  private productBrand = '.product-information p:contains("Brand")';
  private addToCartBtn = 'button:contains("Add to cart")';
  private quantityInput = '#quantity';
  private continueShoppingBtn = 'button:contains("Continue Shopping")';

  verifyProductDetailVisible() {
    cy.get(this.productName).should('be.visible');
    cy.get(this.productCategory).should('be.visible');
    cy.get(this.productPrice).should('be.visible');
    cy.get(this.productAvailability).should('be.visible');
    cy.get(this.productCondition).should('be.visible');
    cy.get(this.productBrand).should('be.visible');
  }

  addToCart() {
    cy.get(this.addToCartBtn).click();
  }

  setQuantity(quantity: string) {
    cy.get(this.quantityInput).clear().type(quantity);
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingBtn).click();
  }
}
