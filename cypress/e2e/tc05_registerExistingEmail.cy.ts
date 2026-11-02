import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { generateUser, UserData } from '../fixtures/userData';

describe('TC05 - Registrar com email já existente', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  let user: UserData;

  // Pré-condição: e-mail já cadastrado, criado pela API do site.
  beforeEach(() => {
    user = generateUser();
    cy.createUserApi(user);
  });

  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve exibir erro ao tentar registrar com email já cadastrado', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    loginPage.verifySignupTitleVisible();
    loginPage.fillSignupForm(user.name, user.email);
    loginPage.verifyEmailExistsError();
  });
});
