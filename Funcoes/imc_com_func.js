/* const peso = 73;
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
} */

    function calcular_imc(peso, altura) {
        return (peso / Math.pow(altura, 2)).toFixed(1); // Arredondando para 1 casa decimal
    }
    
    function classificar_imc(imc) {
        console.log("IMC calculado:", imc);
        
        if (imc < 18.5) {
            return 'Abaixo do peso';
        }
        
        else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal';
        }
        
        else if (imc >= 25 && imc <= 30) {
            return 'Acima do Peso';
        }
        
        else if (imc > 30 && imc <= 40) {
            return 'Obeso';
        }
        
        else if (imc > 40) {
            return 'Obesidade Grave';
        }    
    }
    
    function main() {
        const peso = 75;
        const altura = 1.75;
        
        const imc = calcular_imc(peso, altura);
        console.log(classificar_imc(imc));
    }
    
    main();
    