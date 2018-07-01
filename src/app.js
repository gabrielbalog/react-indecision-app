console.log('App is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'This is some Info',
	options: ['One','Two']
};

var template = (
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

function getLocation(location) {
	if (location) {
		return <p>Locatin: {location}</p>;
	}
}

var user = {
	name: 'Gabriel Balog',
	age: 21,
	location: 'São Paulo'
};

var templateTwo = (
<div>
	<h1>{user.name ? user.name : 'Anonymous'}</h1>
	{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
	{getLocation(user.location)}
</div>

);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);