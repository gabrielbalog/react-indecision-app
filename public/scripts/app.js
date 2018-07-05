'use strict';

// arguments object - no longer bound with arrow functions

// A diferenca das duas funcoes abaixo e que nao se pode mais
// acessar o objeto arguments, por exemplo __dict__ em python
// isso limita os argumentos a serem lidos na funcao

// ----- Funcao normal
var add = function add(a, b) {
	console.log(arguments);
	return a + b;
};

// ----- Arrow Funcao
var addArrow = function addArrow(a, b) {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));

// this keyword = no longer bound

// ----- Funcao normal
var user = {
	name: 'Andrew',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	// printPlacesLived: () => { // Nao funciona pois nao tem o contexto do 
	// this, usa o contexto global
	// printPlacesLived: function () {
	printPlacesLived: function printPlacesLived() {
		// Funciona da mesma maneira mas sem a palavra function
		var that = this; // necessario pois this nao pode ser
		// usado dentro da funcao

		this.cities.forEach(function (city) {
			// Nao funciona o codigo comentado abaixo
			// console.log(this.name + ' has lived in ' + city);
			console.log(that.name + ' has lived in ' + city);
		});
	}
};

// ----- Arrow Funcao
var userArrow = {
	name: 'Andrew',
	cities: ['Philadelphia', 'New York', 'Dublin'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		// A linha abaixo retorna uma lista identica a anterior mas com cada
		// dado manipulado individualmente

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

user.printPlacesLived();
console.log(userArrow.printPlacesLived());

// Challenge Area

var multiplier = {
	'numbers': [1, 2, 3],
	'multiplyBy': 2,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
