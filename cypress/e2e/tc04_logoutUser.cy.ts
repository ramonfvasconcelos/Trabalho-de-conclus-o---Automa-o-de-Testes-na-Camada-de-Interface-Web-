import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { generateUser, UserData } from '../fixtures/userData';

describe('TC04 - Logout de Usuário', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  let user: UserData;

  beforeEach(() => {
    user = generateUser();
    cy.createUserApi(user);
  });

  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve efetuar logout com sucesso e redirecionar para login', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    loginPage.verifyLoginTitleVisible();
    loginPage.login(user.email, user.password);
    homePage.verifyLoggedInAs(user.name);
    homePage.clickLogout();
    cy.url().should('include', '/login');
    loginPage.verifyLoginTitleVisible();
  });
});
