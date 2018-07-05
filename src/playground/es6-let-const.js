// Com var voce consegue redefinir as varias, logo voce consegue trocar o tipo de dado dela
var nameVar = 'Andrew'; // Definindo a variavel
var nameVar = 'Mike'; // Redefinindo a variavel
console.log('nameVar', nameVar);


// Diferente do var o let nao deixa voce redifinir a variavel, somente atualizar o valor dela
let nameLet = 'Jen'; // Definindo a variavel
nameLet = 'Julie'; // Atualizando o valor da variavel
// let nameLet = 'Julie'; Nao funcionaria pois nao pode haver duplicidade de definicao

console.log('nameLet', nameLet);

// Semelhante ao let, const tem padrao para ser utilizado como uma variavel estatica
// Ela pode ter seu valor atualizado mas a convecao e usar para algo estatico
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Neste caso quando definimos uma variavel dentro de uma funcao e queremos usar ela
// fora, nao e possivel acessar a variavel (similar com python) 
// function getPetName() {
// 	var petName = 'Hal';
// 	return petName;
// }
// console.log(petName) // Retorna erro pois a variavel e do escopo da funcao


// Block Scoping
// Se refere ao valor de uma variavel estar presente 
// somente dentro de um bloco de codigo
// Uma variavel definida como var dentro de um bloco pode ser acessada 
// fora do bloco (semelhante a python)
// Mas a variavel definida como let ou const precisa ser definida antes 
// do bloco e apenas ser atualizada dentro do bloco
const fullName = 'Jen Mead';

let firstName; // Necessario para a variavel poder ser acessada fora do bloco

if (fullName) {
	// var firstName = fullName.split(' ')[0]; Pode ser acessada fora do bloco
	firstName = fullName.split(' ')[0]; // apenas atualizando o valor
	console.log(firstName);
}

console.log(firstName);