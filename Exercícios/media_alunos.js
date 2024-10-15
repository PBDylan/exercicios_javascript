/* 1) Faça um algoritmo que dado as 3 notas
tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classsifica
ção conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação
- Média menor que 5, reprovação;
- Média entre 5 a 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota_1 = 6.50;
const nota_2 = 9.30;
const nota_3 = 5.50;

const media = ((nota_1 + nota_2 + nota_3) / 3);

if (media < 5) {
    console.log('O aluno foi reprovado')
}

else if (media >= 5 && media <= 7) {
    console.log('O aluno está de recuperação')
}

else if (media > 7) {
    console.log('O aluno está aprovado!')
} else {
    console.log('Erro ao calcular média')
}

