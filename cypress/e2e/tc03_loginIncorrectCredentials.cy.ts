import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

describe('TC03 - Login com credenciais incorretas', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it('Deve exibir erro ao logar com credenciais inválidas', () => {
    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Signup/Login
    homePage.clickSignupLogin();

    // 5. Verificar 'Login to your account'
    loginPage.verifyLoginTitleVisible();

    // 6-7. Entrar com credenciais incorretas
    loginPage.login('emailinvalido@test.com', 'senhaerrada123');

    // 8. Verificar mensagem de erro
    loginPage.verifyLoginError();
  });
});
