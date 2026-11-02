import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser } from '../fixtures/userData';

describe('TC05 - Registrar com email já existente', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  before(() => {
    // Pré-condição: criar usuário que será reutilizado
    const userData = generateUser();
    Cypress.env('tc05User', userData);
    cy.createUser(userData);
    homePage.clickLogout();
  });

  it('Deve exibir erro ao tentar registrar com email já cadastrado', () => {
    const userData = Cypress.env('tc05User');

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Signup/Login
    homePage.clickSignupLogin();

    // 5. Verificar 'New User Signup!'
    loginPage.verifySignupTitleVisible();

    // 6-7. Tentar registrar com email já existente
    loginPage.fillSignupForm(userData.name, userData.email);

    // 8. Verificar mensagem de erro
    loginPage.verifyEmailExistsError();

    // Cleanup: deletar conta
    loginPage.login(userData.email, userData.password);
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
