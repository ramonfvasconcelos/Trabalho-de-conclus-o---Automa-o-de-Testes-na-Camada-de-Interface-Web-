import { HomePage } from '../pages/HomePage';

describe('TC10 - Verificar Subscription na Home Page', () => {
  const homePage = new HomePage();

  it('Deve se inscrever na newsletter pela home page com sucesso', () => {
    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4-7. Rolar até footer, verificar SUBSCRIPTION, inserir email e verificar sucesso
    homePage.subscribeWithEmail(`subscriber${Date.now()}@mailinator.com`);
  });
});
