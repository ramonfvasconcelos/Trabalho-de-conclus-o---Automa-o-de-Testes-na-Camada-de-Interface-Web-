import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    // O site carrega muitos scripts de terceiros (anúncios); damos mais tempo ao "load".
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    // Repete automaticamente testes que falham por instabilidade de rede (apenas no CI).
    retries: { runMode: 2, openMode: 0 },
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
