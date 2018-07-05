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

// class -> className

var count = 0;

var addOne = function addOne() {
	console.log('addOne');
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};

// Challenge

// -- Challenge

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne },
		'+1'
	),
	React.createElement(
		'button',
		{ onClick: minusOne },
		'-1'
	),
	React.createElement(
		'button',
		{ onClick: reset },
		'reset'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
