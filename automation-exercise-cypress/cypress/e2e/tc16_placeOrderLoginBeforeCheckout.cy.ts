import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CartPage } from '../pages/CartPage';
import { generateUser, cardDetails } from '../fixtures/userData';

describe('TC16 - Realizar pedido: Login antes do Checkout', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const cartPage = new CartPage();

  before(() => {
    // Pré-condição: criar usuário
    const userData = generateUser();
    Cypress.env('tc16User', userData);
    cy.createUser(userData);
    homePage.clickLogout();
  });

  it('Deve fazer login, adicionar produto ao carrinho e finalizar compra', () => {
    const userData = Cypress.env('tc16User');

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4-5. Clicar Signup/Login e fazer login
    homePage.clickSignupLogin();
    loginPage.login(userData.email, userData.password);

    // 6. Verificar 'Logged in as username'
    homePage.verifyLoggedInAs(userData.firstName);

    // 7. Adicionar produto ao carrinho
    cy.visit('/product_details/1');
    cy.get('button:contains("Add to cart")').click();
    // Fechar modal se aparecer
    cy.get('body').then(($body) => {
      if ($body.find('.modal-footer button:contains("Continue Shopping")').length > 0) {
        cy.get('.modal-footer button:contains("Continue Shopping")').click();
      }
    });

    // 8. Clicar Cart
    homePage.clickCart();

    // 9. Verificar carrinho
    cartPage.verifyCartVisible();

    // 10. Clicar Proceed To Checkout
    cartPage.clickProceedToCheckout();

    // 11. Verificar endereço de entrega e pedido
    cartPage.verifyDeliveryAddress();

    // 12. Inserir comentário e clicar Place Order
    cartPage.enterComment('Pedido de teste automatizado TC16');
    cartPage.clickPlaceOrder();

    // 13-14. Preencher dados de pagamento e confirmar
    cartPage.fillPaymentDetails(cardDetails);

    // 15. Verificar sucesso do pedido
    cartPage.verifyOrderSuccess();

    // 16-17. Deletar conta e verificar
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
