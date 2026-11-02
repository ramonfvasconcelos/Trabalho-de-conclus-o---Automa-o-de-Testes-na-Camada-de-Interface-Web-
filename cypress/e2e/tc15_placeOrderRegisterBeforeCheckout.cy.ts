import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { generateUser, cardDetails, UserData } from '../fixtures/userData';

describe('TC15 - Realizar pedido: Registrar antes do Checkout', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const productDetailPage = new ProductDetailPage();
  const cartPage = new CartPage();
  let user: UserData;

  beforeEach(() => {
    user = generateUser();
  });

  afterEach(() => {
    cy.deleteUserApi(user);
  });

  it('Deve registrar, adicionar produto ao carrinho e finalizar compra', () => {
    homePage.goTo();
    homePage.verifyHomePageVisible();

    homePage.clickSignupLogin();
    loginPage.fillSignupForm(user.name, user.email);
    registerPage.verifyAccountInfoVisible();
    registerPage.fillAccountDetails(user);
    registerPage.verifyAccountCreated();
    registerPage.clickContinue();
    homePage.verifyLoggedInAs(user.name);

    productDetailPage.addProductToCart(1);
    homePage.clickCart();
    cartPage.verifyCartVisible();
    cartPage.clickProceedToCheckout();
    cartPage.verifyAddressDetailsAndOrderReview();

    cartPage.enterComment('Pedido de teste automatizado TC15');
    cartPage.clickPlaceOrder();
    cartPage.fillPaymentDetailsAndConfirm(cardDetails);
    cartPage.verifyOrderSuccess();

    homePage.clickDeleteAccount();
    registerPage.verifyAccountDeleted();
  });
});
