import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

describe('TC09 - Buscar Produto', () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  it('Deve pesquisar por produto e exibir resultados', () => {
    // 1-3. Navegar e verificar home page
    homePage.goTo();
    homePage.verifyHomePageVisible();

    // 4. Clicar em Products
    homePage.clickProducts();

    // 5. Verificar ALL PRODUCTS
    productsPage.verifyAllProductsVisible();

    // 6. Buscar por produto
    productsPage.searchProduct('Top');

    // 7. Verificar 'SEARCHED PRODUCTS' visível
    productsPage.verifySearchedProductsVisible();

    // 8. Verificar produtos relacionados visíveis
    productsPage.verifySearchResults();
  });
});
