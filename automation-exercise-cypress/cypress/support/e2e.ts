// Importações globais e configurações do Cypress
import './commands';

// Suprimir erros de aplicação que não são relevantes para os testes
Cypress.on('uncaught:exception', () => {
  return false;
});
