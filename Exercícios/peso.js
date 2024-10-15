/* O IMC - Indice de Massa Corporal é um critério
da Organização Mundial de Saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta

Fórmla do IMC:
IMC - peso / (altura * altura)

Elabore:

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do Peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 73;
const altura = 1.67;

const formula_imc = peso / (altura * altura);

if (formula_imc < 18.5) {
    console.log('Abaixo do peso')
}

else if (formula_imc >= 18.5 && formula_imc < 25) {
    console.log('Peso Normal')
}

else if (formula_imc >= 25 && formula_imc <= 30) {
    console.log('Acima do Peso')
}

else if (formula_imc > 30 && formula_imc <= 40) {
    console.log('Obeso')
}

else if (formula_imc > 40) {
    console.log('Obesidade Grave')
}