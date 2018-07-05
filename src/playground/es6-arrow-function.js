// default function e anonima
const square = function(x) {
	return x * x;
};

// O mesmo que a funcao acima mas nomeando a funcao
// function square(x) {
// 	return x * x;
// };

// Arrow function e uma funcao anonima, quer dizer que,
// sempre precisa ser atribuido a uma variavel
// const squareArrow = (x) => {
// 	return x * x;
// };

// O mesmo que a funcao acima, mas calculos que sao uma linha
// de retorno podem ser usados como abaixo
const squareArrow = (x) => x * x;

console.log(square(4))
console.log(squareArrow(8))

// Challenge - Use arrow functions

// const getFirstName = (name) => {
// 	return name.split(' ')[0];
// };

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Gabriel Balog'));