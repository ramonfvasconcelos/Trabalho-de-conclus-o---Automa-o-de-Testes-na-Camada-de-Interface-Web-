import { UserData } from '../fixtures/userData';

/**
 * Pré-condição via API do próprio site (API 11 - POST /api/createAccount).
 * Mais rápido e estável do que criar o usuário pela interface em todo teste.
 */
Cypress.Commands.add('createUserApi', (user: UserData) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: 'Mr',
      birth_date: user.dayOfBirth,
      birth_month: user.monthOfBirth,
      birth_year: user.yearOfBirth,
      firstname: user.firstName,
      lastname: user.lastName,
      company: user.company,
      address1: user.address1,
      address2: user.address2,
      country: user.country,
      zipcode: user.zipcode,
      state: user.state,
      city: user.city,
      mobile_number: user.mobileNumber,
    },
  }).then((res) => {
    // A API responde HTTP 200 com o código real dentro do corpo (texto JSON).
    const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
    expect(body.responseCode, `createAccount: ${body.message}`).to.eq(201);
  });
});

/**
 * Limpeza via API (API 12 - DELETE /api/deleteAccount).
 * Não falha se a conta já tiver sido apagada pelo próprio teste.
 */
Cypress.Commands.add('deleteUserApi', (user: UserData) => {
  cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: { email: user.email, password: user.password },
    failOnStatusCode: false,
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      createUserApi(user: UserData): Chainable<void>;
      deleteUserApi(user: UserData): Chainable<void>;
    }
  }
}

export {};
