import { UserData } from '../fixtures/userData';

export class RegisterPage {
  // Seletores
  private accountInfoTitle = 'h2.title b';
  private titleMr = '#id_gender1';
  private password = 'input[data-qa="password"]';
  private daySelect = 'select[data-qa="days"]';
  private monthSelect = 'select[data-qa="months"]';
  private yearSelect = 'select[data-qa="years"]';
  private newsletter = '#newsletter';
  private specialOffers = '#optin';
  private firstName = 'input[data-qa="first_name"]';
  private lastName = 'input[data-qa="last_name"]';
  private company = 'input[data-qa="company"]';
  private address1 = 'input[data-qa="address"]';
  private address2 = 'input[data-qa="address2"]';
  private country = 'select[data-qa="country"]';
  private state = 'input[data-qa="state"]';
  private city = 'input[data-qa="city"]';
  private zipcode = 'input[data-qa="zipcode"]';
  private mobileNumber = 'input[data-qa="mobile_number"]';
  private createAccountBtn = 'button[data-qa="create-account"]';
  private accountCreatedTitle = 'h2[data-qa="account-created"]';
  private continueBtn = 'a[data-qa="continue-button"]';
  private accountDeletedTitle = 'h2[data-qa="account-deleted"]';

  verifyAccountInfoVisible() {
    cy.get(this.accountInfoTitle).should('contain', 'Enter Account Information');
  }

  fillAccountDetails(userData: UserData) {
    cy.get(this.titleMr).check();
    cy.get(this.password).type(userData.password);
    cy.get(this.daySelect).select(userData.dayOfBirth);
    cy.get(this.monthSelect).select(userData.monthOfBirth);
    cy.get(this.yearSelect).select(userData.yearOfBirth);
    cy.get(this.newsletter).check();
    cy.get(this.specialOffers).check();
    cy.get(this.firstName).type(userData.firstName);
    cy.get(this.lastName).type(userData.lastName);
    cy.get(this.company).type(userData.company);
    cy.get(this.address1).type(userData.address1);
    cy.get(this.address2).type(userData.address2);
    cy.get(this.country).select(userData.country);
    cy.get(this.state).type(userData.state);
    cy.get(this.city).type(userData.city);
    cy.get(this.zipcode).type(userData.zipcode);
    cy.get(this.mobileNumber).type(userData.mobileNumber);
    cy.get(this.createAccountBtn).click();
  }

  verifyAccountCreated() {
    cy.get(this.accountCreatedTitle).should('be.visible');
  }

  clickContinue() {
    cy.get(this.continueBtn).click();
  }

  verifyAccountDeleted() {
    cy.get(this.accountDeletedTitle).should('be.visible');
    cy.get(this.continueBtn).click();
  }
}
