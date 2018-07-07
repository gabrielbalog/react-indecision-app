class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name,
		this.age = age
	}

	getGreetings() {
		return `Hi. I am ${ this.name }!`;
	}

	getDescription() {
		return `${ this.name } is ${ this.age } year(s) old.`;
	}
}

const me = new Person('Gabriel Balog', 21);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

