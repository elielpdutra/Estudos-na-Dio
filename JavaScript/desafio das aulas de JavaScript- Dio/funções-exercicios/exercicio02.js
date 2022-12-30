/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.(USANDO FUNÇÕES)

    Código condição de pagamento:
    - À vista Débito, recebe 10% de desconto; (1)
    - À vista no Dinheiro ou PIX, recebe 15% de desconto; (2)
    - Em duas vezes, preço normal da etiqueta sem juros; (3)
    - Acima de duas vezes, preço normal da etiqueta mais juros de 10%. (4)
*/

function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100)));

}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 1;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));

} else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));

} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);

} else {
    console.log(aplicarJuros(precoEtiqueta, 10));;
}