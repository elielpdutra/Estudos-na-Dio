/*
    2) O IMC - Indice de Massa Corporal é um critério de Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos Condição:
    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade grave.
 */

    const altura = 1.80;
    const peso = 85;

    const IMC = peso / Math.pow(altura, 2);

    if (IMC < 18.5) {
        console.log(`Abaixo do peso! Seu IMC é: ${IMC.toFixed(1)}`);
   
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log(`Peso normal! Seu IMC é: ${IMC.toFixed(1)}`);

    } else if (IMC >= 25 && IMC <= 29.9) {
        console.log(`Acima do peso! Seu IMC é: ${IMC.toFixed(1)}`);

    } else if (IMC >= 30 && IMC <= 39.9) {
        console.log(`Obesidade! Seu IMC é: ${IMC.toFixed(1)}`);
    
    } else {
        console.log(`Obesidade grave! Seu IMC é: ${IMC.toFixed(1)}`);
    }
