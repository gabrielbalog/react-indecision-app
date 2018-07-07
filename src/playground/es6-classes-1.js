class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name,
		this.age = age
	}

	getGreetings() {
		return `Hi. I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name,age,major) {
		super(name,age);
		this.major = major
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their Major is ${this.major}`
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name,age,homeLocation) {
		super(name,age);
		this.homeLocation = homeLocation;
	}

	hasLocation() {
		return !!this.homeLocation;
	}

	getGreetings() {
		let greetings = super.getGreetings();

		if (this.hasLocation()) {
			greetings += ` I'm visiting from ${this.homeLocation}`;
		}

		return greetings;
	}
}

const me = new Traveler('Gabriel Balog', 21, 'São Pauo');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getDescription());

