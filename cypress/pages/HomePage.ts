export class HomePage {
  // Seletores
  private signupLoginBtn = 'a[href="/login"]';
  private productsBtn = 'a[href="/products"]';
  private cartBtn = 'a[href="/view_cart"]';
  private loggedInAs = 'a:contains("Logged in as")';
  private deleteAccountBtn = 'a[href="/delete_account"]';
  private logoutBtn = 'a[href="/logout"]';
  private homeSlider = '#slider';
  private subscriptionInput = '#susbscribe_email';
  private subscribeBtn = '#subscribe';
  private subscriptionTitle = '.single-widget h2';
  private subscriptionSuccess = '#success-subscribe';

  goTo() {
    cy.visit('/');
  }

  verifyHomePageVisible() {
    cy.url().should('include', 'automationexercise.com');
    cy.get(this.homeSlider).should('be.visible');
  }

  clickSignupLogin() {
    cy.get(this.signupLoginBtn).click();
  }

  clickProducts() {
    cy.get(this.productsBtn).click();
  }

  clickCart() {
    cy.get(this.cartBtn).click();
  }

  verifyLoggedInAs(username: string) {
    cy.get(this.loggedInAs).should('contain', username);
  }

  clickDeleteAccount() {
    cy.get(this.deleteAccountBtn).click();
  }

  clickLogout() {
    cy.get(this.logoutBtn).click();
  }

  subscribeWithEmail(email: string) {
    cy.scrollTo('bottom');
    cy.get(this.subscriptionTitle).should('contain', 'SUBSCRIPTION');
    cy.get(this.subscriptionInput).type(email);
    cy.get(this.subscribeBtn).click();
    cy.get(this.subscriptionSuccess)
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!');
  }
}
