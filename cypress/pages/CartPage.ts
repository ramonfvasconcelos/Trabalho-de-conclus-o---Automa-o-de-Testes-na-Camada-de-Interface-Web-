export class CartPage {
  private deliveryAddress = '#address_delivery';
  private billingAddress = '#address_invoice';
  private orderReview = '#cart_info';
  private commentTextarea = 'textarea[name="message"]';
  private nameOnCard = 'input[data-qa="name-on-card"]';
  private cardNumber = 'input[data-qa="card-number"]';
  private cvc = 'input[data-qa="cvc"]';
  private expiryMonth = 'input[data-qa="expiry-month"]';
  private expiryYear = 'input[data-qa="expiry-year"]';
  private payConfirmBtn = 'button[data-qa="pay-button"]';

  verifyCartVisible() {
    cy.url().should('include', 'view_cart');
    cy.get('#cart_info_table').should('be.visible');
  }

  clickProceedToCheckout() {
    cy.contains('.check_out', /proceed to checkout/i).click();
  }

  verifyAddressDetailsAndOrderReview() {
    cy.url().should('include', '/checkout');
    cy.get(this.deliveryAddress).should('be.visible');
    cy.get(this.billingAddress).should('be.visible');
    cy.get(this.orderReview).should('be.visible');
  }

  enterComment(comment: string) {
    cy.get(this.commentTextarea).type(comment);
  }

  clickPlaceOrder() {
    cy.contains('a', /place order/i).click();
  }

  fillPaymentDetailsAndConfirm(card: {
    nameOnCard: string;
    cardNumber: string;
    cvc: string;
    expirationMonth: string;
    expirationYear: string;
  }) {
    cy.url().should('include', '/payment');
    cy.get(this.nameOnCard).type(card.nameOnCard);
    cy.get(this.cardNumber).type(card.cardNumber);
    cy.get(this.cvc).type(card.cvc);
    cy.get(this.expiryMonth).type(card.expirationMonth);
    cy.get(this.expiryYear).type(card.expirationYear);
    cy.get(this.payConfirmBtn).click();
  }

  verifyOrderSuccess() {
    // O site confirma o pedido em /payment_done com "Order Placed!" e
    // "Congratulations! Your order has been confirmed!".
    cy.contains(
      /order placed!|your order has been placed successfully!|congratulations! your order has been confirmed!/i,
      { timeout: 20000 }
    ).should('be.visible');
  }
}
