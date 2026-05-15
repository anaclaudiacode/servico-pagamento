export default class ServicoPagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor){
        this.#pagamentos.push({
            codigoBarras,
            empresa,
            valor,
            categoria: valor > 100 ? 'cara' : 'padrao'
        });
    };

    consultar(){
        return this.#pagamentos[this.#pagamentos.length - 1];
    };    
};