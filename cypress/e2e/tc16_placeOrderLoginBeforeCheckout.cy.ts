import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { generateUser, cardDetails, UserData } from '../fixtures/userData';

describe('TC16 - Realizar pedido: Login antes do Checkout', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const productDetailPage = new ProductDetailPage();
  const cartPage = new CartPage();
  let user: UserData;

  // Pré-condição: usuário existente, criado pela API do site.
  beforeEach(() => {
    user = generateUser();
    cy.createUserApi(user);
  });

  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve fazer login, adicionar produto ao carrinho e finalizar compra', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();

    homePage.clickSignupLogin();
    loginPage.login(user.email, user.password);
    homePage.verifyLoggedInAs(user.name);

    productDetailPage.addProductToCart(1);
    homePage.clickCart();
    cartPage.verifyCartVisible();
    cartPage.clickProceedToCheckout();
    cartPage.verifyAddressDetailsAndOrderReview();

    cartPage.enterComment('Pedido de teste automatizado TC16');
    cartPage.clickPlaceOrder();
    cartPage.fillPaymentDetailsAndConfirm(cardDetails);
    cartPage.verifyOrderSuccess();

    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
