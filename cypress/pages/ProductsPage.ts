export class ProductsPage {
  // Seletores
  private allProductsTitle = 'h2.title.text-center';
  private productsList = '.features_items';
  private firstProductViewBtn = '.features_items .product-image-wrapper:first a[href*="/product_details/"]';
  private searchInput = '#search_product';
  private searchBtn = '#submit_search';
  private searchedProductsTitle = 'h2.title.text-center';
  private productItems = '.features_items .single-products';

  verifyAllProductsVisible() {
    cy.get(this.allProductsTitle).should('contain', 'All Products');
    cy.get(this.productsList).should('be.visible');
  }

  clickFirstProductView() {
    cy.get(this.firstProductViewBtn).first().click();
  }

  searchProduct(productName: string) {
    cy.get(this.searchInput).clear().type(productName);
    cy.get(this.searchBtn).click();
  }

  verifySearchedProductsVisible() {
    cy.get(this.searchedProductsTitle).should('contain', 'Searched Products');
  }

  verifySearchResults() {
    cy.get(this.productItems).should('have.length.greaterThan', 0);
    cy.get(this.productItems).first().should('be.visible');
  }
}
