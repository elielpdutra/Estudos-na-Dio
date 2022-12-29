function escreverNome(nome) {
    return `Meu nome é: ${nome}`;
}

function verificarIdade(idade) {
    if (idade >= 18){
        return `${escreverNome('Eliel')}, eu sou maior de idade!`;
    } else {
        return `${escreverNome('Eliel')}, eu sou menor de idade!`;
    }
    
}

console.log(verificarIdade(17));