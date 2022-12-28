/* 
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcula e imprime a sua média e a sua classificação conforme a tabela abaixo.

    Media + (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, Reprovado;
    - Média entre 5 e 7, Recuperação;
    - Média acima de 7, Aprovado;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    console.log(`APROVADO! Sua nota foi: ${media.toFixed(1)}`);
} else if (media >= 5 && media <= 7) {
    console.log(`RECUPERAÇÃO! Sua nota foi: ${media.toFixed(1)}`);
} else {
    console.log(`REPROVADO! Sua nota foi: ${media.toFixed(1)}`);
}