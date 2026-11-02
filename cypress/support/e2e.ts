import './commands';

// Domínios de anúncios/rastreamento. O automationexercise.com carrega vários deles e,
// no servidor do GitHub Actions, eles seguram o evento "load" da página (timeout de 30s)
// e abrem anúncios em tela cheia que cobrem os botões.
const AD_AND_TRACKING_HOSTS =
  /(googlesyndication|doubleclick|googleadservices|google-analytics|googletagmanager|adtrafficquality|fundingchoicesmessages|amazon-adsystem)/;

beforeEach(() => {
  cy.intercept({ url: AD_AND_TRACKING_HOSTS }, { statusCode: 204, body: '' });
});

// Erros de JavaScript do próprio site (ex.: scripts de anúncios) não devem derrubar os testes.
Cypress.on('uncaught:exception', () => false);
