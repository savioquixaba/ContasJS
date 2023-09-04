class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoTipoConta = document.querySelector('#tipoConta');
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#dataAniversario');
    
        // Obtenha o valor selecionado no combobox
        const tipoContaSelecionado = elementoTipoConta.value;
    
        let conta;
    
        if (tipoContaSelecionado === 'Conta') {
            conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
        } else if (tipoContaSelecionado === 'ContaBonificada') {
            conta = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
        } else if (tipoContaSelecionado === 'Poupanca') {
            conta = new Poupanca(elementoNumero.value, Number(elementoSaldo.value), elementoDataAniversario.value);
        }
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        this.repositorioContas.adicionar(poupanca);
        this.inserirContaNoHTML(poupanca);

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}

