function escreva_nome(nome) {
    return 'Meu nome é: ' + nome;
}

escreva_nome('Dylan');

function maior_de_idade(idade) {
    if (idade >= 18) {
        console.log(escreva_nome('Dylan, ') + 'e sou maior de idade.');
    } else {
        console.log(escreva_nome('Dylan') + ' e não sou maior de idade.');
    }
}

maior_de_idade(12)