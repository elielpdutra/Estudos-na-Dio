/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC + peso / (altura * altura));
    Instancie uma pessoa chamada José de 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC; 
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    
    }
    classificarImc(){
        const imc = this.calcularImc()

        if (imc < 18.5) {
            return `Abaixo do peso! Seu IMC é: ${imc.toFixed(1)}`;
            
        } else if (imc >= 18.5 && imc <= 24.9) {
            return `Peso normal! Seu IMC é: ${imc.toFixed(1)}`;
  
        } else if (imc >= 25 && imc <= 29.9) {
            return `Acima do peso! Seu IMC é: ${imc.toFixed(1)}`;    
        } else if (imc >= 30 && imc <= 39.9) {
            return `Obesidade! Seu IMC é: ${imc.toFixed(1)}`;
        
        } else {
            return `Obesidade grave! Seu IMC é: ${imc.toFixed(1)}`;
        }
    }
}

const jose = new Pessoa('José', 85, 1.74);
const lena = new Pessoa('Lena', 71, 1.60);

console.log(jose.classificarImc());
console.log(lena.classificarImc());