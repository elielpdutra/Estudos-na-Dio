/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médico de combustível por quiilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço de combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoDePercurso (distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }

}

const corsa = new Carro('Chevrolet', 'Verde', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10);

console.log(`O valor gasto para realizar o percurso foi de: R$ ${corsa.calcularGastoDePercurso(70, 5).toFixed(2)}`);
console.log(`O valor gasto para realizar o percurso foi de: R$ ${palio.calcularGastoDePercurso(70, 5).toFixed(2)}`);

