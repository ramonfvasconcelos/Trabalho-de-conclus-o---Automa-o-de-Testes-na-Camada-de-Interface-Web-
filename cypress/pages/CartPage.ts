export class CartPage {
  // Seletores
  private proceedToCheckoutBtn = '.check_out';
  private registerLoginModalBtn = 'u:contains("Register / Login")';
  private deliveryAddress = '#address_delivery';
  private commentTextarea = 'textarea.form-control';
  private placeOrderBtn = 'a.btn.btn-default.check_out';
  private nameOnCard = 'input[data-qa="name-on-card"]';
  private cardNumber = 'input[data-qa="card-number"]';
  private cvc = 'input[data-qa="cvc"]';
  private expiryMonth = 'input[data-qa="expiry-month"]';
  private expiryYear = 'input[data-qa="expiry-year"]';
  private payConfirmBtn = 'button#submit';
  private orderSuccessMsg = 'p:contains("Congratulations! Your order has been confirmed!")';

  verifyCartVisible() {
    cy.url().should('include', 'view_cart');
  }

  clickProceedToCheckout() {
    cy.get(this.proceedToCheckoutBtn).click();
  }

  clickRegisterLogin() {
    cy.get(this.registerLoginModalBtn).click();
  }

  verifyDeliveryAddress() {
    cy.get(this.deliveryAddress).should('be.visible');
  }

  enterComment(comment: string) {
    cy.get(this.commentTextarea).type(comment);
  }

  clickPlaceOrder() {
    cy.get(this.placeOrderBtn).click();
  }

  fillPaymentDetails(card: {
    nameOnCard: string;
    cardNumber: string;
    cvc: string;
    expirationMonth: string;
    expirationYear: string;
  }) {
    cy.get(this.nameOnCard).type(card.nameOnCard);
    cy.get(this.cardNumber).type(card.cardNumber);
    cy.get(this.cvc).type(card.cvc);
    cy.get(this.expiryMonth).type(card.expirationMonth);
    cy.get(this.expiryYear).type(card.expirationYear);
    cy.get(this.payConfirmBtn).click();
  }

  verifyOrderSuccess() {
    cy.get(this.orderSuccessMsg).should('be.visible');
  }
}
