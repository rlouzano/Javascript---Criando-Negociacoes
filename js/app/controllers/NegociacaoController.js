class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();
        /* CRIANDO UM TIPO DATA (POR PADRAO O JAVASCRIPT TRANSFORMA EM STRING) */
        let helper = new DateHelper()

        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));
    }
}