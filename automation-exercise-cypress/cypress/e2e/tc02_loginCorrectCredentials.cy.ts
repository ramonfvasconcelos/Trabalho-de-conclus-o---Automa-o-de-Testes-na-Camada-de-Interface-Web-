import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser } from '../fixtures/userData';

describe('TC02 - Login com credenciais corretas', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  before(() => {
    // Pré-condição: criar usuário para usar no teste
    const userData = generateUser();
    Cypress.env('tc02User', userData);
    cy.createUser(userData);
    homePage.clickLogout();
  });

  it('Deve efetuar login com email e senha corretos', () => {
    const userData = Cypress.env('tc02User');

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Signup/Login
    homePage.clickSignupLogin();

    // 5. Verificar 'Login to your account'
    loginPage.verifyLoginTitleVisible();

    // 6-7. Entrar com credenciais corretas
    loginPage.login(userData.email, userData.password);

    // 8. Verificar 'Logged in as username'
    homePage.verifyLoggedInAs(userData.firstName);

    // 9-10. Deletar conta e verificar
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
