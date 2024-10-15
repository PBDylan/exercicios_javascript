// Primeiro, no trecho "const numero = 10;", é declarada uma constante chamada numero e atribuído o valor 10 a ela.

// Em seguida, a linha "const e_numero_par = (numero % 2) === 0;" faz uma verificação para saber se o número é par. Isso é feito usando o operador módulo (%), que retorna o resto da divisão. Se o resto da divisão do número por 2 for igual a 0, a expressão retorna true (o número é par), caso contrário, retorna false (o número é ímpar).

// Por fim, "console.log(e_numero_par);" imprime o resultado no console. Para o número 10, o resultado será true, já que 10 é par.

//const numero= 10;

//const e_numero_par = (numero % 2) === 0;


//Aqui está sendo dito: Se o numéro for par, imprima "par"
//Se não, imprima "impar"
//if (e_numero_par) {
//    console.log('Par');
//} else {
//    console.log('Impar')
//}


const numero = 12;
const numero_divi_por_5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O núnero é inválido');
} else if (numero_divi_por_5) {
    console.log('Sim');
} else {
    console.log('Não');
}