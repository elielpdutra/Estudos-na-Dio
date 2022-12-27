/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do seu carro por KM;
 5 - Distância em KM da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 4.11;
const precoGasol = 5.30;
const tipoCombustivel = 'Etanol';
const distanciaEmKm = 100;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`O preço da viagem com Etanol foi: R$${valorGasto.toFixed(2)}`);

} else if (tipoCombustivel === "Gasolina" || tipoCombustivel === "Gasol"){
    const valorGasto = litrosConsumidos * precoGasol;
    console.log(`O preço da viagem com Gasolina foi: R$${valorGasto.toFixed(2)}`);
} else {
    console.log('AVISO!!! PREENCHA O TIPO DE COMBUSTIVEL!');
}