// Comandos customizados do Cypress

/**
 * Cria um novo usuário via UI e retorna seus dados
 */
Cypress.Commands.add('createUser', (userData: UserData) => {
  cy.visit('/login');
  cy.get('input[data-qa="signup-name"]').type(userData.name);
  cy.get('input[data-qa="signup-email"]').type(userData.email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.get('h2.title b').should('contain', 'Enter Account Information');
  cy.get('#id_gender1').check();
  cy.get('input[data-qa="password"]').type(userData.password);
  cy.get('select[data-qa="days"]').select(userData.dayOfBirth);
  cy.get('select[data-qa="months"]').select(userData.monthOfBirth);
  cy.get('select[data-qa="years"]').select(userData.yearOfBirth);
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('input[data-qa="first_name"]').type(userData.firstName);
  cy.get('input[data-qa="last_name"]').type(userData.lastName);
  cy.get('input[data-qa="company"]').type(userData.company);
  cy.get('input[data-qa="address"]').type(userData.address1);
  cy.get('input[data-qa="address2"]').type(userData.address2);
  cy.get('select[data-qa="country"]').select(userData.country);
  cy.get('input[data-qa="state"]').type(userData.state);
  cy.get('input[data-qa="city"]').type(userData.city);
  cy.get('input[data-qa="zipcode"]').type(userData.zipcode);
  cy.get('input[data-qa="mobile_number"]').type(userData.mobileNumber);
  cy.get('button[data-qa="create-account"]').click();

  cy.get('h2[data-qa="account-created"]').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();
});

/**
 * Faz login com email e senha
 */
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

/**
 * Deleta a conta do usuário logado
 */
Cypress.Commands.add('deleteAccount', () => {
  cy.get('a[href="/delete_account"]').click();
  cy.get('h2[data-qa="account-deleted"]').should('be.visible');
  cy.get('a[data-qa="continue-button"]').click();
});

// Declaração de tipos para TypeScript
export interface UserData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}

declare global {
  namespace Cypress {
    interface Chainable {
      createUser(userData: UserData): Chainable<void>;
      login(email: string, password: string): Chainable<void>;
      deleteAccount(): Chainable<void>;
    }
  }
}
