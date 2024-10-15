const preco_gasolina = 5.79;
const preco_etanol = 4.59;
const media_combus_km = 12;
const distancia_km = 100;
const combus_carro = ('etanol'); //Ou gasolina

const litros_consumido = distancia_km / media_combus_km;
const valor_gasto_gasolina = litros_consumido * preco_gasolina;
const valor_gasto_etanol = litros_consumido * preco_etanol;

//toFixed(2) Arredonda
if (combus_carro === 'etanol') {
    console.log(valor_gasto_gasolina.toFixed(2));
} else {
    console.log(valor_gasto_etanol.toFixed(2));
}