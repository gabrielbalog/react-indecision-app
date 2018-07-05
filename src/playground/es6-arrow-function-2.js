// arguments object - no longer bound with arrow functions

// A diferenca das duas funcoes abaixo e que nao se pode mais
// acessar o objeto arguments, por exemplo __dict__ em python
// isso limita os argumentos a serem lidos na funcao

// ----- Funcao normal
const add = function(a, b) {
	console.log(arguments);
	return a + b;
};

// ----- Arrow Funcao
const addArrow = (a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));

// this keyword = no longer bound

// ----- Funcao normal
const user = {
	name: 'Andrew',
	cities: ['Philadelphia','New York', 'Dublin'],
	// printPlacesLived: () => { // Nao funciona pois nao tem o contexto do 
		// this, usa o contexto global
	// printPlacesLived: function () {
	printPlacesLived() { // Funciona da mesma maneira mas sem a palavra function
		const that = this; // necessario pois this nao pode ser
		// usado dentro da funcao

		this.cities.forEach(function (city) {
			// Nao funciona o codigo comentado abaixo
			// console.log(this.name + ' has lived in ' + city);
			console.log(that.name + ' has lived in ' + city);
		});
	}
};

// ----- Arrow Funcao
const userArrow = {
	name: 'Andrew',
	cities: ['Philadelphia','New York', 'Dublin'],
	printPlacesLived() {
		// A linha abaixo retorna uma lista identica a anterior mas com cada
		// dado manipulado individualmente

		return this.cities.map((city) => this.name +  ' has lived in ' + city);
		
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

user.printPlacesLived();
console.log(userArrow.printPlacesLived());

// Challenge Area

const multiplier = {
	'numbers': [1,2,3],
	'multiplyBy': 2,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());