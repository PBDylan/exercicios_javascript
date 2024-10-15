
const preco_combustivel = 5.79;
const media_combus_km = 12;
const distancia_km = 100;

const litros_consumido = distancia_km / media_combus_km;
const valor_gasto = litros_consumido * preco_combustivel;
console.log(valor_gasto.toFixed(2));

