console.log('App is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'This is some Info',
	options: ['One','Two']
};

const template = (
<div>	
	<h1>{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	{(app.options && app.options.length > 0) ? <p>Here are your options</p> : <p>No Options</p>}
	<ol>
		<li>Item one</li>
		<li>Item two</li>
	</ol>
</div>
);

// class -> className

let count = 0;

const addOne = () => {
	console.log('addOne');
};

const minusOne = () => {
	console.log('minusOne');
};

const reset = () => {
	console.log('reset');
};

// Challenge

// -- Challenge

const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
	</div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);