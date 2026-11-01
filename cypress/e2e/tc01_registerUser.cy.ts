import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { generateUser } from '../fixtures/userData';

describe('TC01 - Registrar Usuário', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  it('Deve registrar um novo usuário com sucesso', () => {
    const userData = generateUser();

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Signup/Login
    homePage.clickSignupLogin();

    // 5. Verificar 'New User Signup!'
    loginPage.verifySignupTitleVisible();

    // 6-7. Preencher nome e email, clicar Signup
    loginPage.fillSignupForm(userData.name, userData.email);

    // 8. Verificar 'ENTER ACCOUNT INFORMATION'
    registerPage.verifyAccountInfoVisible();

    // 9-12. Preencher dados da conta
    registerPage.fillAccountDetails(userData);

    // 13-14. Verificar conta criada
    registerPage.verifyAccountCreated();

    // 15. Clicar Continue
    registerPage.clickContinue();

    // 16. Verificar 'Logged in as username'
    homePage.verifyLoggedInAs(userData.firstName);

    // 17-18. Deletar conta e verificar
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
