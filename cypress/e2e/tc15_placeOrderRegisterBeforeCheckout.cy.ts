import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { CartPage } from '../pages/CartPage';
import { generateUser, cardDetails } from '../fixtures/userData';

describe('TC15 - Realizar pedido: Registrar antes do Checkout', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const cartPage = new CartPage();

  it('Deve registrar, adicionar produto ao carrinho e finalizar compra', () => {
    const userData = generateUser();

    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar Signup/Login
    homePage.clickSignupLogin();

    // 5. Preencher dados e criar conta
    loginPage.fillSignupForm(userData.name, userData.email);
    registerPage.verifyAccountInfoVisible();
    registerPage.fillAccountDetails(userData);

    // 6. Verificar conta criada e continuar
    registerPage.verifyAccountCreated();
    registerPage.clickContinue();

    // 7. Verificar 'Logged in as username'
    homePage.verifyLoggedInAs(userData.firstName);

    // 8. Adicionar produto ao carrinho
    cy.visit('/product_details/1');
    cy.get('button:contains("Add to cart")').click();
    cy.get('button:contains("Continue Shopping")').click();

    // 9. Clicar Cart
    homePage.clickCart();

    // 10. Verificar carrinho
    cartPage.verifyCartVisible();

    // 11. Clicar Proceed To Checkout
    cartPage.clickProceedToCheckout();

    // 12. Verificar endereço de entrega e pedido
    cartPage.verifyDeliveryAddress();

    // 13. Inserir comentário e clicar Place Order
    cartPage.enterComment('Pedido de teste automatizado TC15');
    cartPage.clickPlaceOrder();

    // 14-15. Preencher dados de pagamento e confirmar
    cartPage.fillPaymentDetails(cardDetails);

    // 16. Verificar sucesso do pedido
    cartPage.verifyOrderSuccess();

    // 17-18. Deletar conta e verificar
    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
