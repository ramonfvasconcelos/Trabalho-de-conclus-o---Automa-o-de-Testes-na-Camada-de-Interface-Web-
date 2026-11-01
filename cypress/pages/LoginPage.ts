export class LoginPage {
  // Seletores - Login
  private loginTitle = 'h2:contains("Login to your account")';
  private loginEmail = 'input[data-qa="login-email"]';
  private loginPassword = 'input[data-qa="login-password"]';
  private loginBtn = 'button[data-qa="login-button"]';
  private loginError = 'p:contains("Your email or password is incorrect!")';

  // Seletores - Signup
  private signupTitle = 'h2:contains("New User Signup!")';
  private signupName = 'input[data-qa="signup-name"]';
  private signupEmail = 'input[data-qa="signup-email"]';
  private signupBtn = 'button[data-qa="signup-button"]';
  private emailExistsError = 'p:contains("Email Address already exist!")';

  verifyLoginTitleVisible() {
    cy.get(this.loginTitle).should('be.visible');
  }

  verifySignupTitleVisible() {
    cy.get(this.signupTitle).should('be.visible');
  }

  login(email: string, password: string) {
    cy.get(this.loginEmail).type(email);
    cy.get(this.loginPassword).type(password);
    cy.get(this.loginBtn).click();
  }

  verifyLoginError() {
    cy.get(this.loginError).should('be.visible');
  }

  fillSignupForm(name: string, email: string) {
    cy.get(this.signupName).type(name);
    cy.get(this.signupEmail).type(email);
    cy.get(this.signupBtn).click();
  }

  verifyEmailExistsError() {
    cy.get(this.emailExistsError).should('be.visible');
  }
}
