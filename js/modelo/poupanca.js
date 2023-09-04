class Poupanca extends Conta {
    constructor(numero, saldo = 0, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    creditar(valor) {
        const dataAtual = new Date();
        const dataAniversario = new Date(this.dataAniversario);

        if (dataAtual.getDate() === dataAniversario.getDate()) {
           //juros incrementado no dia do aniversario
            valor *= 1.05;
        }

        super.creditar(valor);
    }
}
