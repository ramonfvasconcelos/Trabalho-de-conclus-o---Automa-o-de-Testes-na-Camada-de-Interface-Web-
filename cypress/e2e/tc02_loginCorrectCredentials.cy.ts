import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser, UserData } from '../fixtures/userData';

describe('TC02 - Login com credenciais corretas', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  let user: UserData;

  // Pré-condição: usuário existente, criado pela API do site.
  beforeEach(() => {
    user = generateUser();
    cy.createUserApi(user);
  });

  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve efetuar login com email e senha corretos', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    loginPage.verifyLoginTitleVisible();
    loginPage.login(user.email, user.password);
    homePage.verifyLoggedInAs(user.name);
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
