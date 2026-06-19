# Trabalho de Conclusão – Integração Contínua Aplicada a um Serviço de Pagamento

## Repositório

GitHub: https://github.com/anaclaudiacode/servico-pagamento

---

# Objetivo

Este projeto tem como objetivo demonstrar a aplicação prática dos conceitos de Integração Contínua (Continuous Integration – CI) em uma aplicação Node.js.

A solução implementa um serviço simples de pagamento, acompanhado de testes automatizados e de um pipeline configurado no GitHub Actions para validação automática do código.

---

# Descrição da Solução

O sistema consiste em um serviço responsável por registrar pagamentos e armazená-los em memória.

Arquivo principal:

```text
src/servicoPagamento.js
```

A classe `ServicoPagamento` disponibiliza os seguintes métodos:

## Registrar Pagamento

```javascript
pagar(codigoBarras, empresa, valor)
```

Ao registrar um pagamento, o sistema:

* Recebe o código de barras, empresa e valor.
* Cria um objeto contendo os dados do pagamento.
* Classifica automaticamente o pagamento:

  * `cara` para valores acima de R$ 100,00.
  * `padrao` para valores menores ou iguais a R$ 100,00.
* Armazena o pagamento em memória.

## Consultar Último Pagamento

```javascript
ultimoPagamento()
```

Retorna o último pagamento registrado pelo sistema.

---

# Conceitos Utilizados

## Integração Contínua (CI)

Integração Contínua é uma prática de desenvolvimento de software que automatiza a validação das alterações realizadas no código.

Sempre que uma modificação é enviada ao repositório, uma pipeline é executada automaticamente para verificar se a aplicação continua funcionando corretamente.

Os principais benefícios são:

* Detecção rápida de erros.
* Maior qualidade do software.
* Redução de problemas de integração.
* Feedback imediato para os desenvolvedores.

---

## Testes Automatizados

Os testes automatizados foram implementados utilizando:

* Mocha
* Node Assert

Arquivo de testes:

```text
test/servicoPagamento.test.js
```

Os testes verificam:

* Registro correto dos pagamentos.
* Armazenamento das informações.
* Retorno do último pagamento registrado.
* Classificação correta das categorias.

---

## GitHub Actions

O projeto utiliza GitHub Actions para automatizar a execução da Integração Contínua.

Arquivo do workflow:

```text
.github/workflows/ci.yml
```

A pipeline é executada automaticamente em:

* Push para as branches principais.
* Execução manual através do workflow_dispatch.
* Execuções agendadas (quando configuradas).

---

## Pipeline de CI

A pipeline executa as seguintes etapas:

### 1. Checkout do Código

Obtém a versão mais recente do projeto armazenada no GitHub.

### 2. Configuração do Ambiente

Instala a versão do Node.js utilizada pelo projeto.

```yaml
node-version: 18
```

### 3. Instalação das Dependências

```bash
npm ci
```

Esse comando garante uma instalação reproduzível e consistente das dependências.

### 4. Execução dos Testes

```bash
npm test
```

ou

```bash
npm run test:report
```

### 5. Geração de Relatórios

A biblioteca Mochawesome gera relatórios em HTML e JSON contendo os resultados dos testes executados.

### 6. Publicação de Artefatos

Os relatórios são enviados como artefatos da execução do GitHub Actions para consulta posterior.

---

# Relatórios de Testes

O projeto utiliza o Mochawesome para gerar relatórios detalhados dos testes.

Comando:

```bash
npm run test:report
```

Arquivos gerados:

```text
reports/
├── mochawesome-report.html
└── mochawesome-report.json
```

Esses relatórios apresentam:

* Quantidade de testes executados.
* Testes aprovados.
* Testes com falha.
* Tempo de execução.

---

# Estrutura do Projeto

```text
servico-pagamento/
├── .github
│   └── workflows
│       └── ci.yml
├── src
│   └── servicoPagamento.js
├── test
│   └── servicoPagamento.test.js
├── reports
├── package.json
└── README.md
```

---

# Tecnologias Utilizadas

* Node.js
* JavaScript (ES Modules)
* Git
* GitHub
* GitHub Actions
* Mocha
* Mochawesome

---

# Como Executar o Projeto

## Clonar o repositório

```bash
git clone https://github.com/anaclaudiacode/servico-pagamento.git
cd servico-pagamento
```

## Instalar dependências

```bash
npm install
```

## Executar os testes

```bash
npm test
```

## Gerar relatório dos testes

```bash
npm run test:report
```

---

# Evidências da Integração Contínua

A pipeline é executada automaticamente pelo GitHub Actions.

Durante a execução são realizadas as seguintes atividades:

* Instalação das dependências.
* Execução dos testes automatizados.
* Geração dos relatórios de testes.
* Publicação dos relatórios como artefatos.

As execuções podem ser consultadas na aba Actions do repositório:

https://github.com/anaclaudiacode/servico-pagamento/actions

---

# Resultados Obtidos

Com a implementação da Integração Contínua foi possível:

* Automatizar a validação do código.
* Garantir a execução dos testes a cada alteração.
* Gerar relatórios automaticamente.
* Disponibilizar artefatos para análise das execuções.
* Aumentar a confiabilidade da aplicação.

---

# Conclusão

Este trabalho demonstrou a aplicação dos conceitos de Integração Contínua em um projeto Node.js por meio da utilização de testes automatizados, geração de relatórios e pipelines configuradas no GitHub Actions.

A automação implementada contribui para a melhoria da qualidade do software, permitindo identificar falhas rapidamente e garantindo maior segurança durante o desenvolvimento e a evolução da aplicação.
