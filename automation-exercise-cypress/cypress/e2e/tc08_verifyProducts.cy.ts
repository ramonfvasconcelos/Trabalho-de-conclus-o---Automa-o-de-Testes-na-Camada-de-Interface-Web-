import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

describe('TC08 - Verificar All Products e página de detalhe', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const productDetailPage = new ProductDetailPage();

  it('Deve navegar para produtos e verificar detalhes do primeiro produto', () => {
    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Products
    homePage.clickProducts();

    // 5-6. Verificar ALL PRODUCTS e lista de produtos
    productsPage.verifyAllProductsVisible();

    // 7. Clicar em 'View Product' do primeiro produto
    productsPage.clickFirstProductView();

    // 8-9. Verificar detalhes do produto
    productDetailPage.verifyProductDetailVisible();
  });
});
