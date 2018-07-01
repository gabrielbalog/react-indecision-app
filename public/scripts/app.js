'use strict';

console.log('App is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'This is some Info',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	app.options && app.options.length > 0 ? React.createElement(
		'p',
		null,
		'Here are your options'
	) : React.createElement(
		'p',
		null,
		'No Options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Locatin: ',
			location
		);
	}
}

var user = {
	name: 'Gabriel Balog',
	age: 21,
	location: 'São Paulo'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
