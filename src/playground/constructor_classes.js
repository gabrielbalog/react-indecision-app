class OldSyntax {
	constructor() {
		this.name = 'Gabriel Balog';
		this.getGreeting = this.getGreeting.bind(this);
	}
	getGreeting() {
		return `Hi. My name is ${this.name}!`;
	}
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
	name = 'Gabriel Balog';
	getGreeting = () => {
		return `Hi. My name is ${this.name}!`;
	}
}

const newSyntax = new NewSyntax();
const newgetGreeting = newSyntax.getGreeting;

console.log(newgetGreeting());