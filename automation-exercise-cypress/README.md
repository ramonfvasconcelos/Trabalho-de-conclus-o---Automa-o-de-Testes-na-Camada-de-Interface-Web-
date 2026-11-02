# Automation Exercise - Testes Automatizados com Cypress

Projeto de automação de testes UI para a aplicação fictícia [Automation Exercise](https://www.automationexercise.com), desenvolvido com **Cypress** e **TypeScript**.

## 📋 Casos de Teste Implementados

| ID   | Descrição                                         |
|------|---------------------------------------------------|
| TC01 | Registrar Usuário                                 |
| TC02 | Login com credenciais corretas                    |
| TC03 | Login com credenciais incorretas                  |
| TC04 | Logout de Usuário                                 |
| TC05 | Registrar com email já existente                  |
| TC08 | Verificar All Products e página de detalhe        |
| TC09 | Buscar Produto                                    |
| TC10 | Verificar Subscription na Home Page               |
| TC15 | Realizar pedido: Registrar antes do Checkout      |
| TC16 | Realizar pedido: Login antes do Checkout          |

## 🏗️ Estrutura do Projeto

```
automation-exercise-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml              # CI/CD com GitHub Actions
├── cypress/
│   ├── e2e/                         # Specs dos casos de teste
│   │   ├── tc01_registerUser.cy.ts
│   │   ├── tc02_loginCorrectCredentials.cy.ts
│   │   ├── tc03_loginIncorrectCredentials.cy.ts
│   │   ├── tc04_logoutUser.cy.ts
│   │   ├── tc05_registerExistingEmail.cy.ts
│   │   ├── tc08_verifyProducts.cy.ts
│   │   ├── tc09_searchProduct.cy.ts
│   │   ├── tc10_subscriptionHomePage.cy.ts
│   │   ├── tc15_placeOrderRegisterBeforeCheckout.cy.ts
│   │   └── tc16_placeOrderLoginBeforeCheckout.cy.ts
│   ├── fixtures/
│   │   └── userData.ts              # Dados de teste reutilizáveis
│   ├── pages/                       # Page Object Model (POM)
│   │   ├── CartPage.ts
│   │   ├── HomePage.ts
│   │   ├── LoginPage.ts
│   │   ├── ProductDetailPage.ts
│   │   ├── ProductsPage.ts
│   │   └── RegisterPage.ts
│   └── support/
│       ├── commands.ts              # Comandos customizados
│       └── e2e.ts                   # Configurações globais
├── .gitignore
├── cypress.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Abrir interface gráfica do Cypress

```bash
npm run cy:open
```

### Executar todos os testes em modo headless

```bash
npm run cy:run
```

### Executar com navegador visível

```bash
npm run cy:run:headed
```

### Gerar relatório HTML

```bash
npm run cy:report
```

> O relatório será gerado em `cypress/reports/report.html`

## 📊 Relatórios

Após a execução, são gerados:
- **Mochawesome HTML**: `cypress/reports/report.html` — relatório visual interativo
- **JSON combinado**: `cypress/reports/combined.json` — para integração CI/CD
- **Vídeos**: `cypress/videos/` — gravação de cada teste
- **Screenshots**: `cypress/screenshots/` — capturas em caso de falha

## 🔄 GitHub Actions

O pipeline CI/CD executa automaticamente a cada push ou PR para `main`/`master`. Os artefatos (relatório, vídeos e screenshots de falhas) ficam disponíveis na aba **Actions** do repositório.

## 🧱 Padrões Utilizados

- **Page Object Model (POM)**: separação entre lógica de teste e interação com a UI
- **Custom Commands**: comandos reutilizáveis (`cy.createUser`, `cy.login`, `cy.deleteAccount`)
- **Fixtures de dados**: geração dinâmica por timestamp, evitando conflitos entre testes
- **Seletores semânticos**: uso prioritário de `data-qa` e atributos estáveis
- **Vídeos e screenshots** automáticos em falhas
- **Relatórios Mochawesome** com merge de múltiplos JSON
