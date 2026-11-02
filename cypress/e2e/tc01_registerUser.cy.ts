import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser, UserData } from '../fixtures/userData';

describe('TC01 - Registrar Usuário', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  let user: UserData;

  beforeEach(() => {
    user = generateUser();
  });

  // Garante que não sobra usuário caso o teste falhe no meio do fluxo.
  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve registrar um novo usuário com sucesso', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    loginPage.verifySignupTitleVisible();
    loginPage.fillSignupForm(user.name, user.email);
    registerPage.verifyAccountInfoVisible();
    registerPage.fillAccountDetails(user);
    registerPage.verifyAccountCreated();
    registerPage.clickContinue();
    homePage.verifyLoggedInAs(user.name);
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
