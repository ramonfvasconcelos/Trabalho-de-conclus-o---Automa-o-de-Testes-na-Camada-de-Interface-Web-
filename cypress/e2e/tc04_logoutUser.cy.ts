import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser } from '../fixtures/userData';

describe('TC04 - Logout de Usuário', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  before(() => {
    // Pré-condição: criar usuário
    const userData = generateUser();
    Cypress.env('tc04User', userData);
    cy.createUser(userData);
    homePage.clickLogout();
  });

  it('Deve efetuar logout com sucesso e redirecionar para login', () => {
    const userData = Cypress.env('tc04User');

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4-7. Fazer login
    homePage.clickSignupLogin();
    loginPage.verifyLoginTitleVisible();
    loginPage.login(userData.email, userData.password);

    // 8. Verificar 'Logged in as username'
    homePage.verifyLoggedInAs(userData.firstName);

    // 9. Clicar Logout
    homePage.clickLogout();

    // 10. Verificar redirecionamento para página de login
    cy.url().should('include', '/login');
    loginPage.verifyLoginTitleVisible();

    // Cleanup: deletar conta
    loginPage.login(userData.email, userData.password);
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
