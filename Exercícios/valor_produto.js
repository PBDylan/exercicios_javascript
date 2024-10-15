/* 3) Elabore um algoritmo que calcule o que deve
de ser pago por um produto, considerando o 
preço normal de eitqueta e a escolha da condição
de pagamento.
Utilize os códigos da tabela a seguir para ler qual 
a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código Condição de pagamento: 
1 - A vista Débito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais
juros de 10%
*/

const preco_produto = 25.50;
const condicao_pagamento = 4;



const debito = preco_produto - (preco_produto * 0.1); // 10% de desconto
const dinheiro_pix = preco_produto - (preco_produto * 0.15); // 15% de desconto
const duas_vezes = preco_produto; // Preço sem juros
const mais_duas_vezes = preco_produto + (preco_produto * 0.10); // 10% de juros

if (condicao_pagamento === 1) {
    console.log('O valor é de: ' + debito.toFixed(2));
}

else if (condicao_pagamento === 2) {
    console.log('O valor é de: ' + dinheiro_pix.toFixed(2));
}

else if (condicao_pagamento === 3) {
    console.log('O valor é de: ' + duas_vezes.toFixed(2));
}

else if (condicao_pagamento === 4) {
    console.log('O valor é de: ' + mais_duas_vezes.toFixed(2));
}

else {
    console.log('Erro de cálculo')
}