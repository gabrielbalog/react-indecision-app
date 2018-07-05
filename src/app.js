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
	count++;
	renderCounterApp();
};

// Challenge
const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};
// -- Challenge





const appRoot = document.getElementById('app');


const renderCounterApp = () => {
	const templateTwo = (
		<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
		</div>
		);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();