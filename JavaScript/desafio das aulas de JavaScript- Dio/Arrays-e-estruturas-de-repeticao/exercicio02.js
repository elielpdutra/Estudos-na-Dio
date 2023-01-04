// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

const numeros = [7,12,24,35,42,53,46];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
   
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    }
}