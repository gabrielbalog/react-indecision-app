'use strict';

// default function
var square = function square(x) {
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
var squareArrow = function squareArrow(x) {
	return x * x;
};

console.log(square(4));
console.log(squareArrow(8));

// Challenge - Use arrow functions

// const getFirstName = (name) => {
// 	return name.split(' ')[0];
// };

var getFirstName = function getFirstName(name) {
	return name.split(' ')[0];
};

console.log(getFirstName('Gabriel Balog'));
