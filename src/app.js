console.log('App is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'This is some Info',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderIndecisionApp();
	}
};

const removeAll = () => {
	app.options = [];
	renderIndecisionApp();
}

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
	const template = (
		<div>	
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{(app.options && app.options.length > 0) ? <p>Here are your options</p> : <p>No Options</p>}
			<p>{app.options.length}</p>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.options.map((option) => <li key={option}>{option}</li>)}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
		);
	ReactDOM.render(template, appRoot);
};

renderIndecisionApp();