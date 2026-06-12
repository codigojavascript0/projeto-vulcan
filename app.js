let verificarTemperatura = require('./vulcan senai/sensores.js');
let verificarMotor = require('./vulcan senai/motores.js');

const temperatura = [100, 33, 239, 80];
const dadodatemperatura = verificarTemperatura(temperatura);

const velocidadeMotor = 20;
const aceleracao = 30;

const dadosdomotor = verificarMotor(velocidadeMotor, aceleracao);

console.log("Dados da temperatura =", dadodatemperatura);
console.log("Dados do motor =", dadosdomotor);