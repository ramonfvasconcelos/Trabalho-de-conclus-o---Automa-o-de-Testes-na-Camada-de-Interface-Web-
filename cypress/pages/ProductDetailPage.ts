export class ProductDetailPage {
  private productName = '.product-information h2';
  private productCategory = '.product-information p:contains("Category")';
  private productPrice = '.product-information span span';
  private productAvailability = '.product-information p:contains("Availability")';
  private productCondition = '.product-information p:contains("Condition")';
  private productBrand = '.product-information p:contains("Brand")';
  private cartModal = '#cartModal';

  verifyProductDetailVisible() {
    cy.get(this.productName).should('be.visible');
    cy.get(this.productCategory).should('be.visible');
    cy.get(this.productPrice).should('be.visible');
    cy.get(this.productAvailability).should('be.visible');
    cy.get(this.productCondition).should('be.visible');
    cy.get(this.productBrand).should('be.visible');
  }

  /** Abre a página do produto, adiciona ao carrinho e fecha o modal "Added!". */
  addProductToCart(productId = 1) {
    cy.visit(`/product_details/${productId}`);
    cy.contains('button', /add to cart/i).click();
    cy.get(this.cartModal).should('be.visible');
    cy.get(this.cartModal).contains('button', /continue shopping/i).click();
    cy.get(this.cartModal).should('not.be.visible');
  }
}
