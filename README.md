# Trabalho Conclusão — Serviço de Pagamento

Descrição

Projeto exemplo que implementa um serviço simples de pagamentos em Node.js. Este README descreve os passos necessários para executar o projeto e os testes.

Requisitos / Ferramentas

- Node.js (recomendado v16+)
- npm (gerenciador de pacotes)
- Test runner: Mocha (já listado em `package.json`)
- Gerador de relatórios (opcional): `mochawesome` (devDependency)

Instalação

1. Clone o repositório:

   git clone git@github.com:anaclaudiacode/servico-pagamento.git
   cd trabalho-conclusao

2. Instale as dependências:

```bash
npm install
```

Executando os testes

- Executar testes (Mocha):

```bash
npm test
```

- Executar testes e gerar relatório HTML (mochawesome):

```bash
npm run test:report
# relatórios gerados em reports/ (verifique reports/mochawesome-report.html)
```

Observações importantes

- O projeto usa ES Modules (`type: "module"` em [package.json](package.json#L1-L200)); importe arquivos com `import`.
- Os testes estão em [test/servicoPagamento.test.js](test/servicoPagamento.test.js#L1-L200).
- A implementação principal está em [src/servicoPagamento.js](src/servicoPagamento.js#L1-L50).

Estrutura do projeto

- [package.json](package.json#L1-L200)
- [src/servicoPagamento.js](src/servicoPagamento.js#L1-L50)
- [test/servicoPagamento.test.js](test/servicoPagamento.test.js#L1-L200)


